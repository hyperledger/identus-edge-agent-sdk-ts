import * as didJWT from "did-jwt";
import * as didResolver from "did-resolver";

import { Castor } from "../../domain/buildingBlocks/Castor";
import {
  AlsoKnownAs,
  Controller,
  Services,
  VerificationMethods,
  DID,
  PrivateKey,
  Curve,
  PolluxError,
} from "../../domain";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";

export class JWT {
  private castor: Castor;

  constructor(castor: Castor) {
    this.castor = castor;
  }

  async verify(
    options: {
      issuerDID: DID,
      holderDID?: DID,
      jws: string
    }
  ): Promise<boolean> {
    try {
      const { issuerDID, jws, holderDID } = options;
      const resolved = await this.resolve(issuerDID.toString());
      const verificationMethod = resolved.didDocument?.verificationMethod;
      if (!verificationMethod) {
        throw new Error("Invalid did document");
      }

      const validVerificationMethod = didJWT.verifyJWS(jws, verificationMethod);
      const jwtObject = JWTCredential.fromJWS(jws);

      if (jwtObject.issuer !== issuerDID.toString()) {
        throw new Error("Invalid issuer");
      }

      if (jwtObject.isCredential && holderDID && holderDID.toString() !== jwtObject.subject) {
        throw new Error("Invalid subject (holder)");
      }

      return true;
    } catch (err) {
      return false;
    }
  }

  public async resolve(did: string): Promise<didResolver.DIDResolutionResult> {
    const resolved = await this.castor.resolveDID(did);
    const alsoKnownAs = resolved.coreProperties.find(
      (prop): prop is AlsoKnownAs => prop instanceof AlsoKnownAs
    );
    const controller = resolved.coreProperties.find(
      (prop): prop is Controller => prop instanceof Controller
    );
    const verificationMethods = resolved.coreProperties.find(
      (prop): prop is VerificationMethods => prop instanceof VerificationMethods
    );
    const service = resolved.coreProperties.find(
      (prop): prop is Services => prop instanceof Services
    );
    return {
      didResolutionMetadata: { contentType: "application/did+ld+json" },
      didDocumentMetadata: {},
      didDocument: {
        id: resolved.id.toString(),
        alsoKnownAs: alsoKnownAs && alsoKnownAs.values,
        controller:
          controller && controller.values
            ? controller.values.map((v) => v.toString())
            : [],
        verificationMethod:
          verificationMethods && verificationMethods.values
            ? verificationMethods.values.map((vm) => {
              if (vm.publicKeyMultibase) {
                return {
                  id: vm.id,
                  type: "EcdsaSecp256k1VerificationKey2019",
                  controller: vm.controller,
                  publicKeyMultibase: vm.publicKeyMultibase,
                };
              }
              if (vm.publicKeyJwk) {
                return {
                  id: vm.id,
                  type: "JsonWebKey2020",
                  controller: vm.controller,
                  publicKeyJwk: vm.publicKeyJwk,
                };
              }
              throw new Error("Invalid KeyType");
            })
            : [],
        service:
          service?.values?.reduce<didResolver.Service[]>((acc, service) => {
            const type = service.type.at(0);
            if (type === undefined) return acc;
            return acc.concat({
              id: service.id,
              type: type,
              serviceEndpoint: service.serviceEndpoint,
            });
          }, []) ?? [],
      },
    };
  }

  private getPrivateKeyAlgo(privateKey: PrivateKey): { alg: string, signer: didJWT.Signer } {
    if (privateKey.curve === Curve.SECP256K1) {
      return {
        alg: 'ES256K',
        signer: didJWT.ES256KSigner(privateKey.raw)
      };
    }
    if (privateKey.curve === Curve.ED25519) {
      return {
        alg: 'EdDSA',
        signer: didJWT.EdDSASigner(privateKey.raw)
      };
    }
    /* istanbul ignore next */
    throw new PolluxError.InvalidCredentialError(`Unsupported key type ${privateKey.curve}`)
  }

  async sign(
    options: {
      issuerDID: DID,
      privateKey: PrivateKey,
      payload: Partial<didJWT.JWTPayload>
    }
  ): Promise<string> {
    const { issuerDID, privateKey, payload } = options;
    if (!privateKey.isSignable()) {
      throw new Error("Key is not signable");
    }
    const { alg, signer } = this.getPrivateKeyAlgo(privateKey);
    const jwt = await didJWT.createJWT(
      payload,
      { issuer: issuerDID.toString(), signer },
      { alg }
    );
    return jwt;
  }
}
