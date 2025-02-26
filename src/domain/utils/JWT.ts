import { JWTPayload } from "did-jwt";
import { base64url } from "multiformats/bases/base64";
import { isNil } from "../../utils/guards";
import { InvalidJWTString } from "../models/errors/Pollux";
import { SdJwtVcPayload, } from "@sd-jwt/sd-jwt-vc";
import type { DisclosureFrame as DisclosureFrameType } from '@sd-jwt/types';


export namespace SDJWT {
  export interface Header {
    typ: string;
    alg: string;
    [key: string]: any;
  }

  export type Payload = SdJwtVcPayload;
  export type DisclosureFrame<T extends SdJwtVcPayload> = DisclosureFrameType<T>;
}


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

  export enum Claims {
    iss = "iss",
    sub = "sub",
    aud = "aud",
    nbf = "nbf",
    exp = "exp",
    iat = 'iat',
    jti = "jti",
    // rexp
  }


  /**
   * decode a JWT into its parts
   * TODO move this to JWT component - needs removing from JWTCredential first
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
