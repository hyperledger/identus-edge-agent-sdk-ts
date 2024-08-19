import { Ed25519PublicKey } from "./Ed25519PublicKey";
import { X25519PrivateKey } from "./X25519PrivateKey";
import {
  Curve,
  ExportableKey,
  ImportableKey,
  KeyProperties,
  KeyTypes,
  PrivateKey,
  StorableKey,
  SignableKey,
  DerivableKey,
  ApolloError
} from "../../domain";

import ApolloPKG from "@hyperledger/identus-apollo";
const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;
const BigIntegerWrapper = ApolloSDK.derivation.BigIntegerWrapper;
const EdHDKey = ApolloSDK.derivation.EdHDKey;
/**
 * @ignore
 */
export class Ed25519PrivateKey extends PrivateKey implements DerivableKey, ExportableKey, SignableKey, StorableKey {
  public readonly recoveryId = StorableKey.recoveryId("ed25519", "priv");


  public keySpecification: Map<string, string> = new Map();
  public raw: Buffer;
  public size: number;
  public type = KeyTypes.EC;

  public readonly to = ExportableKey.factory(this, { pemLabel: "PRIVATE KEY" });
  static from = ImportableKey.factory(Ed25519PrivateKey, { pemLabel: "PRIVATE KEY" });

  constructor(bytes: Int8Array | Uint8Array) {
    super();

    this.raw = this.getInstance(bytes).raw;
    this.size = this.raw.length;
    this.keySpecification.set(KeyProperties.curve, Curve.ED25519);
  }

  derive(derivationPath: string): PrivateKey {
    const chainCodeHex = this.getProperty(KeyProperties.chainCode);
    if (!chainCodeHex) {
      throw new ApolloError.MissingKeyParameters(KeyProperties.chainCode);
    }
    const derivationPathStr = derivationPath.toString();
    const skRaw = Int8Array.from(this.raw);
    const chaincode = Int8Array.from(Buffer.from(chainCodeHex, "hex"));
    const hdKey = new EdHDKey(
      skRaw,
      chaincode,
      derivationPathStr.split("/").slice(1).length,
      BigIntegerWrapper.initFromInt(0)
    );
    const derived = hdKey.derive(derivationPathStr);
    const sk = new Ed25519PrivateKey(Uint8Array.from(derived.privateKey));
    sk.keySpecification.set(KeyProperties.derivationPath, Buffer.from(derivationPathStr).toString("hex"));
    sk.keySpecification.set(KeyProperties.index, `${this.index ?? 0}`);
    if (derived.chainCode) {
      sk.keySpecification.set(KeyProperties.chainCode, Buffer.from(derived.chainCode).toString("hex"));
    }

    return sk;
  }

  publicKey() {
    return new Ed25519PublicKey(this.getInstance().publicKey().raw);
  }

  getEncoded(): Buffer {
    return this.getInstance().getEncoded();
  }

  sign(message: Buffer) {
    const signature = this.getInstance().sign(new Int8Array(message));
    return Buffer.from(signature);
  }

  x25519() {
    const key = this.getInstance().x25519PrivateKey();
    return X25519PrivateKey.from.Buffer(key.raw);
  }

  private getInstance(
    value?: Int8Array | Uint8Array
  ) {
    // eslint-disable-next-line no-extra-boolean-cast
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance = new ApolloSDK.utils.KMMEdPrivateKey(Int8Array.from(bytes));

    return instance;
  }
}
