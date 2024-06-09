import { Secp256k1PublicKey } from "./Secp256k1PublicKey";
import * as ECConfig from "./ec/ECConfig";
import { Curve, getProtosUsage, getUsage, PrismDIDPublicKeyType, PublicKey, Usage } from "../../domain/models";
import { ApolloError, CastorError } from "../../domain/models/Errors";
import * as Protos from "../../domain/models/protos/node_models";
import { Ed25519PublicKey } from "./Ed25519PublicKey";
import { X25519PublicKey } from "./X25519PublicKey";



export class PrismDIDPublicKey implements PrismDIDPublicKeyType {
  id: string;
  usage: Usage;
  keyData: PublicKey;

  constructor(id: string, usage: Usage, keyData: PublicKey) {
    this.id = id;
    this.usage = usage;
    this.keyData = keyData;
  }

  private static getProtoCurve(proto: Protos.io.iohk.atala.prism.protos.PublicKey) {
    return proto.compressed_ec_key_data?.curve ?? proto.ec_key_data.curve
  }

  private static fromSecp256k1Proto(proto: Protos.io.iohk.atala.prism.protos.PublicKey) {
    switch (proto.key_data) {
      case "compressed_ec_key_data":
        return new Secp256k1PublicKey(
          proto.compressed_ec_key_data.data
        );
      case "ec_key_data":
        return Secp256k1PublicKey.secp256k1FromByteCoordinates(
          proto.ec_key_data.x,
          proto.ec_key_data.y
        );
      default:
        throw new CastorError.InvalidPublicKeyEncoding();
    }
  }

  private static fromEd25519ORX25519Proto(proto: Protos.io.iohk.atala.prism.protos.PublicKey) {
    const curve = this.getProtoCurve(proto);
    if (proto.has_compressed_ec_key_data) {
      if (curve === Curve.ED25519) {
        return new Ed25519PublicKey(
          proto.compressed_ec_key_data.data
        );
      }
      if (curve === Curve.X25519) {
        return new X25519PublicKey(
          proto.compressed_ec_key_data.data
        );
      }
    }
    throw new CastorError.InvalidPublicKeyEncoding();
  }

  static fromProto(
    proto: Protos.io.iohk.atala.prism.protos.PublicKey
  ): PrismDIDPublicKey {
    const id = proto.id;
    const usage = getUsage(proto.usage);
    const curve = this.getProtoCurve(proto);
    if (curve === Curve.SECP256K1.toLocaleLowerCase()) {
      return new PrismDIDPublicKey(
        id,
        usage,
        this.fromSecp256k1Proto(proto)
      );
    } else if (curve === Curve.ED25519 || curve === Curve.X25519) {
      return new PrismDIDPublicKey(
        id,
        usage,
        this.fromEd25519ORX25519Proto(proto)
      );
    } else {
      throw new ApolloError.InvalidKeyCurve(curve, Object.values(Curve))
    }
  }

  toProto(): Protos.io.iohk.atala.prism.protos.PublicKey {
    const curve = this.keyData.curve;
    const usage = getProtosUsage(this.usage);
    const encoded = this.keyData.getEncoded()
    if (curve === Curve.SECP256K1) {
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
        data: encoded,
      }),
    });
  }
}
