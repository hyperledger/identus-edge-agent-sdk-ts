import BN from "bn.js";

import * as ECConfig from "../../domain/models/ECConfig";
import { Secp256k1PublicKey } from "./Secp256k1PublicKey";
import { ApolloError, Curve, KeyTypes, KeyProperties, } from "../../domain";
import {
  PrivateKey,
  DerivableKey,
  ExportableKey,
  ImportableKey,
  SignableKey,
  StorableKey,
} from "../../domain/models/keyManagement";

import ApolloPKG from "@hyperledger/identus-apollo";
const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;
const HDKey = ApolloSDK.derivation.HDKey;
const BigIntegerWrapper = ApolloSDK.derivation.BigIntegerWrapper;

/**
 * @ignore
 */
export class Secp256k1PrivateKey
  extends PrivateKey
  implements DerivableKey, ExportableKey, SignableKey, StorableKey {
  public readonly recoveryId = StorableKey.recoveryId(Curve.SECP256K1, "priv");

  public keySpecification: Map<string, string> = new Map();
  public raw: Uint8Array;
  public size: number;
  public type = KeyTypes.EC;

  public readonly to = ExportableKey.factory(this, { pemLabel: "EC PRIVATE KEY" });
  static from = ImportableKey.factory(Secp256k1PrivateKey, { pemLabel: "EC PRIVATE KEY" });

  private get native() {
    return ApolloSDK.utils.KMMECSecp256k1PrivateKey.Companion.secp256k1FromByteArray(
      Int8Array.from(this.raw)
    );
  }

  constructor(nativeValue: Uint8Array) {
    if (nativeValue.length !== ECConfig.PRIVATE_KEY_BYTE_SIZE) {
      throw new ApolloError.KeyInitializationError(`Invalid byte size: ${ECConfig.PRIVATE_KEY_BYTE_SIZE} exptected, ${nativeValue.length} given`);
    }

    super();

    this.keySpecification.set(KeyProperties.curve, Curve.SECP256K1);
    this.raw = nativeValue;
    this.size = this.raw.length;
  }

  derive(derivationPath: string): Secp256k1PrivateKey {
    const chainCodeHex = this.getProperty(KeyProperties.chainCode);
    if (!chainCodeHex) {
      throw new ApolloError.MissingKeyParameters(KeyProperties.chainCode);
    }
    const chaincode = Buffer.from(chainCodeHex, "hex");
    const derivationPathStr = derivationPath.toString();
    const hdKey = new HDKey(
      Int8Array.from(this.raw),
      null,
      Int8Array.from(chaincode),
      derivationPathStr.split("/").slice(1).length,
      BigIntegerWrapper.initFromInt(0)
    );
    const derivedKey = hdKey.derive(derivationPathStr);
    if (derivedKey.privateKey == null) {
      throw new ApolloError.ApolloLibError("Key generated incorrectly: missing privateKey");
    }
    const privateKey = new Secp256k1PrivateKey(Buffer.from(derivedKey.privateKey));
    privateKey.keySpecification.set(KeyProperties.derivationPath, Buffer.from(derivationPathStr).toString("hex"));
    privateKey.keySpecification.set(KeyProperties.index, `${this.index ?? 0}`);
    if (derivedKey.chainCode) {
      privateKey.keySpecification.set(KeyProperties.chainCode, Buffer.from(derivedKey.chainCode).toString("hex"));
    }

    return privateKey;
  }

  publicKey() {
    const secp256K1PublicKey = this.native.getPublicKey();
    return new Secp256k1PublicKey(Uint8Array.from(secp256K1PublicKey.raw));
  }

  getEncoded(): Uint8Array {
    const byteList = this.raw;
    const padding = new Uint8Array(
      ECConfig.PRIVATE_KEY_BYTE_SIZE - byteList.length
    ).fill(0);
    return new Uint8Array([...padding, ...byteList]);
  }

  sign(message: Buffer) {
    return Buffer.from(Uint8Array.from(this.native.sign(Int8Array.from(message))));
  }

  // ?? move to `from` property
  static secp256k1FromBigInteger(bigInteger: BN): Secp256k1PrivateKey {
    return new Secp256k1PrivateKey(Uint8Array.from(bigInteger.toArray()));
  }

  static secp256k1FromBytes(encoded: Uint8Array): Secp256k1PrivateKey {
    if (encoded.length !== ECConfig.PRIVATE_KEY_BYTE_SIZE) {
      throw new ApolloError.KeyInitializationError(`Invalid byte size: ${ECConfig.PRIVATE_KEY_BYTE_SIZE} exptected, ${encoded.length} given`);
    }
    const bnprv = new BN(encoded);
    return new Secp256k1PrivateKey(Uint8Array.from(bnprv.toArray()));
  }
}
