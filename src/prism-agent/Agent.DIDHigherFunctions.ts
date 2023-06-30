import {
  Curve,
  DID,
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
import { KeyTypes } from "../domain/models";
import {
  AgentDIDHigherFunctions as AgentDIDHigherFunctionsClass,
  ConnectionsManager,
  MediatorHandler,
} from "./types";

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
    protected manager: ConnectionsManager,
    protected mediationHandler: MediatorHandler,
    protected seed: Seed
  ) {}

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

    const mediatorDID = this.manager.mediationHandler.mediator?.routingDID;

    if (
      updateMediator &&
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

    this.pluto.storePeerDID(did, [
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
    const index = keyPathIndex
      ? keyPathIndex
      : await this.pluto.getPrismLastKeyPathIndex();

    const privateKey = this.apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.SECP256K1,
      seed: Buffer.from(this.seed.value).toString("hex"),
    });

    const publicKey = privateKey.publicKey();
    const did = await this.castor.createPrismDID(publicKey, services);
    await this.pluto.storePrismDID(did, index, privateKey, null, alias);
    return did;
  }
}
