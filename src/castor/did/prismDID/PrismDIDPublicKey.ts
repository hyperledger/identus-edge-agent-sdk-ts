import * as ECConfig from "../../../domain/models/ECConfig";
import { Curve, getProtosUsage, getUsage, PublicKey, Usage } from "../../../domain/models";
import { ApolloError, CastorError } from "../../../domain/models/Errors";
import * as Protos from "../../protos/node_models";

import { Apollo, KeyProperties, KeyTypes } from "../../../domain";

export class PrismDIDPublicKey {

  constructor(
    public id: string,
    public usage: Usage,
    public keyData: PublicKey
  ) {
    this.id = id;
    this.usage = usage;
    this.keyData = keyData;
  }

  private static getProtoCurve(proto: Protos.io.iohk.atala.prism.protos.PublicKey) {
    return proto.compressed_ec_key_data?.curve ?? proto.ec_key_data.curve
  }

  private static fromSecp256k1Proto(
    apollo: Apollo,
    proto: Protos.io.iohk.atala.prism.protos.PublicKey
  ) {
    switch (proto.key_data) {
      case "compressed_ec_key_data":
        return apollo.createPublicKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.rawKey]: proto.compressed_ec_key_data.data
        })
      case "ec_key_data":
        return apollo.createPublicKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.SECP256K1,
          [KeyProperties.curvePointX]: proto.ec_key_data.x,
          [KeyProperties.curvePointY]: proto.ec_key_data.y,
        })
      default:
        throw new CastorError.InvalidPublicKeyEncoding();
    }
  }

  private static fromEd25519ORX25519Proto(
    apollo: Apollo,
    proto: Protos.io.iohk.atala.prism.protos.PublicKey
  ) {
    const curve = this.getProtoCurve(proto);
    if (proto.has_compressed_ec_key_data) {
      if (curve === Curve.ED25519) {
        return apollo.createPublicKey({
          [KeyProperties.type]: KeyTypes.EC,
          [KeyProperties.curve]: Curve.ED25519,
          [KeyProperties.rawKey]: proto.compressed_ec_key_data.data
        })
      }
      if (curve === Curve.X25519) {
        return apollo.createPublicKey({
          [KeyProperties.type]: KeyTypes.Curve25519,
          [KeyProperties.curve]: Curve.X25519,
          [KeyProperties.rawKey]: proto.compressed_ec_key_data.data
        })
      }
    }
    throw new CastorError.InvalidPublicKeyEncoding();
  }

  static fromProto(
    apollo: Apollo,
    proto: Protos.io.iohk.atala.prism.protos.PublicKey
  ): PrismDIDPublicKey {
    const id = proto.id;
    const usage = getUsage(proto.usage);
    const curve = this.getProtoCurve(proto);
    if (curve === Curve.SECP256K1) {
      return new PrismDIDPublicKey(
        id,
        usage,
        this.fromSecp256k1Proto(apollo, proto)
      );
    } else if (curve === Curve.ED25519 || curve === Curve.X25519) {
      return new PrismDIDPublicKey(
        id,
        usage,
        this.fromEd25519ORX25519Proto(apollo, proto)
      );
    } else {
      throw new ApolloError.InvalidKeyCurve(curve);
    }
  }

  toProto(): Protos.io.iohk.atala.prism.protos.PublicKey {
    const curve = this.keyData.curve;
    const usage = getProtosUsage(this.usage);
    if (curve === Curve.SECP256K1) {
      const encoded = this.keyData.getEncoded()
      const xBytes = encoded.slice(1, 1 + ECConfig.PRIVATE_KEY_BYTE_SIZE);
      const yBytes = encoded.slice(
        1 + ECConfig.PRIVATE_KEY_BYTE_SIZE,
        encoded.length
      );
      return new Protos.io.iohk.atala.prism.protos.PublicKey({
        id: this.id,
        usage: usage,
        ec_key_data: new Protos.io.iohk.atala.prism.protos.ECKeyData({
          curve: this.keyData.curve.toLocaleLowerCase(),
          x: xBytes,
          y: yBytes,
        }),
      });
    }
    return new Protos.io.iohk.atala.prism.protos.PublicKey({
      id: this.id,
      usage: usage,
      compressed_ec_key_data: new Protos.io.iohk.atala.prism.protos.CompressedECKeyData({
        curve: this.keyData.curve,
        data: this.keyData.raw,
      }),
    });
  }
}
