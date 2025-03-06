#!/bin/bash

set -e

# Ensure the required {version} argument is set
if [ -z "$1" ]; then
    echo "Error: Missing required argument {version}"
    exit 1
fi

release_version="$1"

# Get the published versions in the registry
old_version_list=$(npm view @hyperledger/identus-edge-agent-sdk versions)

# The package @hyperledger/identus-sdk might not exist in the first release
if ! version_list=$(npm view @hyperledger/identus-sdk versions 2>/dev/null); then
  version_list=""
fi

# Merge both version lists, remove brackets and duplicates
merged_versions=$(echo "$old_version_list $version_list" | tr -d '[],')
unique_versions=$(echo "$merged_versions" | tr ' ' '\n' | sort -u | tr '\n' ' ')

echo "Published versions: ${unique_versions}"

# Check if the version is already published
if [[ ${unique_versions} =~ "'$release_version'" ]]; then
    echo "$release_version is already published."
    exit 1
else
    echo "$release_version is not published yet."
    exit 0
fi
