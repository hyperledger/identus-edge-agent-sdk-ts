import { uuid } from "@stablelib/uuid";
import * as Domain from "../../domain";
import { AnonCredsCredential } from "../../pollux/models/AnonCredsVerifiableCredential";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";
import { PresentationRequest } from "../../pollux/models/PresentationRequest";
import { SDJWTCredential } from "../../pollux/models/SDJWTVerifiableCredential";
import { Presentation, RequestPresentation } from "../protocols/proofPresentation";
import { DIDCommContext } from "./Context";
import { Task } from "../../utils/tasks";

/**
 * Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
 * This is used when the verified requests a specific verifiable credential, this will create the actual
 * instance of the presentation which we can share with the verifier.
 */

interface Args {
  credential: Domain.Credential;
  request: RequestPresentation;
}

export class CreatePresentation extends Task<Presentation, Args> {
  async run(ctx: DIDCommContext) {
    const { credential, request } = this.args;

    const attachment = request.attachments.at(0);
    if (!attachment) {
      throw new Domain.AgentError.OfferDoesntProvideEnoughInformation();
    }
    const attachmentFormat = attachment.format ?? 'unknown';
    const presentationRequest = this.parseProofRequest(attachment);
    const proof = attachmentFormat === Domain.AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS ?
      await this.handlePresentationDefinitionRequest(ctx, presentationRequest, credential) :
      await this.handlePresentationRequest(ctx, presentationRequest, credential);

    const mimeType = typeof proof !== 'string' ? 'application/json' : undefined
    const presentationAttachment = Domain.AttachmentDescriptor.build(
      proof,
      uuid(),
      mimeType,
      undefined,
      this.submissionFormat
    );

    const presentation = new Presentation(
      {
        comment: request.body.comment,
        goalCode: request.body.goalCode
      },
      [
        presentationAttachment,
      ],
      request.to,
      request.from,
      request.thid ?? request.id
    );

    return presentation;
  }

  get submissionFormat() {
    const { request, credential } = this.args;
    const attachment = request.attachments.at(0);
    if (!attachment) {
      throw new Domain.AgentError.OfferDoesntProvideEnoughInformation();
    }
    const attachmentFormat = attachment.format ?? 'unknown';
    if (attachmentFormat === Domain.AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS) {
      return Domain.AttachmentFormats.PRESENTATION_EXCHANGE_SUBMISSION
    }
    if (credential.credentialType === Domain.CredentialType.AnonCreds) {
      return Domain.AttachmentFormats.ANONCREDS_PROOF
    }
    if (credential.credentialType === Domain.CredentialType.JWT) {
      return Domain.AttachmentFormats.JWT
    }
    if (credential.credentialType === Domain.CredentialType.SDJWT) {
      return Domain.AttachmentFormats.SDJWT
    }
    return undefined
  }

  /**
   * match the Proof request to return relevant PresentationRequest.
   * Proof Request comes from a Message Attachment.
   * 
   * @param {AttachmentDescriptor} data - presentation proof request
   * @returns {PresentationRequest}
   * @throws
   */
  private parseProofRequest(attachment: Domain.AttachmentDescriptor) {
    const data = Domain.Message.Attachment.extractJSON(attachment);
    if (attachment.format === Domain.AttachmentFormats.ANONCREDS_PROOF_REQUEST) {
      return new PresentationRequest(Domain.AttachmentFormats.AnonCreds, data);
    }
    if (attachment.format === Domain.CredentialType.JWT) {
      return new PresentationRequest(Domain.AttachmentFormats.JWT, data);
    }
    if (attachment.format === Domain.CredentialType.SDJWT) {
      return new PresentationRequest(Domain.AttachmentFormats.SDJWT, data);
    }
    if (attachment.format === Domain.AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS) {
      return new PresentationRequest(Domain.AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS, data);
    }

    throw new Error("Unsupported Proof Request");
  }


