#!/bin/bash
FILE="./node_modules/rxdb"
set -e




if [ -z "./node_modules/rxdb/patched/done" ]; then
    echo "preinstall completed"
else 
    npm i rxdb@14.17.1 --ignore-scripts
    npx patch-package
    touch ./node_modules/rxdb/patched/done
fi







