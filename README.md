# Identus TypeScript SDK

[![Coverage Status](https://coveralls.io/repos/github/input-output-hk/atala-prism-wallet-sdk-ts/badge.svg?branch=master)](https://coveralls.io/github/input-output-hk/atala-prism-wallet-sdk-ts?branch=master)

---

Identus is a self-sovereign identity (SSI) platform and service suite for
verifiable data and digital identity. Built on Cardano, as a distributed ledger, 
it offers core infrastructure for issuing DIDs (Decentralized identifiers) and 
verifiable credentials, alongside tools and frameworks to help expand your ecosystem.
The complete platform is separated into multiple repositories:

* [Cloud Agent](https://github.com/hyperledger/identus-cloud-agent) - Repo that contains the Cloud Agent that provides self-sovereign identity services to build products and solutions.
* [Mediator](https://github.com/input-output-hk/atala-prism-mediator) - Repo for the DIDComm V2 Mediator.
* [Edge Agent SDK TS](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts) - Repo for the Typescript version of the SDK.
* [Edge Agent SDK Swift](https://github.com/input-output-hk/atala-prism-wallet-sdk-swift) - Repo for the Swift version of the SDK.
* [Edge Agent SDK KMP](https://github.com/input-output-hk/atala-prism-wallet-sdk-kmm) - Repo for the Kotlin Multi-Platform version of the SDK.
* 
## SDK Overview

- Apollo: Provides a suite of necessary cryptographic operations.
- Castor: Provides a suite of operations to create, manage and resolve decentralized identifiers.
- Pollux: Provides a suite of operations for handling [verifiable credentials](https://github.com/input-output-hk/atala-prism-docs/blob/master/documentation/docs/concepts/glossary.md#verifiable-credentials).
- Mercury: Provides a suite of operations for handling DIDComm V2 messages.
- Pluto: Provides an interface for storage operations in a portable, storage-agnostic manner.
- Agent: A component using all other building blocks, provides basic edge agent capabilities, including implementing DIDComm V2 protocols.

## Getting started

This repository includes a browser and a Node.js demo application, and also a step-by-step documented process on [how to run it](#running-a-demo-project).

### Use in your project
You can install and use this library in browsers and nodejs.

```bash
npm i @atala/prism-wallet-sdk --save
```

or with yarn

```bash
yarn add @atala/prism-wallet-sdk
```

### Running a demo project

#### Building from source
This repository contains compiles typescript code and some rust dependencies for DIDComm and AnonCreds, so in order to build the code from source you will need the following:

* Bash
* Have Rust ([cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)) and [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) installed.
* Node JS Version (20/LTS Recommended)

Clone the repository
```
git clone git@github.com:input-output-hk/atala-prism-wallet-sdk-ts.git --recruse-submodules
```

To be able to run the demos, we have to build `prism-wallet-sdk`.
From the repository root run:

```bash
npm i
npm run build
```

### Running the sample applications
We have enabled sample implementations for browsers (React or Next.js) and Node.js.
To run each demo, ensure the whole SDK builds from the source, then cd into the demo.

Nodejs CommonJS
```bash
cd demos/node-cjs
npm i
npm run start
```

Nodejs Module
```bash
cd demos/node-esm
npm i
npm run start
```

Browser NextJS
```bash
cd demos/next
npm i
npm run build # becuase Error: ENOENT: no such file or directory, open '/.../atala-prism-wallet-sdk-ts/demos/next/.next/BUILD_ID']
npm run start
```

### Implementing storage for the SDK
This SDK exposes Pluto, which manages data schemas, migrations for you, but requires a Pluto.Store which needs to be implemented by the user, as this is particular to your use case.

Provided demo implementations are intentionally oversimplified and **should not** be used in production.

Example community implementations:
- [atala-community-projects/pluto-encrypted](https://github.com/atala-community-projects/pluto-encrypted): InMemory, IndexDB, LevelDB, as well as a test-suite to help you build your own.


