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
The complete platform is separated in multiple repositories:

* [atala-prism-wallet-sdk-swift](https://github.com/input-output-hk/atala-prism-wallet-sdk-swift) - Repo that implements Atala PRISM for Apple platforms in Swift.
* [atala-prism-wallet-sdk-ts](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts) - Repo that implements Atala PRISM for Browser and NodeJS platforms in TypeScript.
* [atala-prism-building-blocks](https://github.com/input-output-hk/atala-prism-building-blocks) - Repo that contains the platform Building Blocks.

### Modules / APIs

Atala PRISM TypeScript SDK provides the following building blocks:

* **Apollo**: Provides a suite of necessary cryptographic operations.
* **Castor**: Provides a suite of operations to create, manage and resolve decentralized identifiers.
* **Pollux**: Provides a suite of operations for handling verifiable credentials.
* **Mercury**: Provides a suite of operations for handling DIDComm V2 messages.
* **Pluto**: Provides an interface for storage operations in a portable, storage-agnostic manner.
* **PrismAgent**: PrismAgent, a component using all other building blocks, provides a basic edge agent capabilities, including implementation of DIDComm V2 protocols.

## DIDComm Protocol Support

| Protocol | Supported | Notes |
| --- | :--: | -- |
| [Mediator Coordinator](https://didcomm.org/mediator-coordination/2.0/) | :white_check_mark: | -- |
| Connection | :white_check_mark: | Atala PRISM proprietary |
| [DIDComm V2 Issue Credential](https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential) | :white_check_mark: | -- |
| [DIDComm V2 Present Proof](https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md) | :white_check_mark: | -- |

## Getting Started

### Supported platforms

| Platform | Supported | Notes |
| --- | :--: | -- |
| Browser | :white_check_mark: | -- |
| Browser Extension | :white_check_mark: | -- |
| Node.js | :white_check_mark: | -- |
| React Native | :x: | -- |

### Installing
Install the SDK using `npm` or `yarn`:

`npm install @input-output-hk/atala-prism-wallet-sdk`

`yarn add @input-output-hk/atala-prism-wallet-sdk`

### Usage
Once `@input-output-hk/atala-prism-wallet-sdk` is installed as a dependency, 
package could be imported using both ES modules and CommonJS syntax.

`import * as prismSDK from '@input-output-hk/atala-prism-wallet-sdk';`

or

`const prismSDK = require('@input-output-hk/atala-prism-wallet-sdk');`

Then, provided modules could be used to set up an SSI Edge Agent:

```ts
const apollo = new prismSDK.Apollo();
const api = new prismSDK.ApiImpl();
const castor = new prismSDK.Castor(apollo);
const pluto = new prismSDK.Pluto({
    type: "sql",
});
const didcomm = new prismSDK.DIDCommWrapper(apollo, castor, pluto);
const mercury = new prismSDK.Mercury(castor, didcomm, api);
const store = new prismSDK.PublicMediatorStore(pluto);
const handler = new prismSDK.BasicMediatorHandler(mediatorDID, mercury, store);
const manager = new prismSDK.ConnectionsManager(castor, mercury, pluto, handler);

const agent = new prismSDK.Agent(
    apollo,
    castor,
    pluto,
    mercury,
    handler,
    manager,
    seed.seed
  );

await agent.start();
```

