# Edge SDK Backup & Restore

Secure wallet backups through robust encryption using a master key derived from a seed, adhering to
the BIP32 standard. The backup data, structured as a JSON document, includes keys, DIDs,
credentials, and messages, with semantic versioning for future compatibility.

### The Foundation: Encryption and Key Management

At the heart of the backup solution lies robust encryption. The process begins with the derivation
of a master key from a seed, following the BIP32 standard. This master key is then used to encrypt
the wallet data using JSON Web Encryption (JWE), a widely adopted standard. The encryption
algorithm, ECDH-ES+A256KW, combined with AES-256-CBC and HMAC SHA-512, ensures that the data remains
confidential and tamper-proof.

### Data Specifications: Structure and Versioning

The structure of the backup data, which is formatted as a JSON document. This structure includes
essential elements like keys, decentralized identifiers (DIDs), credentials, and messages. To
accommodate future changes, the specification adheres to semantic versioning (semver), allowing for
updates and modifications while maintaining backward compatibility.


## Requirements
1. SDK A - a used instance with data in the store.
2. SDK B - an unused instance, with an empty store.


## Flow
1. SDK A creates a Backup `jwe`
2. SDK B restores from the `jwe`


## Code Reference
* Create the `jwe` using the Agent function provided.

Example 
```TS
const jwe = await Agent_a.backup.createJWE();
```

* Transfer the `jwe` to another SDK.
* Restore from the `jwe` using the Agent function provided.

Example
```TS
await Agent_b.backup.restore(jwe);
```
