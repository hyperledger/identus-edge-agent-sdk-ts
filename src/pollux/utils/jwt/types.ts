import { JWTPayload } from "did-jwt";
import { SdJwtVcPayload } from "@sd-jwt/sd-jwt-vc";
import { DisclosureFrame } from '@sd-jwt/types';
import { SDJwtInstance } from '@sd-jwt/core';
import {
  DID,
  JWTObject,
  PrivateKey,
} from "../../../domain";
import { Extensible } from "did-resolver";
import { JsonObj } from "../../../utils";

export enum JWTInstanceType {
  JWT = "JWT",
  SDJWT = "SDJWT"
}

export type JWTVerifyOptions<
  T extends JWTInstanceType
> = T extends JWTInstanceType.JWT ?
  {
    issuerDID: DID,
    holderDID?: DID,
    jws: string;
  } :
  {
    issuerDID: DID,
    jws: string,
    requiredClaimKeys?: string[],
    requiredKeyBindings?: boolean;
  };

export type JWTSignOptions<
  T extends JWTInstanceType,
  E extends Extensible
> = T extends JWTInstanceType.JWT ?
  {
    issuerDID: DID;
    privateKey: PrivateKey;
    payload: Partial<JWTPayload>;
    headers?: JsonObj;
  } :
  {
    issuerDID: DID;
    privateKey: PrivateKey;
    payload: SdJwtVcPayload;
    disclosureFrame: DisclosureFrame<E>;
    headers?: JsonObj;
  };

export type JWTDecodeResponse<
  T extends JWTInstanceType
> = T extends JWTInstanceType.JWT ?
  Promise<JWTObject> :
  ReturnType<SDJwtInstance<SdJwtVcPayload>['verify']>;
