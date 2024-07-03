import * as didJWT from "did-jwt";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";
import { JWTCore } from "./jwt/JWTCore";
import { JWTInstanceType, JWTSignOptions, JWTVerifyOptions } from "./jwt/types";
import { decodeJWS } from "./decodeJWS";
import { base64url } from "multiformats/bases/base64";
import { isNil } from "../../utils";

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

      const decoded = await this.decode(jws);
      const verified = verificationMethods.some(vm => {
        try {
          const pk = this.getPKInstance(vm);

          if (isNil(pk) || !pk.canVerify()) {
            throw new Error("Invalid key verification method type found");
          }

          const decodedSignature = base64url.baseDecode(decoded.signature);
          const passed = pk.verify(Buffer.from(decoded.data), Buffer.from(decodedSignature));
          return passed;
        }
        catch {
          return false;
        }
      });

      return verified;
    } catch {
      return false;
    }
  }

  async sign(
    options: JWTSignOptions<JWTInstanceType.JWT, any>
  ): Promise<string> {
    const { issuerDID, privateKey, payload } = options;
    if (!privateKey.isSignable()) {
      throw new Error("Key is not signable");
    }
    const { signAlg, signer } = this.getSKConfig(privateKey);
    const jwt = await didJWT.createJWT(
      payload,
      { issuer: issuerDID.toString(), signer },
      { alg: signAlg }
    );
    return jwt;
  }
}
