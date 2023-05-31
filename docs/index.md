# Wallet SDK Typescript

Atala PRISM TypeScript SDK provides a library and documentation for developers to build TypeScript-based [SSI](https://github.com/input-output-hk/atala-prism-docs/blob/main/documentation/docs/concepts/glossary.md#self-sovereign-identity) applications with Atala PRISM. It offers a set of utilities for building SSI Edge Agents speaking [DIDComm](https://github.com/input-output-hk/atala-prism-docs/blob/main/documentation/docs/concepts/glossary.md#didcomm) V2 protocols.

Atala PRISM TypeScript SDK provides the following building blocks:

* Apollo: Provides a suite of necessary cryptographic operations.
* Castor: Provides a suite of operations to create, manage and resolve decentralized identifiers.
* Pollux: Provides a suite of operations for handling [verifiable credentials](https://github.com/input-output-hk/atala-prism-docs/blob/main/documentation/docs/concepts/glossary.md#verifiable-credentials).
* Mercury: Provides a suite of operations for handling DIDComm V2 messages.
* Pluto: Provides an interface for storage operations in a portable, storage-agnostic manner.
* PrismAgent: PrismAgent, a component using all other building blocks, provides basic edge agent capabilities, including implementing DIDComm V2 protocols.
