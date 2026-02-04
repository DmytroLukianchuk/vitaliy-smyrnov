#!/bin/bash

echo "🚀 Building project for root domain..."
yarn build

if [ $? -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
fi

echo "📦 Preparing deployment to root domain..."
cd dist

# Initialize git if needed
if [ ! -d ".git" ]; then
  git init
fi

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Set branch to main (required for root domain GitHub Pages)
git branch -M main

# Set remote to root domain repository
git remote add origin https://github.com/DmytroLukianchuk/DmytroLukianchuk.github.io.git 2>/dev/null || git remote set-url origin https://github.com/DmytroLukianchuk/DmytroLukianchuk.github.io.git

echo "📤 Force pushing to GitHub Pages (root domain)..."
echo "⚠️  This will replace all existing content in the repository."

# Force push to replace existing content
git push -f origin main

if [ $? -eq 0 ]; then
  echo "✅ Successfully deployed to GitHub Pages!"
  echo "🌐 Your site will be available at: https://dmytrolukianchuk.github.io/"
  echo "⏳ It may take a few minutes for changes to appear."
else
  echo "❌ Deployment failed!"
  exit 1
fi

# Go back to project root
cd ..


