# Wallet SDK Typescript

Atala PRISM TypeScript SDK provides a library and documentation for developers to build TypeScript-based SSI applications with Atala PRISM. It provides a set of utilities for building SSI Edge Agents speaking DIDComm V2 protocols.

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
