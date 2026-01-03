-- Cultivation Saga: Global Leaderboards (Supabase)
--
-- 1) Create a new Supabase project
-- 2) Open: SQL Editor -> New query
-- 3) Paste this entire file and run it
--
-- Table name expected by the game client: public.leaderboard

create table if not exists public.leaderboard (
  username text primary key,
  rebirth_points bigint not null default 0,
  best_rebirth_points bigint not null default 0,
  best_major_index int not null default 0,
  best_major_is_demon boolean not null default false,
  best_major_label text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint leaderboard_username_len check (char_length(username) between 1 and 32),
  constraint leaderboard_rp_nonneg check (rebirth_points >= 0 and best_rebirth_points >= 0),
  constraint leaderboard_major_nonneg check (best_major_index >= 0)
);

-- Helpful indexes for sorting leaderboards.
create index if not exists leaderboard_best_major_idx on public.leaderboard (best_major_index desc);
create index if not exists leaderboard_best_rp_idx on public.leaderboard (best_rebirth_points desc);

-- Keep updated_at current.
create or replace function public._touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists trg_leaderboard_touch_updated_at on public.leaderboard;
create trigger trg_leaderboard_touch_updated_at
before update on public.leaderboard
for each row
execute function public._touch_updated_at();

-- Ensure "best" fields never go down (helps prevent accidental regressions).
create or replace function public._leaderboard_enforce_best()
returns trigger
language plpgsql
as $$
declare
  old_best_rp bigint;
  old_best_major int;
begin
  old_best_rp := coalesce(old.best_rebirth_points, 0);
  old_best_major := coalesce(old.best_major_index, 0);

  new.rebirth_points := greatest(coalesce(new.rebirth_points, 0), 0);
  new.best_rebirth_points := greatest(coalesce(new.best_rebirth_points, 0), old_best_rp);
  new.best_major_index := greatest(coalesce(new.best_major_index, 0), old_best_major);

  -- Only update the label/flag when the best major realm increases.
  if (tg_op = 'UPDATE') then
    if new.best_major_index = old_best_major then
      new.best_major_label := coalesce(old.best_major_label, '');
      new.best_major_is_demon := coalesce(old.best_major_is_demon, false);
    end if;
  end if;

  return new;
end;
$$;

drop trigger if exists trg_leaderboard_enforce_best on public.leaderboard;
create trigger trg_leaderboard_enforce_best
before insert or update on public.leaderboard
for each row
execute function public._leaderboard_enforce_best();

-- Row Level Security
--
-- NOTE: Without player accounts, you cannot truly prevent spoofing.
-- This enables an "honor system" leaderboard:
-- - Anyone can read
-- - Anyone can upsert their own username (and could overwrite others if they use the same name)
--
-- If you want real protection, we can switch to an Edge Function + secret, or add Supabase Auth.

alter table public.leaderboard enable row level security;

drop policy if exists "leaderboard_select_all" on public.leaderboard;
create policy "leaderboard_select_all"
  on public.leaderboard
  for select
  using (true);

drop policy if exists "leaderboard_insert_all" on public.leaderboard;
create policy "leaderboard_insert_all"
  on public.leaderboard
  for insert
  with check (true);

drop policy if exists "leaderboard_update_all" on public.leaderboard;
create policy "leaderboard_update_all"
  on public.leaderboard
  for update
  using (true)
  with check (true);
