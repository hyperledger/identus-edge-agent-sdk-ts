# Apollo

Apollo module provides a suite of cryptographic primitives designed to ensure the integrity, authenticity, and confidentiality of stored and processed data. Currently, Apollo offers primitives for generating mnemonics, seeds, and key pairs; and primitives for cryptographically signing data and verification of signatures.

## Apollo setup

Assuming the installation of the Wallet SDK as a dependency, here's an example of
how to import and init Apollo module:

```ts
import { Apollo, Domain } from '@input-output-hk/atala-prism-wallet-sdk';

const apollo = new Apollo();

// use apollo...
```

`Domain` contains a domain-specific types and models used by Apollo and other modules in the SDK.

## API Overview
Here's a brief explanation of the essential primitives:

- `createRandomMnemonics`: This function creates a random mnemonic phrase whose usage is as a seed for generating a private key.

```ts
const mnemonics = apollo.createRandomMnemonics();
```

- `createSeed`: This function takes mnemonics and passphrases and creates a seed object to generate a private key. It may throw an error if the mnemonics are invalid.

```ts
const seed = apollo.createSeed(mnemonics, "my-secret-passphrase");
```

- `createRandomSeed`: This function creates a random mnemonic phrase and seed.

```ts
const {mnemonics, seed} = apollo.createRandomSeed();
```

- `createKeyPairFromKeyCurve`: This function creates a key pair (a private and public key) using a given seed and key curve.

```ts
const keyPairSecp256K1 = apollo.createKeyPairFromKeyCurve({
    curve: Domain.Curve.SECP256K1
}, seed);
```

- `createKeyPairFromPrivateKey`: This function creates a key pair (a private and 
public key) using a given privateKey.

In the following example, privateKey is of type PrivateKey

```ts
const keyPairSecp256K1 = apollo.createKeyPairFromPrivateKey(
   privateKey
);
```

Supported key curves are: `SECP256K1`, `ED25519` and `X25519`. `seed` is optional
param used only for `SECP256K1` keys.

- `compressedPublicKeyFromPublicKey`: This function compresses a given public key into a shorter, more efficient form.

```ts
let compressedPublicKey = apollo.compressedPublicKeyFromPublicKey(keyPairSecp256K1.publicKey);
```

> NOTE: This API works only with `SECP256K1` key curve.

- `signStringMessage`, `signByteArrayMessage`: This function signs a message using a given private key, returning the signature.

```ts
const message = "data to sign";
const messageBytes = new TextEncoder().encode(message);

const signatureSecp256K1 = apollo.signStringMessage(keyPairSecp256K1.privateKey, message);
const signatureEd25519 = apollo.signByteArrayMessage(keyPairEd25519.privateKey, messageBytes);
```

> **Note:** Signing data is possible only with `SECP256K1` and `ED25519` key curves.

- `verifySignature`: This function verifies the authenticity of a signature using the corresponding public key, challenge, and signature. It returns a boolean value indicating whether the signature is valid or not.

```ts
let isValid = apollo.verifySignature( 
    keyPairFromCurveSecp256K1.publicKey,
    messageBytes,
    signatureSecp256K1.value
);
```

- `apollo utils`: Specific operations can be applied with Public, Private and KeyPairs of the supported algorithms and keycurves (secp256k1, x25519 and ed25519) to import and export keys from any format used by the user into an instance we can manage.

All private and public key instances can be exported into a buffer by calling public.getEncoded, private.getEncoded.
Also, the impport process should be similar using fromBytes as follows:

```ts
 const publicKey = Secp256k1PublicKey.secp256k1FromBytes(Buffer.from(keyInHex, 'hex'))
```
