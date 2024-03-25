#!/bin/bash

cwd=`pwd`
ExternalsDir="${cwd}/externals"
GeneratedDir="${ExternalsDir}/generated"
AnonCreds=anoncreds
AnonCredsDir="${ExternalsDir}/${AnonCreds}"
DIDComm=didcomm
DIDCommDir="${ExternalsDir}/${DIDComm}"

BOLD='\033[1m'
BLUE='\033[33m'
GREEN='\033[32m'
RED='\033[31m'
END='\033[0m'


didcommNewCommit=$(git submodule | grep $DIDComm | awk '{print $1}')
didcommOldCommit=$(cat "${ExternalsDir}/${DIDComm}.commit" 2>/dev/null)
didcommRequired=$?

anoncredsNewCommit=$(git submodule | grep $AnonCreds | awk '{print $1}')
anoncredsOldCommit=$(cat "${ExternalsDir}/${AnonCreds}.commit" 2>/dev/null)
anoncredsRequired=$?


buildDIDComm() {
  echo "Build DIDComm"

  local GenDIDComm="${GeneratedDir}/${DIDComm}"
  # remove previous generated
  rm -rfv "${GenDIDComm}*"
  # generate new
  cd "${DIDCommDir}/wasm"
  wasm-pack build --target=web --out-dir="${GenDIDComm}-wasm-browser"
  wasm-pack build --target=nodejs --out-dir="${GenDIDComm}-wasm-node"

  #TODO: find better way to approach this
  #This code fails on browser when wasm is first loaded, it can just be ignored
  #The code will fully work
  cd "${GenDIDComm}-wasm-browser"
  sed -i '' "/if (typeof input === 'undefined') {/,/}/d" didcomm_js.js

  cd $ExternalsDir
  git submodule | grep $DIDComm | awk '{print $1}' > "./${DIDComm}.commit"
}

buildAnonCreds() {
  echo "Build AnonCreds"

  GenAnonCreds="${GeneratedDir}/${AnonCreds}"
  rm -rfv "${GenAnonCreds}*"

  cd $AnonCredsDir

  # cant use --out-dir
  wasm-pack build --target=web --no-default-features --features=wasm
  mv pkg "${GenAnonCreds}-wasm-browser"

  wasm-pack build --target=nodejs --no-default-features --features=wasm
  mv pkg "${GenAnonCreds}-wasm-node"
  
  #TODO: find better way to approach this
  #This code fails on browser when wasm is first loaded, it can just be ignored
  #The code will fully work
  cd "${GenAnonCreds}-wasm-browser"
  sed -i '' "/if (typeof input === 'undefined') {/,/}/d" "./${AnonCreds}.js"

  cd $ExternalsDir
  git submodule | grep $AnonCreds | awk '{print $1}' > "./${AnonCreds}.commit"
}

checkDIDComm() {
  # no commit found - update
  # commits mismatch - update
  # submodule folder missing - update
  if [ "$didcommRequired" -eq 1 ] || \
     [ "$didcommOldCommit" != "$didcommNewCommit" ] || \
     [ -z "$(find "$DIDCommDir" -maxdepth 1 -type f)" ]; then
    return 2
  # generated folder missing - build
  elif [ -z "$(find "${GeneratedDir}" -name "${DIDComm}*" -maxdepth 1 -type d 2>/dev/null)" ]; then
    return 1
  else
    return 0
  fi
}

checkAnonCreds() {
    # no commit found - update
  # commits mismatch - update
  # submodule folder missing - update
  if [ "$anoncredsRequired" -eq 1 ] || \
     [ "$anoncredsOldCommit" != "$anoncredsNewCommit" ] || \
     [ -z "$(find "$AnonCredsDir" -maxdepth 1 -type f)" ]; then
    return 2
  # generated folder missing - build
  elif [ -z "$(find "${GeneratedDir}" -name "${AnonCreds}*" -maxdepth 1 -type d 2>/dev/null)" ]; then
    return 1
  else
    return 0
  fi
}

checkSubmodules() {
  echo "Checking submodules"
  git submodule sync
  echo 

  # update latest commit after sync
  didcommNewCommit=$(git submodule | grep $DIDComm | awk '{print $1}')
  anoncredsNewCommit=$(git submodule | grep $AnonCreds | awk '{print $1}')

  checkAnonCreds
  anoncredsResult=$?
  checkDIDComm
  didcommResult=$?
  
  case "$anoncredsResult" in
    "2") echo -e "${BOLD}AnonCreds: ${RED}out of date ${END}" ;;
    "1") echo -e "${BOLD}AnonCreds: ${RED}build files missing${END}" ;;
    "0") echo -e "${BOLD}AnonCreds: ${GREEN}up to date ${END}" ;;
  esac

  case "$didcommResult" in
    "2") echo -e "${BOLD}DIDComm: ${RED}out of date ${END}" ;;
    "1") echo -e "${BOLD}DIDComm: ${RED}build files missing${END}" ;;
    "0") echo -e "${BOLD}DIDComm: ${GREEN}up to date ${END}" ;;
  esac


  echo

  if [ "$anoncredsResult" -eq 2 ] || [ "$didcommResult" -eq 2 ]; then
    echo -e "Update submodules with: ${BLUE}npm run externals:update${END}"
  elif [ "$anoncredsResult" -eq 1 ] || [ "$didcommResult" -eq 1 ]; then
    echo -e "Build submodules with: ${BLUE}npm run externals:build${END}"
  fi
}

# parse args
while [[ "$#" -gt 0 ]]; do
  case $1 in
    -x) execute="$2"; shift ;;
    # -t) target="$2"; shift ;;
    *) echo "Unknown parameter passed: $1"; exit 1 ;;
  esac
  shift
done


if [ "$execute" = "check" ]; then
  checkSubmodules
elif [ "$execute" = "build" ]; then
  echo "Building submodules"
  mkdir -p "$GeneratedDir"
  buildAnonCreds
  buildDIDComm
elif [ "$execute" = "update" ]; then
  echo "Updating submodules"
  mkdir -p "$GeneratedDir"
  git submodule update --init --recursive --remote

  checkAnonCreds
  anoncredsResult=$?
  checkDIDComm
  didcommResult=$?

  if [ "$anoncredsResult" -ne 0 ]; then
    buildAnonCreds
  fi

  if [ "$didcommResult" -ne 0 ]; then
    buildDIDComm
  fi
else
  echo "Usage: $0 [-x execution mode]"
  echo "  -x  [build | check | update]"
  echo "     build - build the current submodules"
  echo "     check - check the status"
  echo "     update - get latest and build the submodules"
  echo
  echo "Example: $0 -x check"
  exit 1
fi
