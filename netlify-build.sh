#!/bin/bash
set -e

# Print basic information
echo "=== Starting Simple Build Process ==="
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Set production environment
export NODE_ENV=production

# Clean environment
echo "Cleaning environment..."
rm -rf node_modules package-lock.json

# Install VitePress with compatibility options
echo "Installing VitePress and dependencies..."
NODE_OPTIONS="--preserve-symlinks" npm install --save-dev vitepress@1.6.3 @vue/devtools-api@6.5.1 @vueuse/core@10.7.1 vue@3.4.15 --legacy-peer-deps

# Build the VitePress site
echo "Building VitePress site..."
if NODE_OPTIONS="--preserve-symlinks" npx vitepress build docs --no-git; then
  echo "=== Build Completed Successfully ==="
  echo "Output directory: ./docs/.vitepress/dist/"
else
  echo "=== Build Failed ==="
  exit 1
fi 