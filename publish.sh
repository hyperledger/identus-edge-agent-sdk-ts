#!/bin/bash

set -e

if [ -z "$1" ]; then
    echo "Error: Missing release_version parameter. Please check what happened."
    exit 1
fi

release_version="$1"

# Updates the version to the release
npm version "$release_version" --git-tag-version false

# Generates the build and docs
npm run build
npm run docs

# Gets the published versions in the registry
published_versions=$(echo "$(npm view @atala/prism-wallet-sdk versions)" | tr -d " '")

# Checks if it's been already published to npmjs
if [[ $published_versions == *$release_version* ]]; then
    # The goal of this case is to enable the generation of semantic-release
    # commits despite of the current version is already published.
    # Usually this is due some error during the pipeline execution.
    echo "$release_version is already published. Skipping publication."
else
    npm publish --access public
fi

# Updates the version of e2e tests to the most recent
yarn --cwd integration-tests/e2e-tests add @atala/prism-wallet-sdk@^${release_version}
