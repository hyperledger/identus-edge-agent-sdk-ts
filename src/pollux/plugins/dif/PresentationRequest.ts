import { uuid } from "@stablelib/uuid";
import * as Domain from "../../../domain";
import { Pollux } from "../../PlugPol";
import { DIF } from "./types";
import { JWTCredential } from "../../models/JWTVerifiableCredential";
import { SDJWTCredential } from "../../models/SDJWTVerifiableCredential";
import { Payload } from "../../../domain/protocols/Payload";

// make a Presentation from a PresentationRequest

interface Args {
  credential: Domain.Credential;
  presentationRequest: DIF.Presentation.Request;
}

export class PresentationRequest extends Pollux.Task<Args> {
  async run(ctx: Pollux.Context) {
    // private async createJWTPresentationSubmission(
    //   presentationDefinitionRequest: any,
    //   credential: Credential,
    //   privateKey: PrivateKey,
    //   options?: {
    //     presentationFrame?: PresentationFrame<any>,
    //     domain?: string,
    //     challenge?: string
    //   }
    // ): Promise<PresentationSubmission<CredentialType.JWT | CredentialType.SDJWT>> {

    const credential = this.args.credential;
    const presentationRequest = this.args.presentationRequest;
    const presentationDefinition = presentationRequest.presentation_definition;
    const inputDescriptors = presentationDefinition.input_descriptors ?? [];

    // if (!(credential instanceof JWTCredential)) {
    //   throw new Domain.PolluxError.InvalidCredentialError("Expected JWT Credential");
    // }

    if (!credential.isProvable()) {
      throw new Domain.PolluxError.InvalidCredentialError("Cannot create proofs with this type of credential.");
    }

    const jws = await this.getJWS(ctx);

    const descriptorMap = inputDescriptors.map<DIF.Presentation.Submission.DescriptorItem>((inputDescriptor) => {
      // TODO map dependent on CredentialType

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
            // TODO is this path correct $ = root, should we be using @ for current
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

  private async getJWS(ctx: Pollux.Context) {
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
        // TODO not passed
        // presentationFrame: this.args.presentationFrame
      });
    }


    if (this.args.credential instanceof JWTCredential) {
      const nbf = Date.now();

      const payload: Domain.JWT.Payload = {
        // TODO replace presentation() with make a DIF presentation
        vp: this.args.credential.presentation(),
        iss: subject.toString(),
        nbf: nbf,
      };

      // TODO doesn't appear to be used
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
