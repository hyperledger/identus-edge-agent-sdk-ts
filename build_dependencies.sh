#!bin/bash

DIDCommFolder="./externals/didcomm"
AnonCredsFolder="./externals/anoncreds"


if [ ! -d "$DIDCommFolder" ] || [ ! -d "$AnonCredsFolder" ]; then
    # The folder does not exist
    echo "Automatically initializing submodules"
    mkdir -p ./externals
    git submodule update --init --recursive --remote
fi

mkdir -p ./generated


cd $DIDCommFolder/wasm
wasm-pack build --target=web --out-dir=../../../generated/didcomm-wasm

cd ../../anoncreds
pwd
wasm-pack build --no-default-features --features=wasm 
rm -rf ../../generated/anoncreds-wasm
mv pkg ../../generated/anoncreds-wasm