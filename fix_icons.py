import re

# Read the file
with open('game.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the corrupted stamina line
content = re.sub(r'<span class="stat-label">[^<]*Stamina:', '<span class="stat-label"><img src="/assets/battery.png" class="stat-icon" alt="Stamina"> Stamina:', content)

# Replace the corrupted strength line (remove extra character before emoji)
content = re.sub(r'<span class="stat-label">[^💪<]*💪 Strength:', '<span class="stat-label">💪 Strength:', content)

# Write back
with open('game.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed!")
