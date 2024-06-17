[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Castor

# Class: Castor

Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application
or a more traditional system requiring secure and private identity management, Castor provides the tools and features
you need to easily create, manage, and resolve DIDs.

 Castor

## Implements

- [`Castor`](../interfaces/Domain.Castor.md)

## Table of contents

### Constructors

- [constructor](Castor.md#constructor)

### Properties

- [apollo](Castor.md#apollo)
- [resolvers](Castor.md#resolvers)

### Methods

- [createPeerDID](Castor.md#createpeerdid)
- [createPrismDID](Castor.md#createprismdid)
- [extractVerificationMethods](Castor.md#extractverificationmethods)
- [getEcnumbasis](Castor.md#getecnumbasis)
- [parseDID](Castor.md#parsedid)
- [resolveDID](Castor.md#resolvedid)
- [verifySignature](Castor.md#verifysignature)

## Constructors

### constructor

• **new Castor**(`apollo`, `extraResolvers?`): [`Castor`](Castor.md)

Creates an instance of Castor as soon as a valid cryptographic interface is provided (Apollo).

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `apollo` | [`Apollo`](../interfaces/Domain.Apollo.md) | `undefined` |
| `extraResolvers` | `ExtraResolver`[] | `[]` |

#### Returns

[`Castor`](Castor.md)

#### Defined in

[src/castor/Castor.ts:66](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L66)

## Properties

### apollo

• `Private` **apollo**: [`Apollo`](../interfaces/Domain.Apollo.md)

#### Defined in

[src/castor/Castor.ts:56](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L56)

___

### resolvers

• `Private` **resolvers**: [`DIDResolver`](Domain.DIDResolver.md)[]

#### Defined in

[src/castor/Castor.ts:57](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L57)

## Methods

### createPeerDID

▸ **createPeerDID**(`publicKeys`, `services`): `Promise`\<[`DID`](Domain.DID.md)\>

Creates a DID for a peer (a device or server that acts as a DID subject) using given key agreement
and authentication key pairs and a list of services.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKeys` | [`PublicKey`](Domain.PublicKey.md)[] |
| `services` | [`Service`](Domain.Service.md)[] |

#### Returns

`Promise`\<[`DID`](Domain.DID.md)\>

**`Example`**

This function creates new peer DID, using a given key agreement, authentication key pairs, and a list of services. It may throw an error if the key pairs or services are invalid.

```ts
const peerDid = await castor.createPeerDID(
    [keyPairFromCurveEd25519, keyPairFromCurveX25519],
    [exampleService]
);
```

**`Async`**

#### Implementation of

[Castor](../interfaces/Domain.Castor.md).[createPeerDID](../interfaces/Domain.Castor.md#createpeerdid)

#### Defined in

[src/castor/Castor.ts:207](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L207)

___

### createPrismDID

▸ **createPrismDID**(`key`, `services?`, `issuingKeys?`): `Promise`\<[`DID`](Domain.DID.md)\>

Creates a DID for a prism (a device or server that acts as a DID owner and controller) using a
given master public key and list of services.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`PublicKey`](Domain.PublicKey.md) \| [`KeyPair`](Domain.KeyPair.md) | `undefined` |
| `services?` | [`Service`](Domain.Service.md)[] | `undefined` |
| `issuingKeys` | ([`PublicKey`](Domain.PublicKey.md) \| [`KeyPair`](Domain.KeyPair.md))[] | `[]` |

#### Returns

`Promise`\<[`DID`](Domain.DID.md)\>

**`Example`**

This function creates a new `prism` DID, using a given master Public Key and a list of Services.
The Public Key may be an individual Key or a KeyPair
It may throw an error if the master Public Key or Services are invalid.

```ts
const exampleServiceEndpoint = new Domain.Service("didcomm", ["DIDCommMessaging"], {
 uri: "https://example.com/endpoint",
 accept: ["didcomm/v2"],
 routingKeys: ["did:example:somemediator#somekey"],
});
const prismDid = await castor.createPrismDID(
 keyPairFromCurveSecp256K1.publicKey,
 [exampleServiceEndpoint]
);
```

**`Async`**

#### Implementation of

[Castor](../interfaces/Domain.Castor.md).[createPrismDID](../interfaces/Domain.Castor.md#createprismdid)

#### Defined in

[src/castor/Castor.ts:121](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L121)

___

### extractVerificationMethods

▸ **extractVerificationMethods**(`coreProperties`): [`VerificationMethod`](Domain.VerificationMethod.md)[]

Extracts the verificationMethods from an array of CoreProperties inside a DID Document

#### Parameters

| Name | Type |
| :------ | :------ |
| `coreProperties` | [`DIDDocumentCoreProperty`](../modules/Domain.md#diddocumentcoreproperty)[] |

#### Returns

[`VerificationMethod`](Domain.VerificationMethod.md)[]

#### Defined in

[src/castor/Castor.ts:250](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L250)

___

### getEcnumbasis

▸ **getEcnumbasis**(`did`, `publicKey`): `string`

Returns ecnumbasis from a valid DID and its related publicKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |
| `publicKey` | [`PublicKey`](Domain.PublicKey.md) |

#### Returns

`string`

#### Implementation of

[Castor](../interfaces/Domain.Castor.md).[getEcnumbasis](../interfaces/Domain.Castor.md#getecnumbasis)

#### Defined in

[src/castor/Castor.ts:409](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L409)

___

### parseDID

▸ **parseDID**(`did`): [`DID`](Domain.DID.md)

Parses a string representation of a Decentralized Identifier (DID) into a DID object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

[`DID`](Domain.DID.md)

**`Example`**

This function takes a string representation of a DID and returns an instance of `Domain.DID`. It may throw an error if the string is not a valid
DID.

```ts
const parsedPrismDid = castor.parseDID(
 "did:prism:b6c0c33d701ac1b9a262a14454d1bbde3d127d697a76950963c5fd930605:Cj8KPRI7CgdtYXN0ZXIwEAFKLgoJc2VmsxEiECSTjyV7sUfCr_ArpN9rvCwR9fRMAhcsr_S7ZRiJk4p5k"
);
```

#### Implementation of

[Castor](../interfaces/Domain.Castor.md).[parseDID](../interfaces/Domain.Castor.md#parsedid)

#### Defined in

[src/castor/Castor.ts:91](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L91)

___

### resolveDID

▸ **resolveDID**(`did`): `Promise`\<[`DIDDocument`](Domain.DIDDocument.md)\>

Asynchronously resolves a DID to its corresponding DID Document. This function may throw an error if
the DID is invalid or the document cannot be retrieved.
**Note:** only `prism` and `peer` DID methods are currently supported!

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<[`DIDDocument`](Domain.DIDDocument.md)\>

**`Example`**

This function asynchronously resolves a DID to its corresponding DID Document. It may throw an error if the DID is invalid or the document is unretrievable.

```ts
const didDocument = await castor.resolveDID("did:prism:123456")
```

**`Async`**

#### Implementation of

[Castor](../interfaces/Domain.Castor.md).[resolveDID](../interfaces/Domain.Castor.md#resolvedid)

#### Defined in

[src/castor/Castor.ts:232](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L232)

___

### verifySignature

▸ **verifySignature**(`did`, `challenge`, `signature`): `Promise`\<`boolean`\>

Verifies the authenticity of a signature using the corresponding DID Document, challenge, and signature data.
This function returns a boolean value indicating whether the signature is valid or not. This function may throw
an error if the DID Document or signature data are invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | [`DID`](Domain.DID.md) |
| `challenge` | `Uint8Array` |
| `signature` | `Uint8Array` |

#### Returns

`Promise`\<`boolean`\>

**`Example`**

This function verifies the authenticity of a signature using given DID, challenge, and signature data. It returns a boolean value indicating whether the signature is valid or not. It may throw an error if the DID or signature data are invalid.

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

**`Async`**

#### Implementation of

[Castor](../interfaces/Domain.Castor.md).[verifySignature](../interfaces/Domain.Castor.md#verifysignature)

#### Defined in

[src/castor/Castor.ts:294](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/castor/Castor.ts#L294)