  private async handlePresentationDefinitionRequest(
    ctx: DIDCommContext,
    request: PresentationRequest<any>,
    credential: Domain.Credential,
  ): Promise<string> {
    if (request.isType(Domain.AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS)) {
      if (credential instanceof JWTCredential) {
        if (!credential.isProvable()) {
          throw new Error("Credential is not Provable");
        }
        const privateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(Domain.DID.fromString(credential.subject));
        const privateKey = privateKeys.at(0);
        if (!privateKey) {
          throw new Error("Undefined privatekey from credential subject.");
        }
        if (!request.isType(Domain.AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS)) {
          throw new Error("Undefined privatekey from credential subject.");
        }
        const presentationSubmission = await ctx.Pollux.createPresentationSubmission(
          request.toJSON(),
          credential,
          privateKey
        );
        return JSON.stringify(presentationSubmission);
      }

      if (credential instanceof SDJWTCredential) {
        if (!credential.isProvable()) {
          throw new Error("Credential is not Provable");
        }
        const { sub } = await ctx.Pollux.revealCredentialFields(
          credential,
          ['subject', 'sub']
        )
        const privateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(Domain.DID.fromString(sub));
        const privateKey = privateKeys.at(0);
        if (!privateKey) {
          throw new Error("Undefined privatekey from credential subject.");
        }
        if (!request.isType(Domain.AttachmentFormats.PRESENTATION_EXCHANGE_DEFINITIONS)) {
          throw new Error("Undefined privatekey from credential subject.");
        }
        const presentationSubmission = await ctx.Pollux.createPresentationSubmission(
          request.toJSON(),
          credential,
          privateKey
        );
        return JSON.stringify(presentationSubmission);
      }

      if (credential instanceof AnonCredsCredential) {
        const storedLinkSecret = await ctx.Pluto.getLinkSecret();
        if (!storedLinkSecret) {
          throw new Error("Link secret not found.");
        }

        const req = request.toJSON();
        const presentationSubmission = await ctx.Pollux.createPresentationSubmission(
          req as any,
          credential,
          storedLinkSecret
        );
        return JSON.stringify(presentationSubmission);
      }
    }

    throw new Error("Not implemented");
  }

  private async handlePresentationRequest(
    ctx: DIDCommContext,
    request: PresentationRequest<any>,
    credential: Domain.Credential
  ): Promise<string> {
    if (credential instanceof SDJWTCredential && request.isType(Domain.AttachmentFormats.SDJWT)) {
      if (!credential.isProvable()) {
        throw new Error("Credential is not Provable");
      }
      const disclosed = await ctx.Pollux.revealCredentialFields(credential, ['subject', 'sub'])
      const subjectDID = Domain.DID.from(disclosed.sub);

      const prismPrivateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(subjectDID);
      const prismPrivateKey = prismPrivateKeys.find((key) => key.curve === Domain.Curve.ED25519);

      if (prismPrivateKey === undefined) {
        throw new Domain.AgentError.CannotFindDIDPrivateKey();
      }

      const signedJWT = await ctx.Pollux.createPresentationProof(request, credential, {
        did: subjectDID,
        privateKey: prismPrivateKey
      });

      return signedJWT;
    }

    if (credential instanceof AnonCredsCredential && request.isType(Domain.AttachmentFormats.AnonCreds)) {
      const linkSecret = await ctx.Pluto.getLinkSecret();
      if (!linkSecret) {
        throw new Domain.AgentError.CannotFindLinkSecret();
      }
      const presentation = await ctx.Pollux.createPresentationProof(request, credential, { linkSecret });
      return presentation;
    }

    if (credential instanceof JWTCredential && request.isType(Domain.AttachmentFormats.JWT)) {
      if (!credential.isProvable()) {
        throw new Error("Credential is not Provable");
      }
      const subjectDID = Domain.DID.from(credential.subject);
      const prismPrivateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(subjectDID);
      const prismPrivateKey = prismPrivateKeys.find((key) => key.curve === Domain.Curve.SECP256K1);
      if (prismPrivateKey === undefined) {
        throw new Domain.AgentError.CannotFindDIDPrivateKey();
      }
      const signedJWT = await ctx.Pollux.createPresentationProof(request, credential, {
        did: subjectDID,
        privateKey: prismPrivateKey
      });
      return signedJWT;
    }

    throw new Domain.AgentError.UnhandledPresentationRequest();
  }
}
