#!bin/bash

DIDCommFolder="./externals/didcomm"
AnonCredsFolder="./externals/anoncreds"


if [ ! -d "$DIDCommFolder" ] || [ ! -d "$AnonCredsFolder" ]; then
    # The folder does not exist
    echo "Automatically initializing submodules"
    mkdir -p ./externals
    git submodule update --init --recursive --remote
fi

rm -rf ./generated
mkdir -p ./generated


cd $DIDCommFolder/wasm
wasm-pack build --target=web --out-dir=../../../generated/didcomm-wasm

cd ../../anoncreds
pwd
wasm-pack build --target=web --no-default-features --features=wasm 
rm -rf ../../generated/anoncreds-wasm-browser
mv pkg ../../generated/anoncreds-wasm-browser

wasm-pack build --target=nodejs --no-default-features --features=wasm 
rm -rf ../../generated/anoncreds-wasm-node
mv pkg ../../generated/anoncreds-wasm-node