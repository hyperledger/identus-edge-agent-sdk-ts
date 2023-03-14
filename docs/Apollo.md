# Apollo

Apollo module provides a suite of cryptographic primitives designed to ensure
the integrity, authenticity, and confidentiality of data that is stored and
processed. Currently, Apollo offers primitives for generating mnemonics, seeds
and key pairs; and primitives for cryptographically signing data and verification of
signatures.

## Apollo setup

Assuming the Wallet SDK has been installed as a dependency, here's an example of
how to import and init Apollo module:

```ts
import { Apollo, Domain } from '@input-output-hk/atala-prism-wallet-sdk';

const apollo = new Apollo();

// use apollo...
```

`Domain` contains a domain-specific types and models used by Apollo and other 
modules in the SDK.

## API Overview
Here's a brief explanation of the most important primitives:


- `createRandomMnemonics`: This function creates a random mnemonic phrase that 
can be used as a seed for generating a private key.

```ts
const mnemonics = apollo.createRandomMnemonics();
```

- `createSeed`: This function takes mnemonics and passphrase, and creates a seed
object used to generate a private key. It may throw an error if the mnemonics are
invalid.

```ts
const seed = apollo.createSeed(mnemonics, "my-secret-passphrase");
```

- `createRandomSeed`: This function creates a random mnemonic phrase and seed.

```ts
const {mnemonics, seed} = apollo.createRandomSeed();
```

- `createKeyPairFromKeyCurve`: This function creates a key pair (a private and 
public key) using a given seed and key curve.

```ts
const keyPairSecp256K1 = apollo.createKeyPairFromKeyCurve(seed, {
    curve: Domain.Curve.SECP256K1
});
```

Supported key curves are: `SECP256K1`, `ED25519` and `X25519`.

- `compressedPublicKeyFromPublicKey`: This function compresses a given public 
key into a shorter, more efficient form.

```ts
let compressedPublicKey = apollo.compressedPublicKeyFromPublicKey(keyPairSecp256K1.publicKey);
```

> NOTE: This API works only with `SECP256K1` key curve.

- `signStringMessage`, `signByteArrayMessage`: This function signs a message 
using a given private key, returning the signature.

```ts
const message = "data to sign";
const messageBytes = new TextEncoder().encode(message);

const signatureSecp256K1 = apollo.signStringMessage(keyPairSecp256K1.privateKey, message);
const signatureEd25519 = apollo.signByteArrayMessage(keyPairEd25519.privateKey, messageBytes);
```

> NOTE: Signing data is possible only with `SECP256K1` and `ED25519` key curves.

- `verifySignature`: This function verifies the authenticity of a signature using 
the corresponding public key, challenge, and signature. It returns a boolean 
value indicating whether the signature is valid or not.

```ts
let isValid = apollo.verifySignature( 
    keyPairFromCurveSecp256K1.publicKey,
    messageBytes,
    signatureSecp256K1.value
);
```
