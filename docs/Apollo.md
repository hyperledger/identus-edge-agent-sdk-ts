# Apollo

Apollo module provides a suite of cryptographic primitives for generating seeds,
key pairs, signatures and signature verification. 

## Apollo setup

Assuming the Wallet SDK has been installed as a dependency, here's an example of
how to import and init Apollo module:

```ts
import { Apollo } from '@input-output-hk/atala-prism-wallet-sdk';

const apollo = new Apollo();

// use apollo...
```

## API
Here's a brief explanation of the most important primitives:


- `createRandomMnemonics`: This function creates a random mnemonic phrase that 
can be used as a seed for generating a private key.

```swift
// Example usage:
let mnemonics = ApolloImpl().createRandomMnemonics()
```

- `createSeed`: This function takes in a set of mnemonics and a passphrase, and returns a seed object used to generate a private key. It may throw an error if the mnemonics or passphrase are invalid.

```swift
// Example usage:
do {
    let apollo = ApolloImpl()
    let mnemonics = ["word1", "word2", "word3", ...]
    let passphrase = "passphrase"
    let seed = try apollo.createSeed(mnemonics: mnemonics, passphrase: passphrase)
} catch {
    // Handle error
}
```

- `createRandomSeed`: This function creates a random seed and a corresponding set of mnemonic phrases.

```swift
// Example usage:
let (mnemonics, seed) = ApolloImpl().createRandomSeed()
```

- `createKeyPair`: This function creates a key pair (a private and public key) using a given seed and key curve.

```swift
// Example usage:
let seed = Seed(...)
let curve = KeyCurve.secp256k1
let keyPair = ApolloImpl().createKeyPair(seed: seed, curve: curve)
```

- `createKeyPair`: This function creates a key pair using a given seed and a specified private key. It may throw an error if the private key is invalid.

```swift
// Example usage:
do {
    let apollo = ApolloImpl()
    let seed = Seed(...)
    let privateKey = PrivateKey(...)
    let keyPair = try apollo.createKeyPair(seed: seed, privateKey: privateKey)
} catch {
    // Handle error
}
```

- `compressedPublicKey`: This function compresses a given public key into a shorter, more efficient form.

```swift
// Example usage:
let publicKey = PublicKey(...)
let compressedPublicKey = ApolloImpl().compressedPublicKey(publicKey: publicKey)
```

- `compressedPublicKey`: This function decompresses a given compressed public key into its original form.

```swift
// Example usage:
let compressedData = Data(...)
let decompressedPublicKey = ApolloImpl().compressedPublicKey(compressedData: compressedData)
```

- `signMessage`: This function signs a message using a given private key, returning the signature.

```swift
// Example usage:
let privateKey = PrivateKey(...)
let message = Data(...)
let signature = ApolloImpl().signMessage(privateKey: privateKey, message: message)
```

- `signMessage`: This function signs a message using a given private key, returning the signature. It may throw an error if the message is invalid.

```swift
// Example usage:
do {
    let apollo = ApolloImpl()
    let privateKey = PrivateKey(...)
    let message = "hello world"
    let signature = try apollo.signMessage(privateKey: privateKey, message: message)
} catch {
    // Handle error
}
```

- `verifySignature`: This function verifies the authenticity of a signature using the corresponding public key, challenge, and signature. It returns a boolean value indicating whether the signature is valid or not.

```swift
// Example usage:
let publicKey = PublicKey(...)
let challenge = Data(...)
let signature = Signature(...)
let isValid = ApolloImpl().verifySignature(publicKey: publicKey, challenge: challenge, signature: signature)
```
