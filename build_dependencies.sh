#!bin/bash
ExternalsFolder="./externals"
DIDCommFolder="./externals/didcomm"
AnonCredsFolder="./externals/anoncreds"
GeneratedFolder="./generated"
buildDIDComm() {
    cd $DIDCommFolder/wasm
    wasm-pack build --target=web --out-dir=../../../generated/didcomm-wasm-browser
    wasm-pack build --target=nodejs --out-dir=../../../generated/didcomm-wasm-node
    cd ../../../
    rm ./didcomm.commit
    git submodule | grep didcomm | awk '{print $1}' >> ./didcomm.commit
}

buildAnoncreds() {
    cd $AnonCredsFolder
    wasm-pack build --target=web --no-default-features --features=wasm 
    rm -rf ../../generated/anoncreds-wasm-browser
    mv pkg ../../generated/anoncreds-wasm-browser
    wasm-pack build --target=nodejs --no-default-features --features=wasm 
    rm -rf ../../generated/anoncreds-wasm-node
    mv pkg ../../generated/anoncreds-wasm-node
    cd ../../
    rm ./anoncreds.commit
    git submodule | grep anoncreds | awk '{print $1}' >> ./anoncreds.commit
}

if [ -z "$(find "$DIDCommFolder" -maxdepth 1 -type f)" ] || [ -z "$(find "$AnonCredsFolder" -maxdepth 1 -type f)" ]; then
    # The folder does not exist
    echo "Automatically initializing submodules"
    mkdir -p ./externals
    git submodule update --init --recursive --remote

fi

if [ ! -d "$GeneratedFolder" ]; then
    rm -rf ./generated
    mkdir -p ./generated
    echo "Storing submodule reference"

    buildDIDComm
    buildAnoncreds
fi


didcommOldCommit=$(cat didcomm.commit)
didcommNewCommit=$(git submodule | grep didcomm | awk '{print $1}')

if [ "$didcommOldCommit" != "$didcommNewCommit" ]; then
    buildDIDComm
else
    echo "DIDComm ($didcommNewCommit) is last version."
fi

anoncredsOldCommit=$(cat anoncreds.commit)
anoncredsNewCommit=$(git submodule | grep anoncreds | awk '{print $1}')
if [ "$anoncredsOldCommit" != "$anoncredsNewCommit" ]; then
    buildAnoncreds
else
    echo "Anoncreds ($anoncredsNewCommit) is last version."
fi