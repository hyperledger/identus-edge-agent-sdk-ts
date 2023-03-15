# Pluto

Pluto defines data storage interface, required by an Agent, for working with SSI
artifacts such as DIDs, private keys, and DIDComm messages. Depending on the
platform and specific use case, it's up to the application to provide an 
appropriate implementation of this interface.

Pluto also provides a default implementation based on TypeORM and `sql.js` that
serves as an example and can be used for prototyping and testing before investing
in a more robust use-case specific solution. In the future, we might provide one
or more implementations which we could recommend for production use.

## Interface preview

Here's the part of Pluto interface, just to give you an idea of what it looks 
like. For the full interface specification, check `domain` folder.

```ts
interface Pluto {
  start(): Promise<void>;

  storePrismDID(
      did: DID, 
      keyPathIndex: number, 
      privateKey: PrivateKey, 
      privateKeyMetaId: string | null, 
      alias?: string
  ): Promise<void>;

  storePeerDID(did: DID, privateKeys: Array<PrivateKey>): Promise<void>;
  
  storePrivateKeys(
      privateKey: PrivateKey,
      did: DID,
      keyPathIndex: number,
      metaId: string | null
  ): Promise<void>;

  storeMessage(message: Message): Promise<void>;

  storeMediator(mediator: DID, host: DID, routing: DID): Promise<void>;

  storeCredential(credential: VerifiableCredential): Promise<void>;

  getAllPrismDIDs(): Promise<PrismDIDInfo[]>;

  getDIDPrivateKeysByDID(did: DID): Promise<Array<PrivateKey> | null>;
  
  getPairByName(name: string): Promise<DIDPair | null>;
  
  getMessage(id: string): Promise<Message | null>;

  getAllMessages(): Promise<Array<Message>>;

  getAllMediators(): Promise<Array<Mediator>>;

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
    synchronize: true,
    location: "pluto",
    sqlJsConfig: {
        locateFile: (filename: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.2.1/dist/${filename}`
    },
    autoSave: true,
    useLocalForage: true,
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
