#!/bin/bash

set -e

# Default values
dry_run=false
release_version=""

# Parse named arguments --version and --dry-run
while [[ $# -gt 0 ]]; do
    case "$1" in
        --version)
            if [ -n "$2" ] && [[ "$2" != "--"* ]]; then
                release_version="$2"
                shift 2
            else
                echo "Error: --version requires a value."
                exit 1
            fi
            ;;
        --dry-run)
            dry_run=true
            shift
            ;;
        *)
            echo "Error: Unknown argument: $1"
            exit 1
            ;;
    esac
done

# Ensure the required --version argument is set
if [ -z "$release_version" ]; then
    echo "Error: Missing required argument --version {version}"
    exit 1
fi

echo "Release version: $release_version"
if $dry_run; then
    echo "Running in dry run mode. No changes will be made."
fi

# Updates the version to the release
npm version "$release_version" --git-tag-version false

# Generates the build 
npm run build

# Gets the published versions in the registry
old_version_list=$(npm view @hyperledger/identus-edge-agent-sdk versions)

# The package @hyperledger/identus-sdk might not exist in the first release
if ! version_list=$(npm view @hyperledger/identus-sdk versions 2>/dev/null); then
  echo "Warning: Package @hyperledger/identus-sdk not found. Proceeding without new version list."
  version_list=""
fi

# Merge both version lists, remove brackets and duplicates
merged_versions=$(echo "$old_version_list $version_list" | tr -d '[],')
unique_versions=$(echo "$merged_versions" | tr ' ' '\n' | sort -u | tr '\n' ' ')

# Checks if it's been already published to npmjs
if [[ ${unique_versions} =~ "'$release_version'" ]]; then
    # The goal of this case is to enable the generation of semantic-release
    # commits despite of the current version is already published.
    # Usually this is due some error during the pipeline execution.
    echo "$release_version is already published. Skipping publication."
else
    if $dry_run; then
        echo "Dry run: Skipping npm publish for the version $release_version."
    else
        npm publish --access public
    fi
fi


# Build docs
npm run docs