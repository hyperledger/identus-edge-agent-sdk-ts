import { uuid } from "@stablelib/uuid";
import * as Domain from "../../../../domain";
import { Pollux } from "../../../types";
import { SDJWTCredential } from "../../../models/SDJWTVerifiableCredential";
import { SDJWTContext } from "./Plugin";
import { OEA } from "../types";

interface Args {
  credential: Domain.Credential;
  privateKey: Domain.PrivateKey;
  presentationDefinition: OEA.PresentationExchangeDefinitionRequest;
  presentationFrame?: Record<string, boolean>;
}

export class CreatePresentationSubmission extends Pollux.CreatePresentationSubmission<Args> {
  async run(ctx: SDJWTContext) {
    const credential = this.args.credential;
    const privateKey = this.args.privateKey;
    const presentationDefinition = this.args.presentationDefinition;
    const { presentation_definition } = presentationDefinition;
    const inputDescriptors = presentation_definition.input_descriptors ?? [];

    if (!(credential instanceof SDJWTCredential)) {
      throw new Domain.PolluxError.InvalidCredentialError("Expected JWT or SDJWT credential");
    }

    if (!this.validatePresentationRequest(presentationDefinition)) {
      throw new Error("PresentationDefinition didn't match credential type");
    }

    if (!credential.isProvable()) {
      throw new Domain.PolluxError.InvalidCredentialError("Cannot create proofs with this type of credential.");
    }
    if (!privateKey.isSignable()) {
      throw new Domain.CastorError.InvalidKeyError("Cannot sign the proof challenge with this key.");
    }

    const jws = await ctx.SDJWT.createPresentationFor({
      jws: credential.id,
      privateKey,
      presentationFrame: this.args.presentationFrame
    });

    const descriptorItems = this.getDescriptorItems(inputDescriptors);

    const presentationSubmission: OEA.PresentationSubmission = {
      presentation_submission: {
        id: uuid(),
        definition_id: presentation_definition.id,
        descriptor_map: descriptorItems
      },
      verifiablePresentation: [jws]
    };

    return presentationSubmission;
  }

  private validatePresentationRequest(request: any): request is OEA.PresentationExchangeDefinitionRequest {
    if (!request || !request.presentation_definition) {
      return false;
    }
    const [format] = Object.keys(request.presentation_definition.format);
    if (!format || ![OEA.SDJWT].includes(format)) {
      return false;
    }
    return true;
  }


  private getDescriptorItems(inputDescriptors: OEA.InputDescriptor[]) {
    return inputDescriptors.map(
      (inputDescriptor) => {
        if (inputDescriptor.format && (!inputDescriptor.format.sdjwt || !inputDescriptor.format.sdjwt.alg)) {
          throw new Domain.PolluxError.InvalidDescriptorFormatError();
        }

        return {
          format: OEA.SDJWT,
          id: inputDescriptor.id,
          path: "$.verifiablePresentation[0]",
        };
      });
  }
}
