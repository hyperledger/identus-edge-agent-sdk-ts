import { base64url } from "multiformats/bases/base64";
import * as Domain from "../../../domain";
import { JWTCredential } from "../../models/JWTVerifiableCredential";
import { Task, isNil } from "../../../utils";
import { CreateJWT } from "./CreateJwt";
import { PKInstance } from "./PKInstance";
import { ResolveDID } from "./ResolveDID";


export class JWT extends Task.Runner {
  clone() {
    return new JWT();
  }

  async decode(jws: string) {
    return Domain.JWT.decode(jws);
  }

  /**
   * Creates a signed JWT from a DID and Key
   * 
   * @param issuer 
   * @param privateKey 
   * @param payload 
   * @returns 
   */
  signWithDID(
    did: Domain.DID,
    payload: Partial<Domain.JWT.Payload>,
    header?: Partial<Domain.JWT.Header>,
    privateKey?: Domain.PrivateKey
  ): Promise<string> {
    return this.runTask(new CreateJWT({ did, payload, header, privateKey }));
  }

  async verify(options: {
    jws: string;
    issuerDID: Domain.DID,
    holderDID?: Domain.DID,
  }): Promise<boolean> {
    try {
      const { issuerDID, jws, holderDID } = options;
      const resolved = await this.runTask(new ResolveDID({ did: issuerDID.toString() }));
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

      for (const vm of verificationMethods) {
        try {
          const pk = await this.runTask(new PKInstance({ verificationMethod: vm }));

          if (isNil(pk) || !pk.canVerify()) {
            throw new Error("Invalid key verification method type found");
          }

          const decodedSignature = base64url.baseDecode(decoded.signature);
          const passed = pk.verify(Buffer.from(decoded.data), Buffer.from(decodedSignature));

          if (passed === true) {
            return passed;
          }
        }
        catch {
          // return false;
        }
      }

      return false;
    } catch {
      return false;
    }
  }
}
