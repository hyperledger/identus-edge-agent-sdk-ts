import { Secp256k1PublicKey } from "../../../apollo/utils/Secp256k1PublicKey";
import * as ECConfig from "../../../config/ECConfig";
import { Apollo } from "../../../domain/buildingBlocks/Apollo";
import { Curve } from "../../../domain/models";
import { CastorError } from "../../../domain/models/Errors";

import * as Protos from "../../protos/node_models";
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

export function getProtosUsage(
  usage: Usage
): Protos.io.iohk.atala.prism.protos.KeyUsage {
  switch (usage) {
    case Usage.UNKNOWN_KEY:
      return Protos.io.iohk.atala.prism.protos.KeyUsage.UNKNOWN_KEY;
    case Usage.MASTER_KEY:
      return Protos.io.iohk.atala.prism.protos.KeyUsage.MASTER_KEY;
    case Usage.ISSUING_KEY:
      return Protos.io.iohk.atala.prism.protos.KeyUsage.ISSUING_KEY;
    case Usage.KEY_AGREEMENT_KEY:
      return Protos.io.iohk.atala.prism.protos.KeyUsage.KEY_AGREEMENT_KEY;
    case Usage.AUTHENTICATION_KEY:
      return Protos.io.iohk.atala.prism.protos.KeyUsage.AUTHENTICATION_KEY;
    case Usage.REVOCATION_KEY:
      return Protos.io.iohk.atala.prism.protos.KeyUsage.REVOCATION_KEY;
    case Usage.CAPABILITY_INVOCATION_KEY:
      return Protos.io.iohk.atala.prism.protos.KeyUsage
        .CAPABILITY_INVOCATION_KEY;
    case Usage.CAPABILITY_DELEGATION_KEY:
      return Protos.io.iohk.atala.prism.protos.KeyUsage
        .CAPABILITY_DELEGATION_KEY;
    default:
      return Protos.io.iohk.atala.prism.protos.KeyUsage.UNKNOWN_KEY;
  }
}

export function getUsageId(index: Usage): string {
  switch (index) {
    case Usage.MASTER_KEY:
      return `master${index}`;
    case Usage.ISSUING_KEY:
      return `issuing${index}`;
    case Usage.KEY_AGREEMENT_KEY:
      return `agreement${index}`;
    case Usage.AUTHENTICATION_KEY:
      return `authentication${index}`;
    case Usage.REVOCATION_KEY:
      return `revocation${index}`;
    case Usage.CAPABILITY_DELEGATION_KEY:
      return `delegation${index}`;
    case Usage.CAPABILITY_INVOCATION_KEY:
      return `invocation${index}`;
    default:
      return `unknown${index}`;
  }
}

export function getUsage(
  protosUsage: Protos.io.iohk.atala.prism.protos.KeyUsage
): Usage {
  let usage: Usage;
  switch (protosUsage) {
    case 0:
      usage = Usage.UNKNOWN_KEY;
      break;
    case 1:
      usage = Usage.MASTER_KEY;
      break;
    case 2:
      usage = Usage.ISSUING_KEY;
      break;
    case 3:
      usage = Usage.KEY_AGREEMENT_KEY;
      break;
    case 4:
      usage = Usage.AUTHENTICATION_KEY;
      break;
    case 5:
      usage = Usage.REVOCATION_KEY;
      break;
    case 6:
      usage = Usage.CAPABILITY_INVOCATION_KEY;
      break;
    case 7:
      usage = Usage.CAPABILITY_DELEGATION_KEY;
      break;
    default:
      usage = Usage.UNKNOWN_KEY;
      break;
  }
  return usage;
}

export class PrismDIDPublicKey {
  id: string;
  usage: Usage;
  keyData: Secp256k1PublicKey;

  constructor(id: string, usage: Usage, keyData: Secp256k1PublicKey) {
    this.id = id;
    this.usage = usage;
    this.keyData = keyData;
  }

  static fromProto(
    apollo: Apollo,
    proto: Protos.io.iohk.atala.prism.protos.PublicKey
  ): PrismDIDPublicKey {
    const id = proto.id;
    const usage = proto.usage;
    let keyData: Secp256k1PublicKey;

    switch (proto.key_data) {
      case "compressed_ec_key_data":
        keyData = Secp256k1PublicKey.secp256k1FromCompressed(
          proto.compressed_ec_key_data.data
        );
        break;
      case "ec_key_data":
        keyData = Secp256k1PublicKey.secp256k1FromByteCoordinates(
          proto.ec_key_data.x,
          proto.ec_key_data.y
        );
        break;
      default:
        throw new CastorError.InvalidPublicKeyEncoding();
    }

    return new PrismDIDPublicKey(id, getUsage(usage), keyData);
  }

  toProto(): Protos.io.iohk.atala.prism.protos.PublicKey {
    const encoded = this.keyData.getEncoded();
    const xBytes = encoded.slice(1, 1 + ECConfig.PRIVATE_KEY_BYTE_SIZE);
    const yBytes = encoded.slice(
      1 + ECConfig.PRIVATE_KEY_BYTE_SIZE,
      encoded.length
    );
    const ecKeyData = new Protos.io.iohk.atala.prism.protos.ECKeyData({
      curve: Curve.SECP256K1.toLocaleLowerCase(),
      x: xBytes,
      y: yBytes,
    });
    const usage = getProtosUsage(this.usage);
    const publicKey = new Protos.io.iohk.atala.prism.protos.PublicKey({
      id: this.id,
      usage: usage,
      ec_key_data: ecKeyData,
    });
    return publicKey;
  }
}
