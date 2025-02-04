<p align="center">
  <a href="https://www.hyperledger.org/projects/identus">
    <img src="https://cdn.jsdelivr.net/gh/hyperledger/identus@v2.13/resources/images/hyperledger-identus.svg" alt="identus-logo" width="513px" height="99px" />
  </a>
  <i> <font size="18">Cardano</font> </i>
</p>

Here, we provide you with everything you need to connect the Agent SDK in Typescript and interact with Cardano Web Wallets in order to create and manage prism:dids on chain.

## Integration

In order to publish a prism:did in Cardano blockchain in Typescript, we must talk [CIP-30](https://cips.cardano.org/cip/CIP-30) specification which defines how to connect with existing browser wallet extensions.


## Tutorials

### Create and Publish an Issuer prism:did on chain.

In this tutorial you will learn how to use the Typescript SDK and any Cardano Wallet, even Hardware wallets (Ledger, Trezor, Keystone) to create and submit a prism:did operation on chain. 

This is a required step for this DID to be resolveable using the [universal resolver](https://dev.uniresolver.io/).

The IssuerDID is bundled in the Identus credentials and Verifiers or Holders will use this reference to resolve the DIDS public key and Verify that the Credential Presentations where in deed issued by the right Issuer Identity.

[Start tutorial](./IssuerDID.md)
