#!/bin/bash

set -e

if [ -z "$1" ]; then
    echo "Error: Missing release_version parameter. Please check what happened."
    exit 1
fi

release_version="$1"

# Updates the version to the release
npm version "$release_version" --git-tag-version false

# Generates the build 
npm run build

# Gets the published versions in the registry
version_list=$(npm view @hyperledger/identus-edge-agent-sdk versions)
published_versions=${version_list//[\[\]]/}

# Checks if it's been already published to npmjs
if [[ ${published_versions[@]} =~ "'$release_version'" ]]; then
    # The goal of this case is to enable the generation of semantic-release
    # commits despite of the current version is already published.
    # Usually this is due some error during the pipeline execution.
    echo "$release_version is already published. Skipping publication."
else
    npm publish --access public
fi


# Build docs
npm run docs