# Euan Garcia — Portfolio

Source and static site backup for Euan Garcia's CG, video editing and social media portfolio.

Includes Overview, My Projects, Client work, and Social Media.

## Preview locally

Run from the repository root:

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000.

## Editing

- `build-pages.py`: page content and HTML generator (Python standard library only).
- `dist/styles.css`: site styling.
- `dist/projects.js`: video highlight controls and CHAOS version selector.
- `dist/`: ready-to-serve website.

After changing page content, run `python build-pages.py`.

Videos are embedded from YouTube, Instagram and TikTok; their media files are not included. Social embed playback depends on the original posts' availability and platform settings.

This repository is a source backup. GitHub Pages is not enabled. The site currently uses root-relative links; a GitHub Pages project-path deployment would require a base-path adjustment.
