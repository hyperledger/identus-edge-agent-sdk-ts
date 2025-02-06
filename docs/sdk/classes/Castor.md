[@hyperledger/identus-edge-agent-sdk](../README.md) / [Exports](../modules.md) / Castor

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
- [createPrismDIDAtalaObject](Castor.md#createprismdidatalaobject)
- [extractVerificationMethods](Castor.md#extractverificationmethods)
- [getEcnumbasis](Castor.md#getecnumbasis)
- [getPrismDIDKeyFromVerificationMethod](Castor.md#getprismdidkeyfromverificationmethod)
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

[src/castor/Castor.ts:70](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L70)

## Properties

### apollo

• `Private` **apollo**: [`Apollo`](../interfaces/Domain.Apollo.md)

#### Defined in

[src/castor/Castor.ts:60](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L60)

___

### resolvers

• `Private` **resolvers**: [`DIDResolver`](Domain.DIDResolver.md)[]

#### Defined in

[src/castor/Castor.ts:61](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L61)

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

[src/castor/Castor.ts:323](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L323)

___

### createPrismDID

▸ **createPrismDID**(`key`, `services?`, `authenticationKeys?`, `issuanceKeys?`): `Promise`\<[`DID`](Domain.DID.md)\>

Creates a DID for a prism (a device or server that acts as a DID owner and controller) using a
given master public key and list of services.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`PublicKey`](Domain.PublicKey.md) \| [`KeyPair`](Domain.KeyPair.md) | `undefined` |
| `services?` | [`Service`](Domain.Service.md)[] | `undefined` |
| `authenticationKeys?` | ([`PublicKey`](Domain.PublicKey.md) \| [`KeyPair`](Domain.KeyPair.md))[] | `[]` |
| `issuanceKeys?` | ([`PublicKey`](Domain.PublicKey.md) \| [`KeyPair`](Domain.KeyPair.md))[] | `[]` |

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

[src/castor/Castor.ts:235](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L235)

___

### createPrismDIDAtalaObject

▸ **createPrismDIDAtalaObject**(`key`, `did`): `Promise`\<`Uint8Array`\>

Creates a Prism DID Atala Object, a buffer contained the prism did create operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`PrivateKey`](Domain.PrivateKey.md) |
| `did` | [`DID`](Domain.DID.md) |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[src/castor/Castor.ts:156](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L156)

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

[src/castor/Castor.ts:370](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L370)

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

[src/castor/Castor.ts:535](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L535)

___

### getPrismDIDKeyFromVerificationMethod

▸ **getPrismDIDKeyFromVerificationMethod**(`verificationMethod`): `PrismDIDPublicKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `verificationMethod` | [`VerificationMethod`](Domain.VerificationMethod.md) |

#### Returns

`PrismDIDPublicKey`

#### Defined in

[src/castor/Castor.ts:99](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L99)

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

[src/castor/Castor.ts:95](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L95)

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

[src/castor/Castor.ts:348](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L348)

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
const {mnemonics, seed} = apollo.createRandomSeed();
const privateKey = apollo.createPublicKey({
  type: KeyTypes.EC,
  curve: Curve.SECP256K1,
  seed: Buffer.from(seed.value).toString("hex"),
  derivationPath: "m/0'/0'/0'"
});
if (privateKey.isSignable()) {
  const signature = privateKey.sign(message);
  const did = castor.parseDID("did:prism:123456");
  const challenge = messageBytes
  const isValid = castor.verifySignature(
      castor.parseDID("did:prism:123456"),
      challenge, // Uint8Array
      signature // Uint8Array
  );
}
```

**`Async`**

#### Implementation of

[Castor](../interfaces/Domain.Castor.md).[verifySignature](../interfaces/Domain.Castor.md#verifysignature)

#### Defined in

[src/castor/Castor.ts:420](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/8455e548651bea11f474591a89d22007cfe2962c/src/castor/Castor.ts#L420)
