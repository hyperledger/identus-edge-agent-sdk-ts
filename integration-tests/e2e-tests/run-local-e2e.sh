#!/usr/bin/env bash

set -e

cd "$(dirname "${BASH_SOURCE[0]}")" || exit 1
E2E_FOLDER=$(pwd)

cd "$E2E_FOLDER/../.."

# build
npm install
npm run build
npm pack

PACKAGE_NAME=$(find . -maxdepth 1 -name input-output* | tr -d '\n')
echo "Generated package: $PACKAGE_NAME"

# e2e
cd "$E2E_FOLDER"

yarn
yarn add "../../$PACKAGE_NAME"
yarn test:sdk

# remove changes
git checkout package.json
git checkout yarn.lock
rm "../../$PACKAGE_NAME"
