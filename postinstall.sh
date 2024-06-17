#!/bin/bash
FILE="./node_modules/rxdb"
set -e
# Patching RXDB package for 2 main reasons
# 1. Its using crypto-js which is an insecure dependency we don't want to even
# include in our package-locks, its 100% not used as we have created as we have
# created our own package
# 2. The second one is around a replication package that rxdb uses
# firebase which includes a medium severity vuleranility which we also don't
# want to be including in our package locks, despite 100% not being used.
# Workaround: We install 
rm -rf ./package-lock.json
rm -rf ./node_modules/.package-lock.json
npm i --ignore-scripts
