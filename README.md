# Identus TypeScript SDK

[![Coverage Status](https://coveralls.io/repos/github/hyperledger/identus-edge-agent-sdk-ts/badge.svg?branch=master)](https://coveralls.io/github/hyperledger/identus-edge-agent-sdk-ts?branch=master)

---

Identus is a self-sovereign identity (SSI) platform and service suite for
verifiable data and digital identity. Built on Cardano, as a distributed ledger, 
it offers core infrastructure for issuing DIDs (Decentralized identifiers) and 
verifiable credentials, alongside tools and frameworks to help expand your ecosystem.
The complete platform is separated into multiple repositories:
* [Cloud Agent](https://github.com/hyperledger/identus-cloud-agent) - Repo that contains the Cloud Agent that provides self-sovereign identity services to build products and solutions.
* [Mediator](https://github.com/input-output-hk/identus-prism-mediator) - Repo for the DIDComm V2 Mediator.
* [Edge Agent SDK TS](https://github.com/hyperledger/identus-edge-agent-sdk-ts) - Repo for the Typescript version of the SDK.

We also have edge agents for other platforms:
* [Edge Agent SDK Swift](https://github.com/hyperledger/identus-edge-agent-sdk-swift) - Repo for the Swift version of the SDK.
* [Edge Agent SDK KMP](https://github.com/hyperledger/identus-edge-agent-sdk-kmm) - Repo for the Kotlin Multi-Platform version of the SDK.

## SDK Overview

- Apollo: Provides a suite of necessary cryptographic operations.
- Castor: Provides a suite of operations to create, manage and resolve decentralized identifiers.
- Pollux: Provides a suite of operations for handling [verifiable credentials](https://github.com/hyperledger/identus-docs/blob/master/documentation/docs/concepts/glossary.md#verifiable-credentials).
- Mercury: Provides a suite of operations for handling DIDComm V2 messages.
- Pluto: Provides an interface for storage operations in a portable, storage-agnostic manner.
- Agent: A component using all other building blocks, provides basic edge agent capabilities, including implementing DIDComm V2 protocols.

## Getting started

This repository includes a browser and a Node.js demo application, and also a step-by-step documented process on [how to run it](#running-a-demo-project).

### Use in your project
You can install and use this library in browsers and nodejs.

```bash
npm i @hyperledger/identus-edge-agent-sdk --save
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
git clone git@github.com:hyperledger/identus-edge-agent-sdk-ts.git --recruse-submodules
```

To be able to run the demos, we have to build `identus-edge-agent-sdk-ts`.
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
npm run build # becuase Error: ENOENT: no such file or directory, open '/.../identus-edge-agent-sdk-ts/demos/next/.next/BUILD_ID']
npm run start
```

### Implementing storage for the SDK
This SDK exposes Pluto, a storage interface that should be implemented by the user, in the most appropriate way for a particular use case.

We don't provide a default implementation out of the box at the moment, but we do provide a couple of demo implementations that can be used to get started with demos and testing. 

Provided demo implementations are intentionally oversimplified and **should not** be used in production. 

