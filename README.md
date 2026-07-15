# Huang-Cheng Chou — Personal Website

Static personal site prepared for **GitHub Pages** (also works with any static host).

Content adapted from the previous Wix site:
https://hcchou.wixsite.com/huangchengchou

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python -m http.server 8080
```

Then visit http://localhost:8080

## Deploy to GitHub Pages (recommended)

Create a user site so the URL becomes `https://ag027592.github.io/`

1. On GitHub, create a **new public repository** named exactly:
   `ag027592.github.io`
2. Push this folder’s contents to the `main` branch:

```bash
cd Personal_Website
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/ag027592/ag027592.github.io.git
git push -u origin main
```

3. GitHub → **Settings → Pages → Source**: Deploy from branch `main` / root (`/`)
4. Wait 1–2 minutes; open https://ag027592.github.io/

## Files

| File | Role |
|------|------|
| `index.html` | Page structure & copy |
| `styles.css` | Layout & visual system |
| `main.js` | Waveform hero animation + scroll reveals |
| `assets/Huang-Cheng_Chou_CV.pdf` | CV download (update when resume changes) |

## After deploy

- Update your [GitHub profile](https://github.com/ag027592) bio/location to USC SAIL & link this site.
- Pin EMO-SUPERB / research repos instead of old course forks.
- Point the Wix site (or LinkedIn / Scholar) to the new URL.
