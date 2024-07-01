import * as didJWT from "did-jwt";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";
import { JWTCore } from "./jwt/JWTCore";
import { JWTInstanceType, JWTSignOptions, JWTVerifyOptions } from "./jwt/types";
import { PublicKey } from "../../domain";
import { decodeJWS } from "./decodeJWS";
import { base64url } from "multiformats/bases/base64";

export class JWT extends JWTCore<JWTInstanceType.JWT> {
  public type = JWTInstanceType.JWT;

  async decode(jws: string) {
    return decodeJWS(jws);
  }

  async verify(
    options: JWTVerifyOptions<JWTInstanceType.JWT>
  ): Promise<boolean> {
    try {
      const { issuerDID, jws, holderDID } = options;
      const resolved = await this.resolve(issuerDID.toString());
      const verificationMethods = resolved.didDocument?.verificationMethod;
      if (!verificationMethods) {
        throw new Error("Invalid did document");
      }
      const jwtObject = JWTCredential.fromJWS(jws);
      if (jwtObject.issuer !== issuerDID.toString()) {
        throw new Error("Invalid issuer");
      }
      if (jwtObject.isCredential && holderDID && holderDID.toString() !== jwtObject.subject) {
        throw new Error("Invalid subject (holder)");
      }
      const { signature, data } = await this.decode(jws);
      for (const verificationMethod of verificationMethods) {
        const pk: PublicKey | undefined = this.getPKInstance(verificationMethod);
        if (!pk) {
          throw new Error("Invalid key verification method type found");
        }
        if (!pk.canVerify()) {
          throw new Error("Invalid key verification method type found");
        }
        const decodedSignature = base64url.baseDecode(signature);
        return pk.verify(
          Buffer.from(data), Buffer.from(decodedSignature)
        );
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  async sign(
    options: JWTSignOptions<JWTInstanceType.JWT, any>
  ): Promise<string> {
    const { issuerDID, privateKey, payload } = options;
    const headers = options.headers ?? {};

    if (!privateKey.isSignable()) {
      throw new Error("Key is not signable");
    }
    const { signAlg, signer } = this.getSKConfig(privateKey);
    const jwt = await didJWT.createJWT(
      payload,
      { issuer: issuerDID.toString(), signer },
      { alg: signAlg, ...headers }
    );
    return jwt;
  }
}
