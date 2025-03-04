# Identus TypeScript SDK

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/hyperledger/identus@latest/resources/images/hyperledger-identus.svg" />
</p>

[![Coverage Status](https://coveralls.io/repos/github/hyperledger/identus-edge-agent-sdk-ts/badge.svg?branch=master)](https://coveralls.io/github/hyperledger/identus-edge-agent-sdk-ts?branch=master)

---

Identus is a self-sovereign identity (SSI) platform and service suite for
verifiable data and digital identity. Built on Cardano, as a distributed ledger, 
it offers core infrastructure for issuing DIDs (Decentralized identifiers) and 
verifiable credentials, alongside tools and frameworks to help expand your ecosystem.
The complete platform is separated into multiple repositories:
* [Cloud Agent](https://github.com/hyperledger-identus/cloud-agent) - Repo that contains the Cloud Agent that provides self-sovereign identity services to build products and solutions.
* [Mediator](https://github.com/hyperledger-identus/mediator) - Repo for the DIDComm V2 Mediator.
* [SDK TS](https://github.com/hyperledger-identus/sdk-ts) - Repo for the Typescript SDK.

We also have SDKs for other platforms:
* [SDK Swift](https://github.com/hyperledger-identus/sdk-swift) - Repo for the Swift SDK.
* [SDK KMP](https://github.com/hyperledger-identus/sdk-kmp) - Repo for the Kotlin Multi-Platform SDK.

## SDK Overview

- Apollo: Provides a suite of necessary cryptographic operations.
- Castor: Provides a suite of operations to create, manage and resolve decentralized identifiers.
- Mercury: Provides a suite of operations for handling DIDComm V2 messages.
- Pluto: Provides an interface for storage operations in a portable, storage-agnostic manner.
- Agent: A component using all other building blocks, provides basic edge agent capabilities, including implementing DIDComm V2 protocols.

## Getting started
We highly recommend you check out the [docs](https://hyperledger-identus.github.io/docs/home/) :world_map:

### Install

**NOTE**: The package was renamed from `@hyperledger/identus-edge-agent-sdk` to `@hyperledger/identus-sdk`. Modify the scripts if you ready to use the new package accordingly.

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
git clone git@github.com:hyperledger-identus/sdk-ts.git --recurse-submodules
cd sdk-ts
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
