# Abdalla Cyber Portfolio — Astro Edition

## Run locally

```bash
npm install
npm run dev
```

## Add a blog post

Duplicate a Markdown file in `src/pages/blog`, rename it, edit the details at the top, and write below the second `---`. The homepage and archive update automatically.

## Edit personal details

Edit `src/pages/index.astro` to replace the email, LinkedIn, GitHub, location, About text, and introduction.

## Change appearance

Edit `src/styles/global.css`. The main colors are variables at the top; red is fixed to `#FF0000`.

## Publish on GitHub Pages

1. Upload all files to the repository root.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`.
5. Check the **Actions** tab.

Do not select “Deploy from a branch”; Astro needs the included GitHub Actions workflow to build the site.
