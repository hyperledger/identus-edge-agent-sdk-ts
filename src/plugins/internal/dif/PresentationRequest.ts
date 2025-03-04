import { uuid } from "@stablelib/uuid";
import * as Domain from "../../../domain";
import { JWTCredential } from "../../../pollux/models/JWTVerifiableCredential";
import { SDJWTCredential } from "../../../pollux/models/SDJWTVerifiableCredential";
import { Payload } from "../../../domain/protocols/Payload";
import { DIF } from "./types";
import type { Context } from "./index";
import { Plugins } from "../../../plugins";

// make a Presentation from a PresentationRequest

interface Args {
  credential: Domain.Credential;
  presentationRequest: DIF.Presentation.Request;
}

export class PresentationRequest extends Plugins.Task<Args> {
  async run(ctx: Context) {
    const credential = this.args.credential;
    const presentationRequest = this.args.presentationRequest;
    const presentationDefinition = presentationRequest.presentation_definition;
    const inputDescriptors = presentationDefinition.input_descriptors ?? [];

    if (!credential.isProvable()) {
      throw new Domain.PolluxError.InvalidCredentialError("Cannot create proofs with this type of credential.");
    }

    const jws = await this.getJWS(ctx);

    const descriptorMap = inputDescriptors.map<DIF.Presentation.Submission.DescriptorItem>((inputDescriptor) => {
      if (credential instanceof SDJWTCredential) {
        return {
          format: "sdjwt" as any,
          id: inputDescriptor.id,
          path: "$.verifiablePresentation[0]",
        };
      }

      if (credential instanceof JWTCredential) {
        return {
          id: inputDescriptor.id,
          format: "jwt_vp",
          path: "$.verifiablePresentation[0]",
          path_nested: {
            id: inputDescriptor.id,
            format: 'jwt_vc',
            path: "$.vp.verifiableCredential[0]",
          }
        };
      }

      throw new Error("unhandled credential type");
    });

    const presentationSubmission: DIF.Presentation.Submission = {
      id: uuid(),
      definition_id: presentationDefinition.id,
      descriptor_map: descriptorMap
    };

    const presentation: DIF.EmbedTarget = {
      presentation_submission: presentationSubmission,
      verifiablePresentation: [jws]
    };

    return Payload.make(DIF.PRESENTATION, presentation);
  }

  private async getJWS(ctx: Context) {
    const subject = Domain.DID.from(this.args.credential.subject);
    const privateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(subject);
    const privateKey = privateKeys.at(0);

    if (!privateKey?.isSignable()) {
      throw new Domain.CastorError.InvalidKeyError("Cannot sign the proof challenge with this key.");
    }

    if (this.args.credential instanceof SDJWTCredential) {
      return ctx.SDJWT.createPresentationFor({
        jws: this.args.credential.id,
        privateKey,
        // [ ] https://github.com/hyperledger-identus/sdk-ts/issues/362
        // feature presentationFrame / frame
        // presentationFrame: this.args.presentationFrame
      });
    }


    if (this.args.credential instanceof JWTCredential) {
      const nbf = Date.now();

      const payload: Domain.JWT.Payload = {
        // ?? replace presentation() with make a DIF presentation
        vp: this.args.credential.presentation(),
        iss: subject.toString(),
        nbf: nbf,
      };

      // [ ] https://github.com/hyperledger-identus/sdk-ts/issues/367
      // handle challenge, domain and nonce according to spec https://identity.foundation/presentation-exchange/
      // const challenge = options && "challenge" in options && options?.challenge;
      // const domain = options && "domain" in options && options?.domain;

      // if (domain && typeof domain === "string") {
      //   payload.aud = domain;
      // }

      // if (challenge && typeof challenge === "string") {
      //   payload.nonce = challenge;
      // }

      return ctx.JWT.signWithDID(subject, payload);
    }

    throw new Error("unhandled");
  }
}
