import * as Domain from "../../domain";
import { JsonWebKey2020 } from "../../peer-did4/input";
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


    const keySpec = publicKeys.map((pk) => {
      const pkExpo = pk as Domain.PublicKey && Domain.ExportableKey;
      const jwk = pkExpo.factory(pk, { pemLabel: '' }).JWK() as any
      return {
        type: 'JsonWebKey2020',
        context: 'https://w3id.org/security/suites/jws-2020/v1',
        jwk
      } as JsonWebKey2020
    })
    const did = await ctx.Castor.createPeerDID4(keySpec, services);

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
