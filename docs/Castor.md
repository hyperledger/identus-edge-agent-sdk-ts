# Castor

The Castor protocol defines a set of functions for working with Decentralized Identifiers (DIDs) and DID Documents. Here's a brief explanation of each function:

- `parseDID`: This function takes a string representation of a DID and returns a `DID` object. It may throw an error if the string is not a valid DID.

- `createPrismDID`: This function creates a DID for a Prism (a device or server that acts as a DID owner and controller) using a given master public key and list of services. It may throw an error if the master public key or services are invalid.

```swift
// Example usage:
do {
    let castor = CastorImpl(apollo: apolloImpl)
    let did = try castor.parseDID(str: "did:example:123")
    let publicKey = try PublicKey(base58: "...")
    let services = [DIDDocument.Service]()
    let prismDID = try castor.createPrismDID(masterPublicKey: publicKey, services: services)
} catch {
    // Handle error
}
```

- `createPeerDID`: This function creates a DID for a Peer (a device or server that acts as a DID subject) using given key agreement and authentication key pairs and a list of services. It may throw an error if the key pairs or services are invalid.

```swift
// Example usage:
do {
    let castor = CastorImpl(apollo: apolloImpl)
    let keyAgreementKeyPair = try KeyPair()
    let authenticationKeyPair = try KeyPair()
    let services = [DIDDocument.Service]()
    let peerDID = try castor.createPeerDID(keyAgreementKeyPair: keyAgreementKeyPair, authenticationKeyPair: authenticationKeyPair, services: services)
} catch {
    // Handle error
}
```

- `resolveDID`: This function asynchronously resolves a DID to its corresponding DID Document. It may throw an error if the DID is invalid or the document cannot be retrieved.

```swift
// Example usage:
do {
    let castor = CastorImpl(apollo: apolloImpl)
    let did = try castor.parseDID(str: "did:example:123")
    let document = try castor.resolveDID(did: did)
} catch {
    // Handle error
}
```

- `verifySignature`: This function verifies the authenticity of a signature using the corresponding DID or DID Document, challenge, and signature data. It returns a boolean value indicating whether the signature is valid or not. It may throw an error if the DID or signature data are invalid.

```swift
// Example usage:
do {
    let castor = CastorImpl(apollo: apolloImpl)
    let did = try castor.parseDID(str: "did:example:123")
    let challenge = Data(...)
    let signature = Data(...)
    let isValid = try castor.verifySignature(did: did, challenge: challenge, signature: signature)
} catch {
    // Handle error
}
```

- `getEcnumbasis`: This function generates a unique ECNUM basis string for a given DID and key pair. It may throw an error if the DID or key pair are invalid.

```swift
// Example usage:
do {
    let castor = CastorImpl(apollo: apolloImpl)
    let did = try castor.parseDID(str: "did:example:123")
    let keyPair = try KeyPair()
    let ecnumbasis = try castor.getEcnumbasis(did: did, keyPair: keyPair)
} catch {
    // Handle error
}
```
