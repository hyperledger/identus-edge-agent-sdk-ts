import {
  DID,
  Signature,
  Service,
  Curve,
  Seed,
  VerificationMethod as DIDDocumentVerificationMethod,
  VerificationMethods as DIDDocumentVerificationMethods,
} from "../domain";
import Apollo from "../domain/buildingBlocks/Apollo";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import { AgentError } from "../domain/models/Errors";
import { AgentDIDHigherFunctions as AgentDIDHigherFunctionsClass } from "./types";

export class AgentDIDHigherFunctions implements AgentDIDHigherFunctionsClass {
  constructor(
    protected apollo: Apollo,
    protected castor: Castor,
    protected pluto: Pluto,
    protected seed: Seed
  ) {}

  async signWith(did: DID, message: Uint8Array): Promise<Signature> {
    const privateKeys = this.pluto.getDIDPrivateKeysByDID(did);
    if (!privateKeys || privateKeys.length <= 0) {
      throw new AgentError.CannotFindDIDPrivateKey();
    }
    const [privateKey] = privateKeys;
    return this.apollo.signByteArrayMessage(privateKey, message);
  }

  async createNewPeerDID(
    services: Service[],
    updateMediator: boolean
  ): Promise<DID> {
    const index = this.pluto.getPrismLastKeyPathIndex();
    const keyAgreementKeyPair = this.apollo.createKeyPairFromKeyCurve(
      this.seed,
      {
        curve: Curve.X25519,
        index: index,
      }
    );
    const authenticationKeyPair = this.apollo.createKeyPairFromKeyCurve(
      this.seed,
      {
        curve: Curve.ED25519,
        index: index,
      }
    );

    const did = await this.castor.createPeerDID(
      [keyAgreementKeyPair, authenticationKeyPair],
      services
    );

    if (updateMediator) {
      //TODO(): This still needs to be done update the key List
    }

    this.pluto.storePeerDID(did, [
      keyAgreementKeyPair.privateKey,
      authenticationKeyPair.privateKey,
    ]);

    // The next logic is a bit tricky, so it's not forgotten this is a reminder.
    // The next few lines are needed because of DIDComm library, the library will need
    // to get the secret(private key) that is pair of the public key within the DIDPeer Document
    // to this end the library will give you the id of the public key that is `did:{method}:{methodId}#ecnumbasis`.
    // So the code below after the did is created, it will retrieve the document and
    // and store the private keys with the corresponding `id` of the one created on the document.
    // So when the secret resolver asks for the secret we can identify it.
    const didDocument = await this.castor.resolveDID(did.toString());

    const verificationMethods = didDocument.coreProperties.reduce<
      DIDDocumentVerificationMethod[]
    >((result, property) => {
      if (property instanceof DIDDocumentVerificationMethods) {
        result.push(...property.values);
      }
      return result;
    }, []);

    verificationMethods.forEach((verificationMethod, i) => {
      const privateKey =
        verificationMethod.type.indexOf("X25519") !== -1
          ? keyAgreementKeyPair.privateKey
          : authenticationKeyPair.privateKey;

      this.pluto.storePrivateKeys(privateKey, did, i, verificationMethod.id);
    });

    return did;
  }

  async createNewPrismDID(
    alias: string,
    services: Service[],
    keyPathIndex?: number
  ): Promise<DID> {
    const index = keyPathIndex
      ? keyPathIndex
      : this.pluto.getPrismLastKeyPathIndex();
    const keyPair = this.apollo.createKeyPairFromKeyCurve(this.seed, {
      curve: Curve.SECP256K1,
      index: index,
    });
    const did = await this.castor.createPrismDID(keyPair.publicKey, services);
    //this.pluto.storePrivateKeys(keyPair.privateKey, did, index, null);
    this.pluto.storePrismDID(did, index, keyPair.privateKey, null, alias);
    return did;
  }
}
