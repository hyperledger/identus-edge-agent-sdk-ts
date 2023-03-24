# Pluto

Pluto defines PRISM's data storage interface for working with SSI artifacts such
as DIDs, private keys, and DIDComm messages. Depending on the platform and
specific use case, it's up to the application to provide an appropriate
implementation of this interface.

As part of TypeScript Wallet SDK, Pluto also provides a default implementation
based on TypeORM and `sql.js` that serves as an example and can be used for
prototyping and testing before investing in a more robust use-case specific
solution. In the future, we might provide one or more implementations which we
could recommend for production use.

## Interface preview

Here's the part of Pluto interface, just to give you an idea of what it looks
like. For the full interface specification, please check `Domain` module in the
SDK.

```ts
interface Pluto {
  /**
   * A place to put initialisation logic, if needed for the particular implementation.
   */
  start(): Promise<void>;

  /**
   * This method should implement a mechanism to persist given PRISM DID along with its private key (SECP256K1).
   */
  storePrismDID(
      did: DID,
      keyPathIndex: number,
      privateKey: PrivateKey,
      privateKeyMetaId: string | null,
      alias?: string
  ): Promise<void>;

  /**
   * This method should implement a mechanism to persist given Peer DID along with its private keys (ED25519 and X25519).
   */
  storePeerDID(did: DID, privateKeys: Array<PrivateKey>): Promise<void>;

  /**
   * This method should implement a mechanism to persist private keys (SECP256K1, ED25519 and X25519).
   */
  storePrivateKeys(
      privateKey: PrivateKey,
      did: DID,
      keyPathIndex: number,
      metaId: string | null
  ): Promise<void>;

  /**
   * This method should implement a mechanism to persist given DIDComm message.
   */
  storeMessage(message: Message): Promise<void>;

  /**
   * This method should implement a mechanism to persist given mediator data.
   */
  storeMediator(mediator: DID, host: DID, routing: DID): Promise<void>;

  /**
   * This method should implement a mechanism to persist given Verifiable Credential.
   */
  storeCredential(credential: VerifiableCredential): Promise<void>;

  /**
   * This method should implement a mechanism to retrieve all persisted PRISM DIDs.
   */
  getAllPrismDIDs(): Promise<PrismDIDInfo[]>;

  /**
   * This method should implement a mechanism to retrieve a pair of DIDs (connection pairwise DIDs).
   */
  getPairByName(name: string): Promise<DIDPair | null>;

  /**
   * This method should implement a mechanism to retrieve a DIDComm message by ID.
   */
  getMessage(id: string): Promise<Message | null>;

  /**
   * This method should implement a mechanism to retrieve all persisted DIDComm messages.
   */
  getAllMessages(): Promise<Array<Message>>;

  /**
   * This method should implement a mechanism to retrieve all persisted mediators.
   */
  getAllMediators(): Promise<Array<Mediator>>;

  /**
   * This method should implement a mechanism to retrieve all persisted credentials.
   */
  getAllCredentials(): Promise<Array<VerifiableCredential>>;
}
```

## Usage example (default implementation)

Here's an example of how to use the default implementation of Pluto:

```ts
import {
  Pluto as PlutoDefault,
  Apollo,
  Castor,
  Domain
} from '@input-output-hk/atala-prism-wallet-sdk';

const apollo = new Apollo();
const castor = new Castor(apollo);

async function createPrismDID() {
  const {seed} = apollo.createRandomSeed();
  const keyPairFromCurveSecp256K1 = apollo.createKeyPairFromKeyCurve(
      seed,
      {
        curve: Domain.Curve.SECP256K1,
      }
  );

  const prismDid = await castor.createPrismDID(
      keyPairFromCurveSecp256K1.publicKey,
      []
  );

  return {prismDid, privateKey: keyPairFromCurveSecp256K1.privateKey};
}

const plutoInstance = new PlutoDefault({
  type: 'sqljs',
});

try {
  await plutoInstance.start();
  console.info("Pluto start success");
  // Create and store a new Prism DID
  const {prismDid, privateKey} = await createPrismDID();
  const keyPathIndex = await plutoInstance.getPrismLastKeyPathIndex();
  await plutoInstance.storePrismDID(
      prismDid,
      keyPathIndex + 1,
      privateKey,
      null,
      `DID from example - ${keyPathIndex}` // alias
  );
} catch (error) {
  console.error("Pluto start failed", error);
}

// Retrieve all persisted Prism DIDs at any time
async function getAllPrismDIDs() {
  const prismDIDs = await pluto.getAllPrismDIDs();
  console.info("All Prism DIDs", prismDIDs);
}

```
