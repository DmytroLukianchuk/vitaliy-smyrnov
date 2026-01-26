# GitHub Pages Deployment Guide

## Option 1: Deploy to Project Repository (Current Setup)
Your site will be available at: `https://dmytrolukianchuk.github.io/vitaliy-smyrnov/`

### Step-by-Step:

1. **Build the project:**
   ```bash
   yarn build
   ```
   This creates a `dist/` folder with all static files.

2. **Navigate to the dist folder:**
   ```bash
   cd dist
   ```

3. **Initialize git (if not already):**
   ```bash
   git init
   ```

4. **Add all files:**
   ```bash
   git add .
   ```

5. **Commit:**
   ```bash
   git commit -m "Deploy to GitHub Pages"
   ```

6. **Add the gh-pages branch:**
   ```bash
   git branch -M gh-pages
   ```

7. **Add remote (if not already):**
   ```bash
   git remote add origin https://github.com/DmytroLukianchuk/vitaliy-smyrnov.git
   ```
   (Or use `git remote set-url origin` if remote already exists)

8. **Push to gh-pages branch:**
   ```bash
   git push -f origin gh-pages
   ```

9. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/DmytroLukianchuk/vitaliy-smyrnov
   - Click **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Branch: `gh-pages` / `/ (root)`
   - Click **Save**

10. **Wait a few minutes** for GitHub to deploy your site.

---

## Option 2: Deploy to Root Domain (DmytroLukianchuk.github.io)
If you want the site at `https://dmytrolukianchuk.github.io/` (root domain):

### First, update vite.config.js:
Change the base path from `/vitaliy-smyrnov/` to `/`:
```javascript
base: command === "build" ? "/" : "/",
```

Then follow the same steps above, but push to a repository named `DmytroLukianchuk.github.io` instead.

---

## Automated Deployment Script

You can create a script to automate this process. Create a file called `deploy.sh`:

```bash
#!/bin/bash

# Build the project
yarn build

# Navigate to dist folder
cd dist

# Initialize git if needed
if [ ! -d ".git" ]; then
  git init
fi

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch
git branch -M gh-pages
git remote add origin https://github.com/DmytroLukianchuk/vitaliy-smyrnov.git 2>/dev/null || git remote set-url origin https://github.com/DmytroLukianchuk/vitaliy-smyrnov.git
git push -f origin gh-pages

# Go back to project root
cd ..
```

Make it executable:
```bash
chmod +x deploy.sh
```

Then run:
```bash
./deploy.sh
```

---

## Quick Commands (One-liner)

If you're already set up, you can use this one-liner:

```bash
yarn build && cd dist && git init && git add . && git commit -m "Deploy" && git branch -M gh-pages && git remote add origin https://github.com/DmytroLukianchuk/vitaliy-smyrnov.git 2>/dev/null || git remote set-url origin https://github.com/DmytroLukianchuk/vitaliy-smyrnov.git && git push -f origin gh-pages && cd ..
```

---

## Troubleshooting

- **404 errors**: Make sure the base path in `vite.config.js` matches your repository structure
- **Assets not loading**: Check that all paths in `dist/index.html` are correct
- **Changes not showing**: GitHub Pages can take 1-5 minutes to update. Clear your browser cache.
- **Branch not found**: Make sure you've enabled GitHub Pages in repository Settings → Pages

---

## Notes

- The `dist/` folder contains only static files - no source code
- GitHub Pages serves from the `gh-pages` branch
- You can also use GitHub Actions for automatic deployment on every push (more advanced)

