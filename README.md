# Euan Garcia — Portfolio

CG, video editing and social media portfolio, including Overview, My Projects, Client work and Social Media.

Website: https://reuang.github.io/Website-Portfolio/

** *DISCLAIMER* This website was made with AI specifically ChatGPT. That being said I do not endorse the use of AI as a way of replacing real humans and their creativity this was mainly to get over my inability to create a website portfolio since tools like Wix and Squarespace lock their services behind a paywall and make it excruciatingly difficult to use. On a lighter note the content inside said website is NOT AI GENERATED, all the work published was projects made by me or worked on with clients I am still in the process of making this website so expect some bugs and a lot of slop code put together, but I will do my best to try and clean it up and make it work not only with a visual experience but on the back-end too! **

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
