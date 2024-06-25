#!/bin/bash
FILE="$PWD/node_modules/rxdb"
echo "running postinstall in $PWD"
set -e
rm -rf $PWD/package-lock.json
rm -rf $PWD/node_modules/.package-lock.json
npm i --ignore-scripts