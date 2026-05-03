import os

footer_path = 'src/components/FooterSection.vue'
with open(footer_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('src="/images/logo.png"', 'src="/logo.png"')
if '.invert-logo' not in content:
    content = content.replace('</style>', '.invert-logo { filter: brightness(0) invert(1); width: 150px; }\n</style>')

with open(footer_path, 'w', encoding='utf-8') as f:
    f.write(content)

poles_dir = 'src/pages/poles'
for file in os.listdir(poles_dir):
    if file.endswith('.vue'):
        path = os.path.join(poles_dir, file)
        with open(path, 'r', encoding='utf-8') as f:
            p_content = f.read()
        
        patch = '\n.internal-badge, .hero-badge { color: #10b981 !important; background: rgba(16, 185, 129, 0.15) !important; border: 1px solid rgba(16, 185, 129, 0.3) !important; }\n'
        
        if '.internal-badge, .hero-badge' not in p_content:
            p_content = p_content.replace('</style>', patch + '</style>')
            with open(path, 'w', encoding='utf-8') as f:
                f.write(p_content)
print('Patched successfully.')
