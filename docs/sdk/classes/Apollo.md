[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Apollo

# Class: Apollo

Apollo defines the set of cryptographic operations that are used in the Atala PRISM.

**`Abstraction`**

We by default are implementing Secp256k1, Ed25519 and X25519 Private and Public key from our generic abstractions.
When you are using one of those type of keys, for example with:

```ts
 const privateKey = apollo.createPrivateKey({
   type: KeyTypes.EC,
   curve: Curve.ED25519,
 });
```
All the properties you pass to the createPrivateKey are just the default keyProperty keys and the values are strings, buffers are represented in hex format also as strings to simplify conversion later

You can know check if this key can sign with:

```ts
if (privateKey.isSignable()) {
 //the sign method will be available inside this if
 privateKey.sign(message)
}
//not outside

const signature = privateKey.isSignable() && privateKey.sign(message)
//This last one would also would but if your key was not signable would return false
```

PublicKeys follow the same concept, imagine you already have an instance of a publicKey, then..

```ts
if (publicKey.canVerify()) {
 privateKey.verify(challenge, signature)
}
//not outside
```

All keys know also have a generic list of properties which can be accessed at any stage, for example:

```ts
privateKey.getProperty(KeyProperties.curve)
```

Would give your the Curve value.

Find below all the complete list of KeyProperties that are available.

```ts
export enum KeyProperties {
  /// The 'kid'  represents a key's identifier.
  kid = "kid",
  /// The 'algorithm'  corresponds to the cryptographic algorithm associated with the key.,
  algorithm = "algorithm",
  /// The 'curve'  represents the elliptic curve used for an elliptic-curve key.,
  curve = "curve",
  /// The 'seed'  corresponds to the seed value from which a key is derived.,
  seed = "seed",
  /// The 'rawKey'  refers to the raw binary form of the key.,
  rawKey = "raw",
  /// The 'derivationPath'  refers to the path used to derive a key in a hierarchical deterministic (HD) key generation scheme.,
  derivationPath = "derivationPath",
  index = "index",
  /// The 'type'  denotes the type of the key.,
  type = "type",
  /// The 'curvePointX'  represents the x-coordinate of a curve point for an elliptic-curve key.,
  curvePointX = "curvePoint.x",
  /// The 'curvePointY'  represents the y-coordinate of a curve point for an elliptic-curve key.,
  curvePointY = "curvePoint.y",
}
```

## Implements

- [`Apollo`](../interfaces/Domain.Apollo.md)
- [`KeyRestoration`](../interfaces/Domain.KeyRestoration.md)

## Table of contents

### Constructors

- [constructor](Apollo.md#constructor)

### Properties

- [Ed25519PrivateKey](Apollo.md#ed25519privatekey)
- [Secp256k1PrivateKey](Apollo.md#secp256k1privatekey)
- [X25519PrivateKey](Apollo.md#x25519privatekey)

### Methods

- [createPrivateKey](Apollo.md#createprivatekey)
- [createRandomMnemonics](Apollo.md#createrandommnemonics)
- [createRandomSeed](Apollo.md#createrandomseed)
- [createSeed](Apollo.md#createseed)
- [restorePrivateKey](Apollo.md#restoreprivatekey)
- [restorePublicKey](Apollo.md#restorepublickey)

## Constructors

### constructor

• **new Apollo**(): [`Apollo`](Apollo.md)

#### Returns

[`Apollo`](Apollo.md)

## Properties

### Ed25519PrivateKey

▪ `Static` **Ed25519PrivateKey**: typeof `Ed25519PrivateKey` = `Ed25519PrivateKey`

#### Defined in

[src/apollo/Apollo.ts:116](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/apollo/Apollo.ts#L116)

___

### Secp256k1PrivateKey

▪ `Static` **Secp256k1PrivateKey**: typeof `Secp256k1PrivateKey` = `Secp256k1PrivateKey`

#### Defined in

[src/apollo/Apollo.ts:115](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/apollo/Apollo.ts#L115)

___

### X25519PrivateKey

▪ `Static` **X25519PrivateKey**: typeof `X25519PrivateKey` = `X25519PrivateKey`

#### Defined in

[src/apollo/Apollo.ts:117](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/apollo/Apollo.ts#L117)

## Methods

### createPrivateKey

▸ **createPrivateKey**(`parameters`): [`PrivateKey`](Domain.PrivateKey.md)

Creates a private key based on the current cryptographic abstraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Object` |

#### Returns

[`PrivateKey`](Domain.PrivateKey.md)

**`Example`**

Create an EC Key with secp256k1 curve

```ts
 const privateKey = apollo.createPrivateKey({
   type: KeyTypes.EC,
   curve: Curve.SECP256K1,
   seed: Buffer.from(seed.value).toString("hex"),
 });
```

**`Example`**

Create an EC Key with secp256k1 curve, but also specify a derivationPath

```ts
 const privateKey = apollo.createPrivateKey({
   type: KeyTypes.EC,
   curve: Curve.SECP256K1,
   seed: Buffer.from(seed.value).toString("hex"),
   derivationPath: "m/0'/0'/0'"
 });
```

**`Example`**

Create an EC Key with ed25519 curve, ED25519 keys do not use derivation,
passing the seed or derivation path will make no effect.
Calling this function just generates a new random privateKey for that curve

```ts
 const privateKey = apollo.createPrivateKey({
   type: KeyTypes.EC,
   curve: Curve.ED25519,
 });
```

**`Example`**

Create an EC Key with X25519 curve, X25519 keys do not use derivation,
passing the seed or derivation path will make no effect.
Calling this function just generates a new random privateKey for that curve

```ts
 const privateKey = apollo.createPrivateKey({
   type: KeyTypes.Curve25519,
   curve: Curve.X25519,
 });
```

#### Implementation of

[Apollo](../interfaces/Domain.Apollo.md).[createPrivateKey](../interfaces/Domain.Apollo.md#createprivatekey)

#### Defined in

[src/apollo/Apollo.ts:250](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/apollo/Apollo.ts#L250)

___

### createRandomMnemonics

▸ **createRandomMnemonics**(): [`MnemonicWordList`](../modules/Domain.md#mnemonicwordlist)

Creates a random set of mnemonic phrases that can be used as a seed for generating a private key.

#### Returns

[`MnemonicWordList`](../modules/Domain.md#mnemonicwordlist)

**`Example`**

This function creates a random mnemonic phrase whose usage is as a seed for generating a private key.

```ts
 const mnemonics = apollo.createRandomMnemonics();
```

#### Implementation of

[Apollo](../interfaces/Domain.Apollo.md).[createRandomMnemonics](../interfaces/Domain.Apollo.md#createrandommnemonics)

#### Defined in

[src/apollo/Apollo.ts:131](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/apollo/Apollo.ts#L131)

___

### createRandomSeed

▸ **createRandomSeed**(`passphrase?`): [`SeedWords`](../interfaces/Domain.SeedWords.md)

Creates a random seed and a corresponding set of mnemonic phrases.

#### Parameters

| Name | Type |
| :------ | :------ |
| `passphrase?` | `string` |

#### Returns

[`SeedWords`](../interfaces/Domain.SeedWords.md)

**`Example`**

This function creates a random mnemonic phrase and seed.

```ts
 const {mnemonics, seed} = apollo.createRandomSeed();
```

#### Implementation of

[Apollo](../interfaces/Domain.Apollo.md).[createRandomSeed](../interfaces/Domain.Apollo.md#createrandomseed)

#### Defined in

[src/apollo/Apollo.ts:182](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/apollo/Apollo.ts#L182)

___

### createSeed

▸ **createSeed**(`mnemonics`, `passphrase?`): [`Seed`](../interfaces/Domain.Seed.md)

Takes in a set of mnemonics and a passphrase, and returns a seed object used to generate a private key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonics` | [`MnemonicWordList`](../modules/Domain.md#mnemonicwordlist) |
| `passphrase?` | `string` |

#### Returns

[`Seed`](../interfaces/Domain.Seed.md)

**`Example`**

This function takes mnemonics and passphrases and creates a seed object to generate a private key. It may throw an error if the mnemonics are invalid.

```ts
 const seed = apollo.createSeed(mnemonics, "my-secret-passphrase");
```

#### Implementation of

[Apollo](../interfaces/Domain.Apollo.md).[createSeed](../interfaces/Domain.Apollo.md#createseed)

#### Defined in

[src/apollo/Apollo.ts:149](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/apollo/Apollo.ts#L149)

___

### restorePrivateKey

▸ **restorePrivateKey**(`key`): [`PrivateKey`](Domain.PrivateKey.md)

Restores a PrivateKey from the given StorableKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`StorableKey`](../interfaces/Domain.StorableKey-1.md) |

#### Returns

[`PrivateKey`](Domain.PrivateKey.md)

PrivateKey instance

**`Throws`**

if the restoration process fails

#### Implementation of

[KeyRestoration](../interfaces/Domain.KeyRestoration.md).[restorePrivateKey](../interfaces/Domain.KeyRestoration.md#restoreprivatekey)

#### Defined in

[src/apollo/Apollo.ts:334](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/apollo/Apollo.ts#L334)

___

### restorePublicKey

▸ **restorePublicKey**(`key`): [`PublicKey`](Domain.PublicKey.md)

Restores a PublicKey from the given StorableKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`StorableKey`](../interfaces/Domain.StorableKey-1.md) |

#### Returns

[`PublicKey`](Domain.PublicKey.md)

PublicKey instance

**`Throws`**

if the restoration process fails, this method throws an error

#### Implementation of

[KeyRestoration](../interfaces/Domain.KeyRestoration.md).[restorePublicKey](../interfaces/Domain.KeyRestoration.md#restorepublickey)

#### Defined in

[src/apollo/Apollo.ts:349](https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/f8f2652/src/apollo/Apollo.ts#L349)
