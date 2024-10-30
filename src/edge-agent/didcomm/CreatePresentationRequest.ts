import { uuid } from "@stablelib/uuid";
import * as Domain from "../../domain";
import { validatePresentationClaims } from "../../pollux/utils/claims";
import { RequestPresentation } from "../protocols/proofPresentation";
import { CreatePeerDID } from "./CreatePeerDID";
import { Task } from "../../utils/tasks";
import { DIDCommContext } from "./Context";

interface Args {
  type: Domain.CredentialType;
  toDID: Domain.DID;
  claims: Domain.PresentationClaims<Domain.CredentialType>;
}

export class CreatePresentationRequest extends Task<RequestPresentation, Args> {
  async run(ctx: DIDCommContext) {
    const { claims, toDID, type } = this.args;
    const didDocument = await ctx.Castor.resolveDID(toDID.toString());
    const peerDIDTask = new CreatePeerDID({ services: didDocument.services, updateMediator: true });
    const newPeerDID = await ctx.run(peerDIDTask);
    if (type === Domain.CredentialType.AnonCreds) {
      if (!validatePresentationClaims(claims, Domain.CredentialType.AnonCreds)) {
        throw new Domain.PolluxError.InvalidPresentationDefinitionError("Anoncreds Claims are invalid");
      }

      const presentationDefinitionRequest = await ctx.Pollux.createPresentationDefinitionRequest(
        type,
        claims,
        new Domain.PresentationOptions({}, Domain.CredentialType.AnonCreds)
      );

      return this.createRequest(
        type,
        presentationDefinitionRequest,
        newPeerDID,
        toDID
      );
    }

    if (type === Domain.CredentialType.SDJWT) {
      if (!validatePresentationClaims(claims, Domain.CredentialType.SDJWT)) {
        throw new Domain.PolluxError.InvalidPresentationDefinitionError("SD+JWT Claims are invalid");
      }
      const presentationDefinitionRequest = await ctx.Pollux.createPresentationDefinitionRequest(
        type,
        claims,
        new Domain.PresentationOptions({
          sdjwt: {
            jwtAlg: [
              Domain.curveToAlg(Domain.Curve.SECP256K1)
            ]
          },
          challenge: "Sign this text " + uuid(),
          domain: 'N/A'
        }, type)
      );
      return this.createRequest(
        type,
        presentationDefinitionRequest,
        newPeerDID,
        toDID
      );
    }

    if (type === Domain.CredentialType.JWT) {
      if (!validatePresentationClaims(claims, Domain.CredentialType.JWT)) {
        throw new Domain.PolluxError.InvalidPresentationDefinitionError("JWT Claims are invalid");
      }

      const presentationDefinitionRequest = await ctx.Pollux.createPresentationDefinitionRequest(
        type,
        claims,
        new Domain.PresentationOptions({
          jwt: {
            jwtAlg: [Domain.curveToAlg(Domain.Curve.SECP256K1)]
          },
          challenge: "Sign this text " + uuid(),
          domain: 'N/A'
        }, type)
      );

      return this.createRequest(
        type,
        presentationDefinitionRequest,
        newPeerDID,
        toDID
      );
    }

    throw new Domain.PolluxError.CredentialTypeNotSupported();
  }

  private createRequest(
    type: Domain.CredentialType,
    definition: Domain.PresentationDefinitionRequest<any>,
    from: Domain.DID,
    to: Domain.DID
  ) {
    const attachmentFormat = type === Domain.CredentialType.JWT || type === Domain.CredentialType.SDJWT ?
      Domain.AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS :
      Domain.AttachmentFormats.ANONCREDS_PROOF_REQUEST;

    return new RequestPresentation(
      {
        proofTypes: [],
      },
      [
        Domain.AttachmentDescriptor.build(
          { json: definition },
          uuid(),
          'application/json',
          undefined,
          attachmentFormat
        )
      ],
      from,
      to,
      uuid()
    );
  }
}
