#!/bin/bash
FILE="./node_modules/rxdb"
set -e
if [ -z "./node_modules/rxdb/patched" ]; then
    echo "preinstall completed"
else 
    npm i rxdb@15.24.0 --ignore-scripts
    npx patch-package
    touch ./node_modules/rxdb/patched
fi