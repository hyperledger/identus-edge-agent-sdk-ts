import { base64 } from "multiformats/bases/base64";
import * as Domain from "../../domain";
import { PrismKeyPathIndexTask } from "../didFunctions/PrismKeyPathIndex";
import { OfferCredential } from "../protocols/issueCredential/OfferCredential";
import { RequestCredential, createRequestCredentialBody } from "../protocols/issueCredential/RequestCredential";
import { Task } from "../../utils/tasks";
import { DIDCommContext } from "./Context";

/**
 * Asyncronously prepare a request credential message from a valid offerCredential
 * for now supporting w3c verifiable credentials offers.
 */

interface Args {
  offer: OfferCredential;
}

export class HandleOfferCredential extends Task<RequestCredential, Args> {
  async run(ctx: DIDCommContext) {
    const { offer } = this.args;
    const attachment = offer.attachments.at(0);

    if (!attachment) {
      throw new Error("Invalid attachment");
    }

    const credentialType = offer.makeMessage().credentialFormat;
    const payload = attachment.payload;
    let credRequestBuffer: string;

    const requestCredentialBody = createRequestCredentialBody(
      [],
      offer.body.goalCode,
      offer.body.comment
    );

    const from = offer.to;
    const to = offer.from;
    if (!from) {
      throw new Error("Missing from");
    }
    if (!to) {
      throw new Error("Missing to");
    }
    const thid = offer.thid;


    if (credentialType === Domain.CredentialType.AnonCreds) {
      const metaname = offer.thid;
      if (!metaname) {
        throw new Error("Missing offer.thid");
      }

      const linkSecret = await ctx.Pluto.getLinkSecret();
      if (!linkSecret) {
        throw new Error("No linkSecret available.");
      }

      const [credentialRequest, credentialRequestMetadata] =
        await ctx.Pollux.processCredentialOffer<Domain.CredentialType.AnonCreds>(payload, { linkSecret });

      credRequestBuffer = JSON.stringify(credentialRequest);

      const metadata = new Domain.CredentialMetadata(Domain.CredentialType.AnonCreds, metaname, credentialRequestMetadata);

      await ctx.Pluto.storeCredentialMetadata(metadata);
    }
    else if (credentialType === Domain.CredentialType.JWT) {
      const getIndexTask = new PrismKeyPathIndexTask({});
      const index = await ctx.run(getIndexTask);

      const masterSk = await ctx.Apollo.createPrivateKey({
        [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
        [Domain.KeyProperties.index]: index,
        [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
        [Domain.KeyProperties.seed]: Buffer.from(ctx.Seed.value).toString("hex"),
      });

      const authSk = await ctx.Apollo.createPrivateKey({
        [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
        [Domain.KeyProperties.index]: index + 1,
        [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
        [Domain.KeyProperties.seed]: Buffer.from(ctx.Seed.value).toString("hex"),
      });


      const did = await ctx.Castor.createPrismDID(
        masterSk.publicKey(),
        [],
        [
          authSk.publicKey()
        ]
      );

      await ctx.Pluto.storeDID(did, [masterSk, authSk]);

      credRequestBuffer = await ctx.Pollux.processCredentialOffer<Domain.CredentialType.JWT>(payload, {
        did: did,
        keyPair: {
          curve: authSk.curve,
          privateKey: authSk,
          publicKey: authSk.publicKey(),
        },
      });

    }
    else if (credentialType === Domain.CredentialType.SDJWT) {
      const getIndexTask = new PrismKeyPathIndexTask({});
      const index = await ctx.run(getIndexTask);

      const masterSk = await ctx.Apollo.createPrivateKey({
        [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
        [Domain.KeyProperties.index]: index,
        [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
        [Domain.KeyProperties.seed]: Buffer.from(ctx.Seed.value).toString("hex"),
      });

      const authSk = await ctx.Apollo.createPrivateKey({
        [Domain.KeyProperties.curve]: Domain.Curve.ED25519,
        [Domain.KeyProperties.index]: index + 1,
        [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
        [Domain.KeyProperties.seed]: Buffer.from(ctx.Seed.value).toString("hex"),
      });

      const did = await ctx.Castor.createPrismDID(
        masterSk.publicKey(),
        [],
        [
          authSk.publicKey()
        ]
      );

      await ctx.Pluto.storeDID(did, [masterSk, authSk]);
      credRequestBuffer = await ctx.Pollux.processCredentialOffer<Domain.CredentialType.SDJWT>(payload, {
        did: did,
        sdJWT: true,
        keyPair: {
          curve: authSk.curve,
          privateKey: authSk,
          publicKey: authSk.publicKey(),
        },
      });
    } else {
      throw new Domain.AgentError.InvalidCredentialFormats();
    }

    const credentialFormat =
      credentialType === Domain.CredentialType.AnonCreds ? Domain.AttachmentFormats.ANONCREDS_REQUEST :
        credentialType === Domain.CredentialType.JWT ? Domain.CredentialType.JWT :
          credentialType === Domain.CredentialType.SDJWT ? Domain.CredentialType.SDJWT :
            Domain.CredentialType.Unknown;

    const attachments = [
      new Domain.AttachmentDescriptor(
        {
          base64: base64.baseEncode(Buffer.from(credRequestBuffer)),
        },
        credentialFormat,
        undefined,
        undefined,
        credentialFormat
      ),
    ];

    const requestCredential = new RequestCredential(
      requestCredentialBody,
      attachments,
      from,
      to,
      thid
    );

    attachments.forEach((attachment) => {
      requestCredential.body.formats.push({
        attach_id: attachment.id,
        format: `${credentialFormat}`,
      });
    });

    return requestCredential;
  }
}
