@echo off
set PATH=C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;%PATH%
cd /d "%~dp0"

echo === Step 1: Login to GitHub (browser will open) ===
gh auth login --hostname github.com --git-protocol https --web
if errorlevel 1 exit /b 1

echo === Step 2: Create repo ag027592.github.io if needed ===
gh repo view ag027592/ag027592.github.io >nul 2>&1
if errorlevel 1 (
  gh repo create ag027592.github.io --public --source=. --remote=origin --description "Personal website of Huang-Cheng Chou"
) else (
  git remote remove origin 2>nul
  git remote add origin https://github.com/ag027592/ag027592.github.io.git
)

echo === Step 3: Push ===
git push -u origin main

echo === Step 4: Enable GitHub Pages ===
gh api -X PUT repos/ag027592/ag027592.github.io/pages -f build_type=legacy -f source[branch]=main -f source[path]=/ 2>nul
echo.
echo Done. Open: https://ag027592.github.io/
pause
