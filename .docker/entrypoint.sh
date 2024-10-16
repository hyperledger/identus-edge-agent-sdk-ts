#!/bin/bash
set -e

# Navigate to the application directory
cd /app

# Install NPM dependencies
npm install

# Initialize Git repository if not present
if [ ! -d ".git" ]; then
    git init
fi

# Run the build script
npm run build