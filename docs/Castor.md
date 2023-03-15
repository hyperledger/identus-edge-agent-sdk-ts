# Castor

Castor module provides a suite of primitives for working with Decentralized 
Identifiers (DIDs). It allows developers to create and manage DIDs, manage their 
associated keys and service endpoints, and resolve DIDs to retrieve corresponding 
DID Documents.

Castor currently supports creation and resolution of `prism` and `peer` DID methods.

> NOTE: Castor depends on Apollo module for cryptographic operations.

## Castor setup

Assuming the Wallet SDK has been installed as a dependency, here's an example of
how to import and init Castor module:

```ts
import { Apollo, Castor, Domain } from '@input-output-hk/atala-prism-wallet-sdk';

const apollo = new Apollo();
const castor = new Castor(apollo);

// use castor...
```

`Domain` contains a domain-specific types and models used by Apollo and other 
modules in the SDK.

## API Overview
Here's a brief explanation of the most important primitives:

- `parseDID`: This function takes a string representation of a DID and returns 
an instance of `Domain.DID`. It may throw an error if the string is not a valid
DID.

```ts
const parsedPrismDid = castor.parseDID(
    "did:prism:b6c0c33d701ac1b9a262a14454d1bbde3d127d697a76950963c5fd930605:Cj8KPRI7CgdtYXN0ZXIwEAFKLgoJc2VmsxEiECSTjyV7sUfCr_ArpN9rvCwR9fRMAhcsr_S7ZRiJk4p5k"
);
const parsedPeerDid = castor.parseDID(
    "did:peer:2.Ez6LSjynBE8VfdyACrRPqX76s9mHKs2jYH9Z5KyXYjhFUZyEk.Vz6Mkm7jkKvcwBgDHP528ARtTYmBrqWmERFURP6p3casdekV2.SW10"
);
```

- `createPrismDID`: This function creates new `prism` DID, using a given master 
public key and a list of services. It may throw an error if the master public 
key or services are invalid.

```ts
const exampleServiceEndpoint = new Domain.Service("didcomm", ["DIDCommMessaging"], {
    uri: "https://example.com/endpoint",
    accept: ["didcomm/v2"],
    routingKeys: ["did:example:somemediator#somekey"],
});
```

```ts
const prismDid = await castor.createPrismDID(
    keyPairFromCurveSecp256K1.publicKey,
    [exampleServiceEndpoint]
);
```

- `createPeerDID`: This function creates new `peer` DID, using given key 
agreement and authentication key pairs, and a list of services. It may throw an 
error if the key pairs or services are invalid.

```ts
const peerDid = await castor.createPeerDID(
    [keyPairFromCurveEd25519, keyPairFromCurveX25519],
    [exampleService]
);
```

- `resolveDID`: This function asynchronously resolves a DID to its corresponding
DID Document. It may throw an error if the DID is invalid or the document cannot
be retrieved.

> NOTE: only `prism` and `peer` DID methods are currently supported!

```ts
const didDoc = await castor.resolveDID("did:prism:123456");
```

- `verifySignature`: This function verifies the authenticity of a signature 
using given DID, challenge, and signature data. It returns a boolean value 
indicating whether the signature is valid or not. It may throw an error if the 
DID or signature data are invalid.

This function is similar to the `verifySignature` function in the Apollo module,
but it facilitates the process of parsing the DID and extracting the right 
public key.

```ts
const message = "data to sign";
const messageBytes = new TextEncoder().encode(message);
const signatureSecp256K1 = apollo.signStringMessage(keyPairSecp256K1.privateKey, message);

const did = castor.parseDID("did:prism:123456");
const challenge = messageBytes
const signature = signatureSecp256K1.value;

const isValid = castor.verifySignature(
    castor.parseDID("did:prism:123456"),
    challenge, // Uint8Array
    signature // Uint8Array
);
```
