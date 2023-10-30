import * as base64 from "multiformats/bases/base64";

import { Curve, DID, Service as DIDDocumentService } from "../domain/models";

import { CastorError } from "../domain/models/Errors";
import { JWKHelper, VerificationMaterial } from "./helpers/JWKHelper";
import { MultiCodec } from "./helpers/Multicodec";
import { PeerDID, PeerDIDEncoded, PeerDIDService } from "./PeerDID";
import {
  Numalgo2Prefix,
  OctetPublicKey,
  VerificationMaterialAgreement,
  VerificationMaterialAuthentication,
  VerificationMaterialFormatPeerDID,
  VerificationMethodTypeAgreement,
  VerificationMethodTypeAuthentication,
} from "./types";

import { base58btc } from "multiformats/bases/base58";
import { Ed25519PublicKey } from "../apollo/utils/Ed25519PublicKey";
import { X25519PublicKey } from "../apollo/utils/X25519PublicKey";
import { KeyProperties } from "../domain/models/KeyProperties";
import { PublicKey } from "../domain/models";

/**
 * PeerDID Creation wrapper class
 *
 * @export
 * @class PeerDIDCreate
 * @typedef {PeerDIDCreate}
 */
export class PeerDIDCreate {
  /**
   * Creates an instance of a PeerDID by providing a valid set of KeyPairs and DIDDocumentServices[]
   *
   * @param {PublicKey[]} publicKeys
   * @param {DIDDocumentService[]} services
   * @returns {PeerDID}
   */
  createPeerDID(
    publicKeys: PublicKey[],
    services: DIDDocumentService[]
  ): PeerDID {
    const { signingKeys, encryptionKeys } = publicKeys.reduce(
      ({ signingKeys, encryptionKeys }, publicKey) => {
        if (publicKey.isCurve<Ed25519PublicKey>(Curve.ED25519)) {
          return {
            signingKeys: [...signingKeys, publicKey],
            encryptionKeys,
          };
        }

        if (publicKey.isCurve<X25519PublicKey>(Curve.X25519)) {
          return {
            signingKeys,
            encryptionKeys: [...encryptionKeys, publicKey],
          };
        }

        return {
          signingKeys,
          encryptionKeys,
        };
      },
      { signingKeys: [], encryptionKeys: [] } as {
        signingKeys: Ed25519PublicKey[];
        encryptionKeys: X25519PublicKey[];
      }
    );

    const encodedEncryptionKeysStr = encryptionKeys
      .map(this.keyAgreementFromPublicKey.bind(this))
      .map(this.createMultibaseEncnumbasis.bind(this))
      .map((value) => `.${Numalgo2Prefix.keyAgreement}${value}`);

    const encodedSigningKeysStr = signingKeys
      .map(this.authenticationFromPublicKey.bind(this))
      .map(this.createMultibaseEncnumbasis.bind(this))
      .map((value) => `.${Numalgo2Prefix.authentication}${value}`);

    const encodedService = this.encodeService(services);

    return new PeerDID(
      DID.fromString(
        `did:peer:2${encodedEncryptionKeysStr}${encodedSigningKeysStr}.${Numalgo2Prefix.service}${encodedService}`
      )
    );
  }

  /**
   * Computes Encnumbasis from a valid did and its keyPair
   *
   * @param {DID} did
   * @param {PublicKey} publicKey
   * @returns {string}
   */
  computeEncnumbasis(did: DID, publicKey: PublicKey): string {
    let material:
      | VerificationMaterialAgreement
      | VerificationMaterialAuthentication;
    let multibaseEcnumbasis: string;

    switch (publicKey.getProperty(KeyProperties.curve)) {
      case Curve.X25519:
        material = this.keyAgreementFromPublicKey(publicKey);
        multibaseEcnumbasis = this.createMultibaseEncnumbasis(material);
        return multibaseEcnumbasis.slice(1);
      case Curve.ED25519:
        material = this.authenticationFromPublicKey(publicKey);
        multibaseEcnumbasis = this.createMultibaseEncnumbasis(material);
        return multibaseEcnumbasis.slice(1);
      default:
        //TODO: Improve this error handling
        throw new Error("computeEncnumbasis -> InvalidKeyPair Curve");
    }
  }

  private createMultibaseEncnumbasis(material: VerificationMaterial): string {
    if (material.format !== VerificationMaterialFormatPeerDID.JWK) {
      throw new CastorError.InvalidKeyError();
    }
    const isVerificationMaterialAgreement =
      material instanceof VerificationMaterialAgreement;

    const decodedKey = isVerificationMaterialAgreement
      ? JWKHelper.fromJWKAgreement(material)
      : JWKHelper.fromJWKAuthentication(material);

    this.validateRawKeyLength(decodedKey);

    const multiCodec = new MultiCodec(
      decodedKey,
      isVerificationMaterialAgreement
        ? MultiCodec.KeyType.agreement
        : MultiCodec.KeyType.authenticate
    );

    return base58btc.encode(multiCodec.value);
  }

  private encodeService(services: DIDDocumentService[]): string {
    const peerDIDServices = services.reduce<PeerDIDEncoded[]>(
      (acc, service) => {
        const type = service.type.at(0);

        if (type === undefined) return acc;

        const encoded = new PeerDIDService(
          type,
          service.serviceEndpoint.uri,
          service.serviceEndpoint.routingKeys,
          service.serviceEndpoint.accept
        ).encode();

        return acc.concat(encoded);
      },
      []
    );

    if (peerDIDServices.length === 1) {
      const peerDIDService = peerDIDServices.at(0);

      return base64.base64url.baseEncode(
        Buffer.from(JSON.stringify(peerDIDService))
      );
    }

    return base64.base64url.baseEncode(
      Buffer.from(JSON.stringify(peerDIDServices))
    );
  }

  private validateRawKeyLength(key: Uint8Array) {
    if (key.length !== 32) {
      throw new CastorError.InvalidKeyError();
    }
  }

  private keyAgreementFromPublicKey(
    publicKey: PublicKey
  ): VerificationMaterialAgreement {
    const octet = this.octetPublicKey(publicKey);
    const curve = publicKey.getProperty(KeyProperties.curve);
    if (curve !== Curve.X25519) {
      throw new CastorError.InvalidPublicKeyEncoding();
    }
    return new VerificationMaterialAgreement(
      JSON.stringify(octet),
      VerificationMethodTypeAgreement.JSON_WEB_KEY_2020,
      VerificationMaterialFormatPeerDID.JWK
    );
  }

  private authenticationFromPublicKey(
    publicKey: PublicKey
  ): VerificationMaterialAuthentication {
    const octet = this.octetPublicKey(publicKey);
    const curve = publicKey.getProperty(KeyProperties.curve);
    if (curve !== Curve.ED25519) {
      throw new CastorError.InvalidPublicKeyEncoding();
    }
    return new VerificationMaterialAuthentication(
      JSON.stringify(octet),
      VerificationMethodTypeAuthentication.JSON_WEB_KEY_2020,
      VerificationMaterialFormatPeerDID.JWK
    );
  }

  private octetPublicKey(publicKey: PublicKey): OctetPublicKey {
    const curve = publicKey.getProperty(KeyProperties.curve);
    if (!curve) {
      throw new CastorError.InvalidKeyError();
    }
    const octet: OctetPublicKey = {
      crv: curve,
      kty: "OKP",
      x: Buffer.from(publicKey.getEncoded()).toString(),
    };
    return octet;
  }
}
