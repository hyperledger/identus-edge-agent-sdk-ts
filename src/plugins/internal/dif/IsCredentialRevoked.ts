import { ungzip } from 'pako';
import { base64, base64url } from "multiformats/bases/base64";
import * as  jsonld from 'jsonld';
import { JsonLd, RemoteDocument } from "jsonld/jsonld-spec";
import * as Domain from "../../../domain";
import { revocationJsonldDocuments } from "../../../domain/models/revocation";
import { isObject } from "../../../utils";
import { JWTCredential } from "../../../pollux/models/JWTVerifiableCredential";
import { Bitstring } from "../../../pollux/utils/Bitstring";
import type { Context } from "./index";
// ?? dont import from Castor, lift to domain?
import { VerificationKeyType } from "../../../castor/types";
import { Plugins } from '../../types';
import { Payload } from '../../../domain/protocols/Payload';


export enum JWTRevocationStatusPurpose {
  Revocation = "Revocation",
  Suspension = 'Suspension'
}

export interface JWTRevocationStatus {
  id: string;
  type: string;
  statusPurpose: JWTRevocationStatusPurpose;
  statusListIndex: number;
  statusListCredential: string;
}

export enum JWTProofType {
  EcdsaSecp256k1Signature2019 = "EcdsaSecp256k1Signature2019",
  DataIntegrityProof = "DataIntegrityProof",
  Unknown = "Unknown"
}

export enum JWTProofPurpose {
  ProofPurpose = 'assertionMethod'
}

export interface JWTStatusListResponse {
  "@context": string[],
  type: string[],
  issuer: string,
  id: string,
  issuanceDate: string,
  credentialSubject: {
    id: string,
    type: string,
    statusPurpose: string,
    encodedList: string;
  },
  proof: {
    type: JWTProofType,
    jws: string,
    proofPurpose: JWTProofPurpose,
    verificationMethod: string,
    created: string,
    proofValue: string,
    cryptoSuite: string;
  };
}

interface Args {
  credential: JWTCredential;
}

export class IsCredentialRevoked extends Plugins.Task<Args> {
  async run(ctx: Context) {
    const credential = this.args.credential;

    if (credential instanceof JWTCredential) {
      if (!this.extractVerificationStatusFromCredential(credential.credentialStatus)) {
        if (credential.credentialStatus) {
          throw new Domain.PolluxError.CredentialRevocationTypeInvalid(
            `CredentialStatus revocation type not supported`
          );
        }
        // Credential is non revocable
        return Payload.make("isCredentialRevoked", false);
      }

      const revocationStatus = credential.credentialStatus;
      const response = await this.fetchRevocationRegistry(ctx, revocationStatus);

      if (!this.extractVerificationStatusFromResponse(response.credentialSubject)) {
        throw new Domain.PolluxError.CredentialRevocationTypeInvalid(
          `CredentialStatus response revocation type not supported`
        );
      }
      const result = await this.verifyRevocationProof(ctx, response, revocationStatus.statusListIndex);
      return Payload.make("isCredentialRevoked", result);
    }

    throw new Domain.PolluxError.CredentialRevocationTypeInvalid("Only JWT Credential are supported");
  }

  private extractVerificationStatusFromCredential(credentialStatus: unknown): credentialStatus is JWTRevocationStatus {
    return isObject(credentialStatus) && credentialStatus.type === 'StatusList2021Entry';
  }

  private async fetchRevocationRegistry(ctx: Context, revocationStatus: JWTRevocationStatus) {
    const response = await ctx.Api.request("GET", revocationStatus.statusListCredential);

    if (response.httpStatus !== 200) {
      throw new Domain.PolluxError.InvalidRevocationStatusResponse(`CredentialStatus response status code ${response.httpStatus}`);
    }

    // ?? validate JWTStatusListResponse body
    return response.body as JWTStatusListResponse;
  }

  private extractVerificationStatusFromResponse(response: unknown) {
    return isObject(response) && response.type === 'StatusList2021';
  }

