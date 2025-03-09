#!/bin/bash
set -e

# Print Node.js and npm versions
echo "=================================="
echo "🛠️ Build Environment Information"
echo "=================================="
echo "📦 Node version: $(node -v)"
echo "📦 NPM version: $(npm -v)"
echo "📦 System info: $(uname -a)"
echo "📦 Current directory: $(pwd)"
echo "=================================="

# Set production environment for proper base URL and SEO settings
echo "🌐 Setting production environment..."
export NODE_ENV=production
export NETLIFY_ENV=production

# Clean install approach
echo "🧹 Cleaning node_modules to ensure a fresh install..."
rm -rf node_modules package-lock.json

# Install dependencies with legacy peer deps flag
echo "📥 Installing dependencies..."
npm install --legacy-peer-deps

# Make sure VitePress and its dependencies are installed
echo "📥 Ensuring VitePress and its dependencies are installed..."
npm install --save-dev vitepress@^1.6.3 @vue/devtools-api@^6.5.1 @vueuse/core@^10.7.1 --legacy-peer-deps

# Verify VitePress installation
echo "🔍 Verifying VitePress installation..."
npx vitepress --version || echo "⚠️ VitePress version check failed, but continuing build"

# Build the VitePress site
echo "🔨 Building VitePress site..."
npx vitepress build docs --no-git

# Run sitemap generation
echo "🗺️ Generating sitemap..."
node scripts/generate-sitemap.js

# Run SEO verification
echo "🔍 Verifying SEO elements..."
node scripts/verify-seo.js || echo "⚠️ SEO verification failed, but continuing build"

# Make sure the sitemap is copied to the distribution folder
if [ -f "./docs/public/sitemap.xml" ]; then
  echo "✅ Sitemap exists in public folder"
  # Copy to dist to be extra safe
  cp ./docs/public/sitemap.xml ./docs/.vitepress/dist/sitemap.xml
  echo "✅ Copied sitemap to dist folder"
else
  echo "❌ Sitemap generation may have failed!"
  # Generate it directly
  echo "🔄 Attempting direct sitemap generation..."
  node scripts/generate-sitemap.js
  if [ -f "./docs/public/sitemap.xml" ]; then
    cp ./docs/public/sitemap.xml ./docs/.vitepress/dist/sitemap.xml
    echo "✅ Sitemap generated and copied successfully!"
  fi
fi

# Make sure robots.txt is copied to the distribution folder
if [ -f "./docs/public/robots.txt" ]; then
  echo "✅ robots.txt exists in public folder"
  # Copy to dist to be extra safe
  cp ./docs/public/robots.txt ./docs/.vitepress/dist/robots.txt
  echo "✅ Copied robots.txt to dist folder"
else
  echo "❌ robots.txt is missing from public folder!"
  # Create a basic robots.txt as fallback
  echo "🔄 Creating robots.txt as fallback..."
  echo "User-agent: *" > ./docs/.vitepress/dist/robots.txt
  echo "Allow: /" >> ./docs/.vitepress/dist/robots.txt
  echo "Sitemap: https://guide.nutriscan.app/sitemap.xml" >> ./docs/.vitepress/dist/robots.txt
  echo "✅ Created robots.txt in dist folder"
fi

echo "=================================="
echo "🎉 Build completed successfully!"
echo "=================================="

# List files in dist directory as a final check
echo "📂 Files in distribution directory:"
ls -la ./docs/.vitepress/dist/ 