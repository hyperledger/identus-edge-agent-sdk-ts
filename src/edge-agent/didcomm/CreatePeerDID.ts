import * as Domain from "../../domain";
import { Task } from "../../utils/tasks";
import { DIDCommContext } from "./Context";

/**
 * Asyncronously create and store a new peer did
 *
 * @async
 * @param {Service[]} services
 * @param {boolean} [updateMediator=false]
 * @returns {Promise<DID>}
 */

interface Args {
  services: Domain.Service[];
  updateMediator: boolean;
}

export class CreatePeerDID extends Task<Domain.DID, Args> {
  async run(ctx: DIDCommContext): Promise<Domain.DID> {
    const services = this.args.services;
    const updateMediator = this.args.updateMediator ?? false;
    const publicKeys: Domain.PublicKey[] = [];
    const keyAgreementPrivateKey = ctx.Apollo.createPrivateKey({
      type: Domain.KeyTypes.Curve25519,
      curve: Domain.Curve.X25519,
    });

    const authenticationPrivateKey = ctx.Apollo.createPrivateKey({
      type: Domain.KeyTypes.EC,
      curve: Domain.Curve.ED25519,
    });

    publicKeys.push(keyAgreementPrivateKey.publicKey());
    publicKeys.push(authenticationPrivateKey.publicKey());
    const mediatorDID = ctx.MediationHandler.mediator?.mediatorDID;

    if (
      mediatorDID &&
      !services.find((service) => {
        return service.isDIDCommMessaging;
      })
    ) {
      //TODO This still needs to be done update the key List
      services.push(
        new Domain.Service(
          "#didcomm-1",
          ["DIDCommMessaging"],
          new Domain.ServiceEndpoint(mediatorDID.toString())
        )
      );
    }
    const did = await ctx.Castor.createPeerDID(publicKeys, services);

    if (updateMediator) {
      await ctx.MediationHandler.updateKeyListWithDIDs([did]);
    }

    await ctx.Pluto.storeDID(did, [
      keyAgreementPrivateKey,
      authenticationPrivateKey,
    ]);

    return did;
  }
}
