#!/bin/bash

echo "🚀 Building project..."
yarn build

if [ $? -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
fi

echo "📦 Preparing deployment..."
cd dist

# Initialize git if needed
if [ ! -d ".git" ]; then
  git init
fi

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Set branch to gh-pages
git branch -M gh-pages

# Set remote
git remote add origin https://github.com/DmytroLukianchuk/vitaliy-smyrnov.git 2>/dev/null || git remote set-url origin https://github.com/DmytroLukianchuk/vitaliy-smyrnov.git

echo "📤 Pushing to GitHub Pages..."
git push -f origin gh-pages

if [ $? -eq 0 ]; then
  echo "✅ Successfully deployed to GitHub Pages!"
  echo "🌐 Your site will be available at: https://dmytrolukianchuk.github.io/vitaliy-smyrnov/"
  echo "⏳ It may take a few minutes for changes to appear."
else
  echo "❌ Deployment failed!"
  exit 1
fi

# Go back to project root
cd ..

