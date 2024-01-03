module.exports = {
    "$schema": "https://typedoc.org/schema.json",
    "entryPoints": [
        "./src/index.ts"
    ],
    "out": "./docs/sdk",
    "tsconfig": "./tsconfig.json",
    "name": "@input-output-hk/atala-prism-wallet-sdk",
    "useTsLinkResolution": true,
    "hideGenerator": true,
    "entryPointStrategy": "resolve",
    "excludePrivate": false,
    "excludeReferences": false,
    "excludeProtected": false,
    "excludeInternal": false,
    "excludeNotDocumented": false,
    "theme": "default",
    "plugin": [
        "typedoc-plugin-rename-defaults",
        "typedoc-plugin-external-module-map",
        "typedoc-plugin-markdown"
    ]
}