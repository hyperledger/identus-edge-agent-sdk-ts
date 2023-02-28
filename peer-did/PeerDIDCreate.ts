import {
  Curve,
  DID,
  KeyPair,
  Service as DIDDocumentService,
} from "../domain/models";
import { CastorError } from "../domain/models/Errors";
import { JWKHelper, VerificationMaterial } from "./helpers/JWKHelper";
import { MultiCodec } from "./helpers/Multicodec";
import { PeerDID, PeerDIDService } from "./PeerDID";
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

export class PeerDIDCreate {
  createPeerDID(keyPairs: KeyPair[], services: DIDDocumentService[]): PeerDID {
    const signingKeys = keyPairs
      .filter((keyPair) => keyPair.keyCurve.curve === Curve.ED25519)
      .map(this.authenticationFromKeyPair.bind(this));
    const encryptionKeys = keyPairs
      .filter((keyPair) => keyPair.keyCurve.curve === Curve.X25519)
      .map(this.keyAgreementFromKeyPair.bind(this));

    const encodedEncryptionKeysStr = encryptionKeys
      .map(this.createMultibaseEncnumbasis.bind(this))
      .map((value) => `.${Numalgo2Prefix.keyAgreement}${value}`);

    const encodedSigningKeysStr = signingKeys
      .map(this.createMultibaseEncnumbasis.bind(this))
      .map((value) => `.${Numalgo2Prefix.authentication}${value}`);

    const encodedService = this.encodeService(services);

    return new PeerDID(
      DID.fromString(
        `did:peer:2${encodedEncryptionKeysStr}${encodedSigningKeysStr}.${Numalgo2Prefix.service}${encodedService}`
      )
    );
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
    const peerDIDServices = services.map((service) =>
      new PeerDIDService(
        service.type[0],
        service.serviceEndpoint.uri,
        service.serviceEndpoint.routingKeys,
        service.serviceEndpoint.accept
      ).encode()
    );
    if (peerDIDServices.length === 1) {
      const peerDIDService = peerDIDServices[0];
      return Buffer.from(JSON.stringify(peerDIDService)).toString("base64url");
    }
    return Buffer.from(JSON.stringify(peerDIDServices)).toString("base64url");
  }

  private validateRawKeyLength(key: Uint8Array) {
    if (key.length !== 32) {
      throw new CastorError.InvalidKeyError();
    }
  }

  private keyAgreementFromKeyPair(
    keyPair: KeyPair
  ): VerificationMaterialAgreement {
    const octet = this.octetPublicKey(keyPair);
    if (keyPair.keyCurve.curve !== Curve.X25519) {
      throw new CastorError.InvalidPublicKeyEncoding();
    }
    return new VerificationMaterialAgreement(
      JSON.stringify(octet),
      VerificationMethodTypeAgreement.JSON_WEB_KEY_2020,
      VerificationMaterialFormatPeerDID.JWK
    );
  }

  private authenticationFromKeyPair(
    keyPair: KeyPair
  ): VerificationMaterialAuthentication {
    const octet = this.octetPublicKey(keyPair);
    if (keyPair.keyCurve.curve !== Curve.ED25519) {
      throw new CastorError.InvalidPublicKeyEncoding();
    }
    return new VerificationMaterialAuthentication(
      JSON.stringify(octet),
      VerificationMethodTypeAuthentication.JSON_WEB_KEY_2020,
      VerificationMaterialFormatPeerDID.JWK
    );
  }

  private octetPublicKey(keyPair: KeyPair): OctetPublicKey {
    return {
      crv: keyPair.keyCurve.curve,
      kty: "OKP",
      x: keyPair.publicKey.value,
    };
  }
}