import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";
import { JWTCore } from "./jwt/JWTCore";
import { base64url } from "multiformats/bases/base64";
import { JsonObj, isNil } from "../../utils";
import * as Domain from "../../domain";

export class JWT extends JWTCore {
  async decode(jws: string) {
    return Domain.JWT.decode(jws);
  }

  async sign(options: {
    issuerDID: Domain.DID,
    privateKey: Domain.PrivateKey,
    payload: Partial<Domain.JWT.Payload>,
    header?: JsonObj,
  }): Promise<string> {
    const { issuerDID, privateKey, payload, header } = options;
    return Domain.JWT.sign(issuerDID, privateKey, payload, header);
  }

  async verify(options: {
    jws: string;
    issuerDID: Domain.DID,
    holderDID?: Domain.DID,
  }): Promise<boolean> {
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
}
