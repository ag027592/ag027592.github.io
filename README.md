# Huang-Cheng Chou — Personal Website

Source for [huangchengchou.com](https://huangchengchou.com), a static site with no build step or dependencies.

Covers research themes, selected publications, experience, and awards for speech emotion recognition, speech LLMs, and subjective evaluation work at USC SAIL.

## Local preview

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8080
```

Then visit http://localhost:8080

## Files

| File | Role |
|------|------|
| `index.html` | Page structure and copy |
| `styles.css` | Layout and visual system |
| `main.js` | Waveform hero animation and scroll reveals |
| `assets/Huang-Cheng_Chou_CV.pdf` | CV download, update when the resume changes |
| `CNAME` | Custom domain mapping for GitHub Pages |

## Deployment

Published by GitHub Pages from the `main` branch at the repository root. Because the repository is named `ag027592.github.io`, it serves as the user site; the `CNAME` file maps it to the custom domain.
