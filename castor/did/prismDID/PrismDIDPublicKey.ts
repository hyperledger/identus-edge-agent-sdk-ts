import Apollo from "../../../domain/buildingBlocks/Apollo";
import { Curve, PublicKey } from "../../../domain/models";
import { CastorError } from "../../../domain/models/Errors";

import * as protos from "../../protos/protos";

export enum Usage {
  MASTER_KEY = "masterKey",
  ISSUING_KEY = "issuingKey",
  AUTHENTICATION_KEY = "authenticationKey",
  REVOCATION_KEY = "revocationKey",
  CAPABILITY_DELEGATION_KEY = "capabilityDelegationKey",
  CAPABILITY_INVOCATION_KEY = "capabilityInvocationKey",
  KEY_AGREEMENT_KEY = "keyAgreementKey",
  UNKNOWN_KEY = "unknownKey",
}

export function findKeyById<T>(data: T, keyNumber: number | string): keyof T {
  const keys = Object.keys(protos.KeyUsage) as (keyof T)[];
  return keys.find((key) => (data[key] as T) === keyNumber)!;
}

export function getUsageId(usage: Usage, num: Number = 0) {
  return `${usage.replace("key", "")}${num}`;
}

export class PrismDIDPublicKey {
  private apollo: Apollo;

  id: string;
  usage: Usage;
  keyData: PublicKey;

  constructor(apollo: Apollo, id: string, usage: Usage, keyData: PublicKey) {
    this.apollo = apollo;
    this.id = id;
    this.usage = usage;
    this.keyData = keyData;
  }

  static fromProto(apollo: Apollo, proto: typeof protos.PublicKey) {
    const id = proto.getId();
    const keyUsageId = proto.getUsage();
    const usage = findKeyById<typeof protos.KeyUsage>(
      protos.KeyUsage,
      keyUsageId
    );
    if (!proto.hasCompressedEcKeyData()) {
      throw new CastorError.InvalidPublicKeyEncoding();
    }
    const publicKey: PublicKey = {
      keyCurve: {
        curve: Curve.SECP256K1,
      },
      value: Buffer.from(
        proto.getCompressedEcKeyData()!.getData_asU8()
      ).toString("hex"),
    };
    return new PrismDIDPublicKey(apollo, id, usage as Usage, publicKey);
  }

  toProto(): typeof protos.PublicKey {
    const publicKey = new protos.PublicKey();
    const compressed = new protos.CompressedECKeyData();
    compressed.setCurve(Curve.SECP256K1);
    compressed.setData(
      this.apollo.compressedPublicKeyFromCompresedData(
        Buffer.from(this.keyData.value, "hex")
      ).value
    );
    const usage = findKeyById<typeof Usage>(Usage, this.usage);
    publicKey.setId(this.id);
    publicKey.setUsage(protos.KeyUsage[usage]);
    publicKey.setCompressedEcKeyData(compressed);

    return publicKey;
  }
}
