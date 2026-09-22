# Euan Garcia — Portfolio

CG, video editing and social media portfolio, including Overview, My Projects, Client work and Social Media.

Website: https://reuang.github.io/Website-Portfolio/

## GitHub Pages

The site is published from **main / (root)**. The root `index.html`, page folders, `styles.css` and `projects.js` are generated publishing files. `.nojekyll` serves them as plain static files.

## Editing and publishing

- `build-pages.py`: page content and HTML generator.
- `dist/styles.css`: source styling.
- `dist/projects.js`: source video highlight controls and CHAOS version selector.
- `build-github-pages.py`: regenerates all pages and exports relative links for GitHub Pages.

After editing, run:

```sh
python build-github-pages.py
```

Commit the source and regenerated files to `main`; GitHub Pages deploys the update.

## Preview locally

```sh
python -m http.server 8000
```

Open http://localhost:8000. Links also work when hosted beneath `/Website-Portfolio/`.

The `dist/` folder retains the version for root-domain hosting. Videos remain embedded from YouTube, Instagram and TikTok; original media files are not included. Playback depends on the posts' availability and platform settings.
