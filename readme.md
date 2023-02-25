# CryptRibo - Cardano All in one crypto package for both browser and nodejs.

This package wraps the version of Emurgo cardano-serialization-lib for both browsers and nodejs, taking out this pain from you.

This tool can be used to create wallets using the same dependencies on both environments, but we've also exposed a version of the package in a cdn, backed by cloudflare [Here](https://jribo.kiwi/index.js).

### Package specification

```typescript
import * as t from "@emurgo/cardano-serialization-lib-[nodejs or browser]/cardano_serialization_lib";
interface Payload {
  [name: string]: any;
}
export declare const expose: () => Promise<typeof t>;
export declare function mnemonicToRootKeyPair(
  mnemonic: string
): Promise<t.PrivateKey>;
export declare function encryptWithPin(
  payload: Payload,
  pin: string
): Promise<string>;
export declare function decryptWithPin(
  payload: string,
  pin: string
): Promise<Payload>;
export declare function createKeyPair(hash: string): Promise<t.PrivateKey>;
export declare function randomPin(n2?: string): Promise<string>;
export declare function signBuffer(
  msg: Buffer,
  privKey: t.PrivateKey
): Promise<t.Ed25519Signature>;
export declare function verifyBuffer(
  msg: Buffer,
  pubKey: t.PublicKey,
  signature: t.Ed25519Signature
): Promise<boolean>;
export {};
```

### Core features

1.  EncryptWithPin: a built in tool to encrypt a buffer using cardano primitives from emurgo wasm.
2.  DecryptWithPin: a build in tool to decrypt the same encrypted buffers from previous method.
3.  signBuffer: allows you to sign a document using a Cardano private key.
4.  verifyBuffer: allows you to verify with your publicKey if the signature of a buffer is valid

## How to use

1. From a CDN
   Plug and play solution, start playing with this package in simple vanila code.

```html
<script src="https://jribo.kiwi/index.js"></script>
<script>
  (async () => {
    const text = `Texto`;
    const mnemonic =
      "logic easily waste eager injury oval sentence wine bomb embrace gossip supreme";
    const pin = "123456";

    const textBuffer = Buffer.from(text);
    const encrypted = await window.cryptribo.encryptWithPin(
      { body: text },
      pin
    );
    const decrypted = await window.cryptribo.decryptWithPin(encrypted, pin);

    const privateKey = await window.cryptribo.mnemonicToRootKeyPair(mnemonic);
    const publicKey = privateKey.to_public();

    const signed = await window.cryptribo.signBuffer(textBuffer, privateKey);
    const verified = await window.cryptribo.verifyBuffer(
      textBuffer,
      publicKey,
      signed
    );

    console.log(verified, decrypted);
  })();
</script>
```

2. Include the library in your project

- If you use esModules in your package (modern nodejs versions)

```javascript
import cryptribo from "cryptribo/browser";
```

- If you use cjs (require) in your package (older nodejs versions)

```javascript
const cryptribo = require("cryptribo/browser");
```

2. Nodejs packages

- If you use esModules in your package (modern nodejs versions)

```javascript
import cryptribo from "cryptribo/node";
```

- If you use cjs (require) in your package (older nodejs versions)

```javascript
const cryptribo = require("cryptribo/node");
```

### Usage

Simple example of, encrypting and decrypting data using primitives and how to restore the private key
from bip39 mnemonics and allow the user to sign and verify a message using this public and private key.

```javascript
(async () => {
  try {
    const text = `Texto`;
    const mnemonic =
      "logic easily waste eager injury oval sentence wine bomb embrace gossip supreme";
    const pin = "123456";

    const textBuffer = Buffer.from(text);
    const encrypted = await cryptribo.encryptWithPin({ body: text }, pin);
    const decrypted = await cryptribo.decryptWithPin(encrypted, pin);

    const privateKey = await cryptribo.mnemonicToRootKeyPair(mnemonic);
    const publicKey = privateKey.to_public();

    const signed = await cryptribo.signBuffer(textBuffer, privateKey);
    const verified = await cryptribo.verifyBuffer(
      textBuffer,
      publicKey,
      signed
    );

    console.log(verified, decrypted);
  } catch (err) {
    console.log(err);
  }
})();
```
