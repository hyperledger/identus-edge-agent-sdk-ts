import { uuid } from "@stablelib/uuid";
import * as Domain from "../../../../domain";
import { Pollux } from "../../../types";
import { JWTCredential } from "../../../models/JWTVerifiableCredential";
import { Task } from "../../../../utils";
import { OEA } from "../types";
import { CreateJWT } from "../../../../edge-agent/didFunctions/CreateJwt";

interface Args {
  credential: Domain.Credential;
  privateKey: Domain.PrivateKey;
  presentationDefinition: OEA.PresentationExchangeDefinitionRequest;
}

export class CreatePresentationSubmission extends Pollux.CreatePresentationSubmission<Args> {
  async run(ctx: Task.Context) {
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
    const privateKey = this.args.privateKey;
    const { presentation_definition } = this.args.presentationDefinition;
    const inputDescriptors = presentation_definition.input_descriptors ?? [];

    // if (credential instanceof JWTCredential) {
    //   if (
    //     !this.isPresentationDefinitionRequestType(presentationDefinitionRequest, CredentialType.JWT)
    //   ) {
    //     throw new Error("PresentationDefinition didn't match credential type")
    //   }
    // } 

    if (!(credential instanceof JWTCredential)) {
      throw new Domain.PolluxError.InvalidCredentialError("Expected JWT Credential");
    }

    if (!credential.isProvable()) {
      throw new Domain.PolluxError.InvalidCredentialError("Cannot create proofs with this type of credential.");
    }

    if (!privateKey?.isSignable()) {
      throw new Domain.CastorError.InvalidKeyError("Cannot sign the proof challenge with this key.");
    }

    const descriptorItems = this.getDescriptorItems(inputDescriptors);
    // const disclosedFields = await this.revealCredentialFields(credential, ['subject', 'sub']);
    const disclosedFields = credential.claims.at(0);

    if (!disclosedFields) {
      throw new Error("no claims");
    }

    const subject = disclosedFields['subject'] || disclosedFields['sub'] || credential.subject;
    const issuerDID = Domain.DID.fromString(subject);
    const nbf = Date.now();

    const payload: Domain.JWT.Payload = {
      iss: subject,
      nbf: nbf,
      vp: credential.presentation(),
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


    // TODO these should be passed in
    // const kid = await this.getSigningKid(issuerDID, privateKey);

    // TODO dont import agent tasks - wont be needed if key + kid are args
    const jwtTask = new CreateJWT({
      payload,
      did: issuerDID,
      // TODO pass this param
      // privateKey
    });
    const jws = await ctx.run(jwtTask);
    // const jws = await Domain.JWT.sign(issuerDID, privateKey, payload, { kid });


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

  private getDescriptorItems(inputDescriptors: OEA.InputDescriptor[]) {
    return inputDescriptors.map(
      (inputDescriptor) => {
        if (inputDescriptor.format &&
          (!inputDescriptor.format.jwt || !inputDescriptor.format.jwt.alg) &&
          (!inputDescriptor.format.sdjwt || !inputDescriptor.format.sdjwt.alg)
        ) {
          throw new Domain.PolluxError.InvalidDescriptorFormatError();
        }

        return {
          id: inputDescriptor.id,
          format: 'jwt_vp',
          path: "$.verifiablePresentation[0]",
          path_nested: {
            id: inputDescriptor.id,
            format: 'jwt_vc',
            path: "$.vp.verifiableCredential[0]",
          }
        };
      });
  }
}
