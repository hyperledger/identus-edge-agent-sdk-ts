import { CastorError } from "../../domain/models/Errors";
import { MultiCodec, Codec } from "../../peer-did/helpers/Multicodec";
import { PeerDIDService } from "../../peer-did/PeerDID";
import {
  VerificationMaterialFormatPeerDID,
  VerificationMaterialAuthentication,
  VerificationMaterialAgreement,
  VerificationMaterialPeerDID,
  VerificationMethodTypeAgreement,
  VerificationMethodTypeAuthentication,
  Numalgo2Prefix,
} from "../../peer-did/types";
import { base58btc } from "multiformats/bases/base58";

import {
  DID,
  DIDDocument,
  DIDResolver,
  VerificationMethod,
  Service as DIDDocumentService,
  DIDUrl,
  ServiceEndpoint,
  VerificationMethods,
  Authentication as DIDDocumentAuthentication,
  KeyAgreement as DIDDocumentKeyAgreement,
  Services as DIDDocumentServices,
} from "../../domain/models";
import { JWKHelper } from "../../peer-did/helpers/JWKHelper";
import * as base64 from "multiformats/bases/base64";

export class PeerDIDResolver implements DIDResolver {
  method = "peer";

  async resolve(didString: string): Promise<DIDDocument> {
    const did = DID.fromString(didString);
    if (did.method !== "peer" || did.methodId.slice(0, 1) !== "2") {
      throw new CastorError.NotPossibleToResolveDID();
    }
    return this.buildDIDDocumentAlgo2(
      did,
      VerificationMaterialFormatPeerDID.JWK
    );
  }

  private buildDIDDocumentAlgo2(
    did: DID,
    format: VerificationMaterialFormatPeerDID
  ): DIDDocument {
    const composition = did.methodId.split(".").slice(1);
    const authenticationMethods: VerificationMethod[] = [];
    const keyAgreementMethods: VerificationMethod[] = [];
    const services: DIDDocumentService[] = [];

    composition.forEach((part, index) => {
      let decoded: [
        string,
        VerificationMaterialAuthentication | VerificationMaterialAgreement,
      ];
      const type = part.slice(0, 1);

      switch (type) {
        case Numalgo2Prefix.authentication:
          decoded = this.decodeMultibaseEncnumbasisAuth(part.slice(1), format);
          authenticationMethods.push(this.getVerificationMethod(did, decoded, index));
          break;
        case Numalgo2Prefix.keyAgreement:
          decoded = this.decodeMultibaseEcnumbasisAgreement(
            part.slice(1),
            format
          );
          keyAgreementMethods.push(this.getVerificationMethod(did, decoded, index));
          break;
        case Numalgo2Prefix.service:
          services.push(...this.decodeService(did, part.slice(1)));
      }
    });
    return new DIDDocument(did, [
      new VerificationMethods([
        ...authenticationMethods,
        ...keyAgreementMethods,
      ]),
      new DIDDocumentAuthentication(
        authenticationMethods.map(({ id }) => id),
        authenticationMethods
      ),
      new DIDDocumentKeyAgreement(
        keyAgreementMethods.map(({ id }) => id),
        keyAgreementMethods
      ),
      new DIDDocumentServices(services),
    ]);
  }

  public decodeMultibaseEncnumbasisAuth(
    multibase: string,
    format: VerificationMaterialFormatPeerDID
  ): [string, VerificationMaterialAuthentication] {
    const [decoded, verMaterial] = this.decodeMultibaseEncnumbasis(
      multibase,
      format,
      Codec.ed25519
    );

    if (
      !(verMaterial instanceof VerificationMaterialAuthentication) ||
      !verMaterial.authentication
    ) {
      throw new CastorError.NotPossibleToResolveDID();
    }

    return [decoded, verMaterial.authentication];
  }

