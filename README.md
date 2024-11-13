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
* [Edge Agent SDK KMP](https://github.com/hyperledger/identus-edge-agent-sdk-kmp) - Repo for the Kotlin Multi-Platform version of the SDK.

## SDK Overview

- Apollo: Provides a suite of necessary cryptographic operations.
- Castor: Provides a suite of operations to create, manage and resolve decentralized identifiers.
- Pollux: Provides a suite of operations for handling [verifiable credentials](https://github.com/hyperledger/identus-docs/blob/master/documentation/docs/concepts/glossary.md#verifiable-credentials).
- Mercury: Provides a suite of operations for handling DIDComm V2 messages.
- Pluto: Provides an interface for storage operations in a portable, storage-agnostic manner.
- Agent: A component using all other building blocks, provides basic edge agent capabilities, including implementing DIDComm V2 protocols.

## Getting started
We highly recommend you check out the [docs](https://hyperledger.github.io/identus-docs/docs/getting-started) :world_map:

### Install

```bash
npm i @hyperledger/identus-edge-agent-sdk
```

or
```bash
yarn add @hyperledger/identus-edge-agent-sdk
```

### Demo application
This repository also includes a browser and a Node.js demo application

#### Build demo dependencies
The demos assume building this repo from source, so you will need the following:
* Bash
* Rust ([cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)) and [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) installed.
* Node JS Version (20/LTS Recommended)

Clone and build:
```bash
git clone git@github.com:hyperledger/identus-edge-agent-sdk-ts.git --recurse-submodules
cd identus-edge-agent-sdk-ts
npm i
npm run build
```

If you have any issues while building you can try building from docker (this runs exaclty the same build):
```bash
docker build -t atalaprismwalletsdkts:latest "." 
docker run  -v $(pwd)/build:/app/build atalaprismwalletsdkts:latest
```

#### Run the demos
Once you have [built the demo dependencies](#build-demo-dependencies), you can try out each of the demos:

Browser React / NextJS
```bash
cd demos/next
npm i
npm run dev
```

### Implementing storage for the SDK
Pluto, the SDK storage layer, is not a complete solution and requires some work. To make this as simple as possible there are multiple options of different complexity provided. These options are discussed in more detail in the Pluto module.
[Read more here.](./src/pluto/README.md)

> [!WARNING]  
> Provided demo implementations are intentionally oversimplified and **should not** be used in production.


#### Example community implementations:
- [atala-community-projects/pluto-encrypted](https://github.com/atala-community-projects/pluto-encrypted): InMemory, IndexDB, LevelDB, as well as a test-suite to help you build your own.


