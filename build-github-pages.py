"""Regenerate the portfolio and export it for main / (root) GitHub Pages."""
from pathlib import Path
import re
import runpy

root = Path(__file__).resolve().parent
runpy.run_path(str(root / 'build-pages.py'), run_name='__main__')
for source in (root / 'dist').rglob('*'):
    if not source.is_file():
        continue
    relative = source.relative_to(root / 'dist')
    target = root / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    if source.suffix == '.html':
        prefix = '../' * (len(relative.parts) - 1) or './'
        html = re.sub(r'\b(href|src)="/(?!/)', lambda m: m.group(1) + '="' + prefix, source.read_text())
        target.write_text(html)
    else:
        target.write_bytes(source.read_bytes())
(root / '.nojekyll').write_text('')