  public decodeMultibaseEcnumbasisAgreement(
    multibase: string,
    format: VerificationMaterialFormatPeerDID
  ): [string, VerificationMaterialAgreement] {
    const [decoded, verMaterial] = this.decodeMultibaseEncnumbasis(
      multibase,
      format,
      Codec.x25519
    );

    if (
      !(verMaterial instanceof VerificationMaterialAgreement) ||
      !verMaterial.agreement
    ) {
      throw new CastorError.NotPossibleToResolveDID();
    }

    return [decoded, verMaterial.agreement];
  }

  public decodeMultibaseEncnumbasis(
    multibase: string,
    format: VerificationMaterialFormatPeerDID,
    defaultCodec: Codec
  ): [string, VerificationMaterialPeerDID] {
    const [encnum, encnumData] = this.fromBase58Multibase(multibase);
    const [codec, decodedEncnum] = new MultiCodec(encnumData).decode(
      defaultCodec
    );

    this.validateRawKeyLength(decodedEncnum);
    if (format !== VerificationMaterialFormatPeerDID.JWK) {
      throw new Error("Not implemented");
    }
    if (codec === Codec.x25519) {
      try {
        const jwkJsonString = JWKHelper.toJWK(
          decodedEncnum,
          VerificationMethodTypeAgreement.JSON_WEB_KEY_2020
        );

        return [
          encnum,
          new VerificationMaterialAgreement(
            jwkJsonString,
            VerificationMethodTypeAgreement.JSON_WEB_KEY_2020,
            format
          ),
        ];
      } catch (err) {
        throw new CastorError.InvalidJWKKeysError();
      }
    } else if (codec === Codec.ed25519) {
      try {
        const jwkJsonString = JWKHelper.toJWK(
          decodedEncnum,
          VerificationMethodTypeAuthentication.JSON_WEB_KEY_2020
        );

        return [
          encnum,
          new VerificationMaterialAuthentication(
            jwkJsonString,
            VerificationMethodTypeAuthentication.JSON_WEB_KEY_2020,
            format
          ),
        ];
      } catch (err) {
        throw new CastorError.InvalidJWKKeysError();
      }
    }

    throw new Error("Not implemented");
  }

  public fromBase58Multibase(multibase: string): [string, Uint8Array] {
    const multibaseDecoded = base58btc.decode(multibase);
    return [multibase.slice(1), multibaseDecoded];
  }

  public getVerificationMethod(
    did: DID,
    decodedEncnumbasis: [string, VerificationMaterialPeerDID],
    index: number
  ): VerificationMethod {
    const jsonObject = JSON.parse(decodedEncnumbasis[1].value);
    const keyId = "key-" + (index + 1)

    // jsonObject["kid"] = did.toString() + "#" + decodedEncnumbasis[0]; //Before https://github.com/decentralized-identity/peer-did-method-spec/pull/62
    jsonObject["kid"] = did.toString() + "#" + keyId;

    return {
      id: new DIDUrl(did, [], new Map(), keyId).string(),
      controller: did.toString(),
      type: decodedEncnumbasis[1].keyType.value,
      publicKeyJwk: jsonObject,
    };
  }

  public decodeService(did: DID, encodedString: string): DIDDocumentService[] {
    let jsonData: Buffer;
    try {
      const base64State = base64.base64url.decode(`u${encodedString}`);

      jsonData = Buffer.from(base64State);

      const serviceList = JSON.parse(jsonData.toString());
      const services = (
        Array.isArray(serviceList) ? serviceList : [serviceList]
      ).map((service) => PeerDIDService.decode(service));

      const didcommServices = services.map((service, offset) => {
        return new DIDDocumentService(
          did.toString() + "#" + service.type + "-" + offset,
          [service.type],
          new ServiceEndpoint(
            service.serviceEndpoint,
            service.accept,
            service.routingKeys
          )
        );
      });
      return didcommServices;
    } catch (e) {
      throw new CastorError.NotPossibleToResolveDID();
    }
  }

  public validateRawKeyLength(key: Uint8Array) {
    if (key.length !== 32) {
      throw new CastorError.InvalidKeyError();
    }
  }
}
