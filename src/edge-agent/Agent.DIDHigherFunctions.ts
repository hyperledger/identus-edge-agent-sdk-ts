import {
  Curve,
  DID,
  KeyProperties,
  KeyTypes,
  PublicKey,
  Seed,
  Service,
  ServiceEndpoint,
  Signature,
} from "../domain";
import { Apollo } from "../domain/buildingBlocks/Apollo";
import { Castor } from "../domain/buildingBlocks/Castor";
import { Pluto } from "../domain/buildingBlocks/Pluto";
import { AgentError } from "../domain/models/Errors";
import {
  AgentDIDHigherFunctions as AgentDIDHigherFunctionsClass,
  MediatorHandler,
} from "./types";
import { PrismKeyPathIndexTask } from "./Agent.PrismKeyPathIndexTask";
import { PrismDerivationPath, PRISM_WALLET_PURPOSE, PRISM_DID_METHOD, AUTHENTICATION_KEY, ISSUING_KEY, PrismDerivationPathSchema } from "../domain/models/derivation/schemas/PrismDerivation";

/**
 * An extension for the Edge agent that groups some DID related operations mainly used to expose the create did functionality
 *
 * @export
 * @class AgentDIDHigherFunctions
 * @typedef {AgentDIDHigherFunctions}
 */
export class AgentDIDHigherFunctions implements AgentDIDHigherFunctionsClass {
  /**
   * Creates an instance of AgentDIDHigherFunctions.
   *
   * @constructor
   * @param {Apollo} apollo
   * @param {Castor} castor
   * @param {Pluto} pluto
   * @param {ConnectionsManager} manager
   * @param {MediatorHandler} mediationHandler
   * @param {Seed} seed
   */
  constructor(
    protected apollo: Apollo,
    protected castor: Castor,
    protected pluto: Pluto,
    protected mediationHandler: MediatorHandler,
    protected seed: Seed
  ) { }


  /**
   * Asyncronously sign with a DID
   *
   * @async
   * @param {DID} did
   * @param {Uint8Array} message
   * @returns {Promise<Signature>}
   */
  async signWith(did: DID, message: Uint8Array): Promise<Signature> {
    const privateKeys = await this.pluto.getDIDPrivateKeysByDID(did);

    for (const privateKey of privateKeys) {
      if (privateKey.isSignable()) {
        return {
          value: privateKey.sign(Buffer.from(message)),
        };
      }
    }

    throw new AgentError.CannotFindDIDPrivateKey();
  }

  /**
   * Asyncronously create and store a new peer did
   *
   * @async
   * @param {Service[]} services
   * @param {boolean} [updateMediator=false]
   * @returns {Promise<DID>}
   */
  async createNewPeerDID(
    services: Service[],
    updateMediator = false
  ): Promise<DID> {
    const publicKeys: PublicKey[] = [];
    const keyAgreementPrivateKey = this.apollo.createPrivateKey({
      type: KeyTypes.Curve25519,
      curve: Curve.X25519,
    });

    const authenticationPrivateKey = this.apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.ED25519,
    });

    publicKeys.push(keyAgreementPrivateKey.publicKey());
    publicKeys.push(authenticationPrivateKey.publicKey());
    const mediatorDID = this.mediationHandler.mediator?.mediatorDID;

    if (
      mediatorDID &&
      !services.find((service) => {
        return service.isDIDCommMessaging;
      })
    ) {
      //TODO(): This still needs to be done update the key List
      services.push(
        new Service(
          "#didcomm-1",
          ["DIDCommMessaging"],
          new ServiceEndpoint(mediatorDID.toString())
        )
      );
    }
    const did = await this.castor.createPeerDID(publicKeys, services);

    if (updateMediator) {
      await this.mediationHandler.updateKeyListWithDIDs([did]);
    }

    await this.pluto.storeDID(did, [
      keyAgreementPrivateKey,
      authenticationPrivateKey,
    ]);

    return did;
  }

  /**
   * Asyncronously create and store a PrismDID
   *
   * @async
   * @param {string} alias
   * @param {Service[]} services
   * @param {?number} [keyPathIndex]
   * @returns {Promise<DID>}
   */
  async createNewPrismDID(
    alias: string,
    services: Service[],
    keyPathIndex?: number
  ): Promise<DID> {
    const authenticationDerivation = new PrismDerivationPath([
      PRISM_WALLET_PURPOSE,
      PRISM_DID_METHOD,
      0,
      AUTHENTICATION_KEY,
      await this.getNextKeyPathIndex(keyPathIndex)
    ]);
    const issuingDerivation = new PrismDerivationPath([
      PRISM_WALLET_PURPOSE,
      PRISM_DID_METHOD,
      0,
      ISSUING_KEY,
      await this.getNextKeyPathIndex(keyPathIndex)
    ]);

    const sk = this.apollo.createPrivateKey({
      [KeyProperties.type]: KeyTypes.EC,
      [KeyProperties.curve]: Curve.SECP256K1,
      [KeyProperties.seed]: Buffer.from(this.seed.value).toString("hex"),
      [KeyProperties.derivationPath]: authenticationDerivation.toString(),
      [KeyProperties.derivationSchema]: PrismDerivationPathSchema
    });
    const edSk = this.apollo.createPrivateKey({
      [KeyProperties.type]: KeyTypes.EC,
      [KeyProperties.curve]: Curve.ED25519,
      [KeyProperties.seed]: Buffer.from(this.seed.value).toString("hex"),
      [KeyProperties.derivationPath]: issuingDerivation.toString(),
      [KeyProperties.derivationSchema]: PrismDerivationPathSchema
    });

    const publicKey = sk.publicKey();
    const did = await this.castor.createPrismDID(
      publicKey,
      services,
      [
        edSk.publicKey()
      ]
    );
    await this.pluto.storeDID(did, [sk, edSk], alias);

    return did;
  }

  /**
   * Determine the Index for the subsequent Key
   * 
   * @returns {number}
   */
  private async getNextKeyPathIndex(
    optionalKeyIndex?: number
  ): Promise<number> {
    const getIndexTask = new PrismKeyPathIndexTask(this.pluto);
    const index = await getIndexTask.run(
      optionalKeyIndex
    );
    const next = index;
    return next;
  }
}
