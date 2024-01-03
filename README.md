# Atala PRISM TypeScript SDK

Atala PRISM is a self-sovereign identity (SSI) platform and service suite for
verifiable data and digital identity. Built on Cardano, it offers core
infrastructure for issuing DIDs (Decentralized identifiers) and verifiable
credentials, alongside tools and frameworks to help expand your ecosystem.
The complete platform is separated into multiple repositories:

- [atala-prism-wallet-sdk-swift](https://github.com/input-output-hk/atala-prism-wallet-sdk-swift) - Repo that implements Atala PRISM for Apple platforms in Swift.
- [atala-prism-wallet-sdk-kmm](https://github.com/input-output-hk/atala-prism-wallet-sdk-kmm) - Repo that implements Atala PRISM for Apple platforms in KMM, JVM.
- [atala-prism-wallet-sdk-ts](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts) - Repo that implements Atala PRISM for Browser and NodeJS platforms in TypeScript.
- [atala-prism-building-blocks](https://github.com/hyperledger-labs/open-enterprise-agent) - Repo that contains the servers Building Blocks.
- [atala-prism-mediator](https://github.com/input-output-hk/atala-prism-mediator) - Repo for DIDComm V2 Mediator

## SDK Overview

- Apollo: Provides a suite of necessary cryptographic operations.
- Castor: Provides a suite of operations to create, manage and resolve decentralized identifiers.
- Pollux: Provides a suite of operations for handling [verifiable credentials](https://github.com/input-output-hk/atala-prism-docs/blob/main/documentation/docs/concepts/glossary.md#verifiable-credentials).
- Mercury: Provides a suite of operations for handling DIDComm V2 messages.
- Pluto: Provides an interface for storage operations in a portable, storage-agnostic manner.
- PrismAgent: PrismAgent, a component using all other building blocks, provides basic edge agent capabilities, including implementing DIDComm V2 protocols.

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
* Have Rust (cargo) and wasm-pack installed.
* Node JS Version (20/LTS Recommended)

Clone the repository
```
git clone git@github.com:input-output-hk/atala-prism-wallet-sdk-ts.git
```

To be able to run the demos, we have to build `prism-wallet-sdk`.
From the repository root run:

```bash
npm i
npm run build
```

### Running the sample applications
We have enabled sample implementations for browser (react or nextjs) and nodejs.
In order to run each demo, make sure the whole SDK is built from source, then cd into the demo.

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

Browser React
```bash
cd demos/browser
npm i
npm run start
```

Browser NextJS
```bash
cd demos/next
npm i
npm run start
```

### Implementing storage for the SDK
This SDK exposes Pluto, a storage interface that should be implemented by the user, in the most appropriate way for a particular use case.

We don't provide a default implementation out of the box at the moment, but we do provide a couple of demo implementations that can be used to get started with demos and testing. 

Provided demo implementations are intentionally oversimplified and SHOULD NOT be used in production. 

