# Welcome to Atala PRISM TypeScript SDK

Atala PRISM TypeScript SDK provides a library and documentation for developers to build
TypeScript-based SSI applications with Atala PRISM. It provides a set of
utilities for building SSI Edge Agents speaking DIDComm V2 protocols.

## Basic considerations

### Atala PRISM

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

### SDK Overview

- Apollo: Provides a suite of necessary cryptographic operations.
- Castor: Provides a suite of operations to create, manage and resolve decentralized identifiers.
- Pollux: Provides a suite of operations for handling [verifiable credentials](https://github.com/input-output-hk/atala-prism-docs/blob/main/documentation/docs/concepts/glossary.md#verifiable-credentials).
- Mercury: Provides a suite of operations for handling DIDComm V2 messages.
- Pluto: Provides an interface for storage operations in a portable, storage-agnostic manner.
- PrismAgent: PrismAgent, a component using all other building blocks, provides basic edge agent capabilities, including implementing DIDComm V2 protocols.

### Getting started

This repository includes a browser and a Node.js demo application, and also a step-by-step documented process to run it.

#### Running a demo project

To be able to run the demos, we have to build `prism-wallet-sdk-ts`.

create an .npmrc file with the following contents:

```
@input-output-hk:registry=https://npm.pkg.github.com
```


From the repository root run:


```bash
npm i
npm run build
```

#### For NodeJS

After building `prism-wallet-sdk-ts`, cd into `{path}/prism-wallet-sdk-ts/demos/node`:

```bash
npm i
node index.js
```

:::note
The installation in the `demos/node` directory requires the `build` folder from the wallet-sdk to be available.
:::

#### For browser

After building `prism-wallet-sdk-ts`, cd into the demo directory "demos/browser"

```bash
cd demos/browser
npm i
npm run start
```

#### Implementing storage for the SDK
This SDK exposes Pluto, a storage interface that should be implemented by the user, in the most appropriate way for a particular use case.

We don't provide a default implementation out of the box at the moment, but we do provide a couple of demo implementations that can be used to get started with demos and testing. 

Provided demo implementations are intentionally oversimplified and SHOULD NOT be used in production. 

#### Demo development mode

To run the browser demo app, just run `npm run dev:browser`, and the browser will automatically open and load the demo app.

To run the Node.js demo app, run `npm run dev:node` to build the demo app and then run it with `node build/node-test/index.js`.

2. To see how the step-by-step examples can guide you, refer to each section inside the docs folder: Apollo, Castor, Pollux, Mercury, Pluto, Agent

3. Jump straight into the [SDK-REFERENCE](https://input-output-hk.github.io/atala-prism-wallet-sdk-ts/modules.html)
