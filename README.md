# Palak Choudhary — Portfolio

Personal portfolio website for **Palak Choudhary**, a Full Stack MERN Developer.
Built with **React 18 + Vite**.

## Getting started

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server → http://localhost:5173
```

Other commands:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
index.html            # Vite entry (loads fonts + mounts React)
src/
  main.jsx            # React entry point
  App.jsx             # page composition
  index.css           # design tokens (light/dark) + all styles
  data.js             # all content — edit this to update the site
  hooks.js            # useReveal, useTypewriter, useTheme, usePrefersDark
  components/         # Nav, Hero, About, Skills, Experience, Projects, Education, Contact, Icons
```

## Customizing

- **Content** (name, roles, experience, projects, links): edit `src/data.js`.
- **Colors / theme**: edit the CSS variables at the top of `src/index.css`.
- Update the placeholder `github` and `linkedin` URLs in `src/data.js` before deploying.

## Deploy

Static output — deploy the `dist/` folder (or connect the repo) to **Vercel**, **Netlify**, or **GitHub Pages**. On Vercel/Netlify, the build command is `npm run build` and the output directory is `dist`.