  private async verifyRevocationProof(
    ctx: Context,
    revocation: JWTStatusListResponse,
    statusListIndex: number
  ): Promise<boolean> {
    try {
      const proofObject = revocation.proof ?? {};
      const { verificationMethod } = proofObject;
      const proofType = proofObject.type;
      const base64VerificationMethod = verificationMethod.split(",").at(1);

      if (!base64VerificationMethod) {
        throw new Domain.PolluxError.InvalidRevocationStatusResponse(`CredentialStatus proof invalid verificationMethod`);
      }

      const decodedVerificationMethodBuffer = base64.baseDecode(base64VerificationMethod);
      const decodedVerificationValue = Buffer.from(decodedVerificationMethodBuffer).toString();
      const decodedVerificationMethod = JSON.parse(decodedVerificationValue);

      if (proofType === JWTProofType.EcdsaSecp256k1Signature2019) {
        const { publicKeyJwk } = decodedVerificationMethod;
        const verificationMethodType = decodedVerificationMethod.type;
        if (!publicKeyJwk) {
          throw new Domain.PolluxError.InvalidCredentialStatus("No public jwk provided");
        }
        if (verificationMethodType !== VerificationKeyType.EcdsaSecp256k1VerificationKey2019) {
          throw new Domain.PolluxError.InvalidCredentialStatus(`Only ${VerificationKeyType.EcdsaSecp256k1VerificationKey2019} is supported`);
        }
        const curve = decodedVerificationMethod.publicKeyJwk.crv;
        const kty = decodedVerificationMethod.publicKeyJwk.kty;
        if (kty !== Domain.KeyTypes.EC) {
          throw new Domain.PolluxError.RevocationError(`Invalid JWK kty: ${kty}, should be ${Domain.KeyTypes.EC}`);
        }
        if (curve !== Domain.Curve.SECP256K1.toLocaleLowerCase()) {
          throw new Domain.PolluxError.RevocationError(`Invalid JWK crv: ${curve}, should be ${Domain.Curve.SECP256K1.toLocaleLowerCase()}`);
        }
        const { x, y } = decodedVerificationMethod.publicKeyJwk;
        const pk = ctx.Apollo.createPublicKey({
          [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
          [Domain.KeyProperties.curvePointX]: Buffer.from(base64url.baseDecode(x)),
          [Domain.KeyProperties.curvePointY]: Buffer.from(base64url.baseDecode(y))
        });

        if (!pk.canVerify()) {
          throw new Domain.PolluxError.InvalidRevocationStatusResponse(`CredentialStatus proof invalid verifying key`);
        }

        const jwsArray = proofObject.jws.split(".");
        if (jwsArray.length !== 3) {
          throw new Domain.PolluxError.InvalidJWTString("Credential status jwt is invalid");
        }

        const { proof, ...cleanedPayload } = revocation;
        const payload = { ...cleanedPayload };
        const encoded = await this.encode(ctx, payload);
        const signature = Buffer.from(base64url.baseDecode(jwsArray[2]));
        const signaturePayload = Buffer.from(`${jwsArray[0]}.${encoded.toString()}`);
        const isSignatureValid = pk.verify(signaturePayload, signature);

        if (!isSignatureValid) {
          throw new Domain.PolluxError.InvalidRevocationStatusResponse(`CredentialStatus invalid signature`);
        }

        const statusListDecoded = this.extractEncodedList(revocation);
        const bitstring = new Bitstring({ buffer: statusListDecoded });
        return bitstring.get(statusListIndex);
      }
      throw new Domain.PolluxError.InvalidRevocationStatusResponse(`CredentialStatus proof type not supported`);
    } catch (err) {
      if (err instanceof Domain.PolluxError.InvalidRevocationStatusResponse) {
        throw err;
      } else {
        throw new Domain.PolluxError.InvalidRevocationStatusResponse(`Err ${(err as Error).message}`);
      }
    }
  }

  private async encode(ctx: Context, data: any) {
    const customLoader = async (url: string) => {
      const cached = revocationJsonldDocuments[url as keyof typeof revocationJsonldDocuments];
      if (cached) {
        const doc: RemoteDocument = {
          documentUrl: url,
          document: cached as any
        };
        return doc;
      }
      // The above ignores are justified because we are mocking the API calls
      // And always using the catched jsonLD documents for statusProof..
      // istanbul ignore next
      const response = await ctx.Api.request<JsonLd>("GET", url);
      const doc: RemoteDocument = {
        documentUrl: url,
        document: response.body
      };
      // istanbul ignore next
      return doc;
    };

    const canonised = await jsonld.canonize(data, {
      algorithm: 'URDNA2015',
      format: 'application/n-quads',
      documentLoader: customLoader,
    });

    return Buffer.from(canonised);
  }

  private extractEncodedList(body: JWTStatusListResponse): Uint8Array {
    try {
      const encodedList = Buffer.from(body.credentialSubject.encodedList, 'base64');
      return ungzip(Uint8Array.from(encodedList));
    } catch (err) {
      throw new Domain.PolluxError.InvalidRevocationStatusResponse(`Couldn't ungzip base64 encoded list, err: ${(err as Error).message}`);
    }
  }
}
