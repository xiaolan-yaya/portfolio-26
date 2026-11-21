# Yaya's Portfolio

Built with Next.js. Designed in Figma: https://www.figma.com/design/tlwleCLQ0ynI4sECg8kipf

## Run it locally
```bash
npm install
npm run dev      # open http://localhost:3000
```

## Where things live
- `content/projects.ts`: list of case studies (title, summary, tags, cover image)
- `app/page.tsx`: home page
- `app/work/[slug]/page.tsx`: case study template
- `app/about/page.tsx`: about page
- `app/globals.css`: design tokens (colors, fonts, spacing). Match these to Figma
- `public/images/`: put project images here; put your resume at `public/resume.pdf`

## Push to GitHub (first time)
1. Make a new **empty** repo at https://github.com/new named `portfolio` (no README).
2. In Cursor, open this folder and run in the terminal:
```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

## Deploy with Vercel
1. Go to https://vercel.com/new and sign in with GitHub.
2. Import the `portfolio` repo and click Deploy (it detects Next.js on its own).
3. Every `git push` after that redeploys the site automatically.
