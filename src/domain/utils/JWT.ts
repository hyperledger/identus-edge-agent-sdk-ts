import { JWTPayload, Signer, createJWT } from "did-jwt";
import { base64url } from "multiformats/bases/base64";
import { DID, PrivateKey } from "..";
import { asJsonObj, isNil } from "../../utils/guards";
// ??? shouldnt be importing Pollux error
import { InvalidJWTString } from "../models/errors/Pollux";

export namespace JWT {
  export interface Header {
    typ: string;
    alg: string;
    [key: string]: any;
  }

  export type Payload = JWTPayload;

  export interface DecodedObj {
    header: Header;
    payload: Payload;
    signature: string;
    data: string;
  }


  /**
   * Creates a signed JWT 
   * 
   * @param issuer 
   * @param privateKey 
   * @param payload 
   * @returns 
   */
  export const sign = async (
    issuer: DID,
    privateKey: PrivateKey,
    payload: Partial<Payload>,
    header?: Partial<Header>
  ): Promise<string> => {
    if (!privateKey.isSignable()) {
      throw new Error("Key is not signable");
    }

    const signer: Signer = async (data: any) => {
      const signature = privateKey.sign(Buffer.from(data));
      const encoded = base64url.baseEncode(signature);
      return encoded;
    };

    const jwt = await createJWT(
      payload,
      { issuer: issuer.toString(), signer },
      { alg: privateKey.alg, ...asJsonObj(header) }
    );

    return jwt;
  };

  /**
   * decode a JWT into its parts
   * 
   * @param jws 
   * @returns 
   */
  export const decode = (jws: string): DecodedObj => {
    const parts = jws.split(".");
    const headersEnc = parts.at(0);
    const payloadEnc = parts.at(1);

    if (parts.length != 3 || isNil(headersEnc) || isNil(payloadEnc)) {
      throw new InvalidJWTString();
    }

    const headers = base64url.baseDecode(headersEnc);
    const payload = base64url.baseDecode(payloadEnc);

    return {
      header: JSON.parse(Buffer.from(headers).toString()),
      payload: JSON.parse(Buffer.from(payload).toString()),
      signature: parts[2],
      data: `${headersEnc}.${payloadEnc}`,
    };
  };
}
