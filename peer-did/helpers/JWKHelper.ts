import { base64url } from "multiformats/bases/base64";

import { CastorError } from "../../domain/models/Errors";
import {
  VerificationMaterialAgreement,
  VerificationMaterialAuthentication,
  VerificationMethodTypeAgreement,
  VerificationMethodTypeAuthentication,
  VerificationMethodTypePeerDID,
} from "../types";

export type VerificationMaterial =
  | VerificationMaterialAgreement
  | VerificationMaterialAuthentication;

export class JWKHelper {
  static fromJWKAgreement(material: VerificationMaterialAgreement): Uint8Array {
    const jsonObject = JSON.parse(material.value);
    const crv = jsonObject.crv;
    const xKey = jsonObject.x;
    if (crv !== "X25519") {
      throw new CastorError.InvalidJWKKeysError();
    }
    //Assume we get base64 encoded strings, we add the u for base64url encoding
    return Buffer.from(
      base64url.decode(`u${Buffer.from(xKey.data).toString()}`)
    );
  }

  static fromJWKAuthentication(
    material: VerificationMaterialAuthentication
  ): Uint8Array {
    const jsonObject = JSON.parse(material.value);
    const crv = jsonObject.crv;
    const xKey = jsonObject.x;
    if (crv !== "Ed25519") {
      throw new CastorError.InvalidJWKKeysError();
    }
    return Buffer.from(
      base64url.decode(`u${Buffer.from(xKey.data).toString()}`)
    );
  }

  static toJWK(publicKey: Uint8Array, material: VerificationMethodTypePeerDID) {
    const xKeyString = base64url.encode(publicKey);
    let crv: string;
    if (material instanceof VerificationMethodTypeAgreement) {
      crv = "X25519";
    } else if (material instanceof VerificationMethodTypeAuthentication) {
      crv = "Ed25519";
    } else {
      throw new CastorError.InvalidJWKKeysError();
    }
    //base64Url is adding u as base64url multibase codec which we need to strip
    return JSON.stringify({
      crv: crv,
      kty: "OKP",
      x: {
        data: xKeyString.slice(1),
      },
    });
  }
}
