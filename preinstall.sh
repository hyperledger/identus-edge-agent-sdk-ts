#!/bin/bash
FILE="$PWD/node_modules/rxdb"
echo "running preinstall in $PWD"
set -e
if [ -z "$PWD/node_modules/rxdb/patched" ]; then
    echo "preinstall completed"
else 
    npm i rxdb@14.17.1 --ignore-scripts
    npx patch-package
    touch $PWD/node_modules/rxdb/patched/done
fi