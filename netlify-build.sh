#!/bin/bash
set -e

# Print basic information
echo "=== Starting Simple Build Process ==="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Temporarily unset NODE_ENV to allow devDependencies installation
echo "Temporarily unsetting NODE_ENV for dependency installation..."
NODE_ENV_BACKUP=$NODE_ENV
unset NODE_ENV

# Clean environment
echo "Cleaning environment..."
rm -rf node_modules package-lock.json

# Install VitePress with compatibility options
echo "Installing VitePress and dependencies..."
npm install --save vitepress@1.6.3 @vue/devtools-api@6.5.1 @vueuse/core@10.7.1 vue@3.4.15 --legacy-peer-deps

# Restore NODE_ENV
echo "Restoring NODE_ENV for build..."
export NODE_ENV=$NODE_ENV_BACKUP

# Build the VitePress site
echo "Building VitePress site..."
if npx vitepress build docs --no-git; then
  echo "=== Build Completed Successfully ==="
  echo "Output directory: ./docs/.vitepress/dist/"
else
  echo "=== Build Failed ==="
  exit 1
fi

# Create .well-known directory in the dist folder
mkdir -p docs/.vitepress/dist/.well-known

# Copy the apple-app-site-association file
cp docs/public/.well-known/apple-app-site-association docs/.vitepress/dist/.well-known/