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
npm @atala/prism-wallet-sdk --save
```

or with yarn

```bash
yarn add @atala/prism-wallet-sdk
```

> **Note for Webpack:**
> 
> The application builds code with wasm files for DIDComm and Anoncreds for both browsers and nodejs. When webpack builds public website the wasm files need to be copied manually into the public folder.




### Running a demo project

To be able to run the demos, we have to build `prism-wallet-sdk`.
From the repository root run:

```bash
npm i
npm run build
```

### For NodeJS

After building `prism-wallet-sdk`, cd into `{path}/demos/node`:

```bash
npm i
node index.js
```

> **Note:**
> 
> The installation in the `{path}/demos/node` directory requires the `build` folder from the wallet-sdk to be available.


### For browser

After building `prism-wallet-sdk`, cd into the demo directory `{path}/demos/browser`

```bash
cd demos/browser
npm i
npm run start
```

### Building from source
This repository contains compiles typescript code and some rust dependencies for DIDComm and AnonCreds, so in order to build the code from source you will need the following:

* Bash
* Have Rust (cargo) and wasm-pack installed.
* Node JS Version (20/LTS Recommended)

Clone the repository
```
git clone git@github.com:input-output-hk/atala-prism-wallet-sdk-ts.git
```

> **Note:**
> 
> This repository uses git submodules but this process is already automated and all the dependencies will be fetched and compiled before building.

```
npm run build
```


### Implementing storage for the SDK
This SDK exposes Pluto, a storage interface that should be implemented by the user, in the most appropriate way for a particular use case.

We don't provide a default implementation out of the box at the moment, but we do provide a couple of demo implementations that can be used to get started with demos and testing. 

Provided demo implementations are intentionally oversimplified and SHOULD NOT be used in production. 

