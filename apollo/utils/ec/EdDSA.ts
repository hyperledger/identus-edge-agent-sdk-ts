import BN from "bn.js";
import hash from "hash.js";
import elliptic from "elliptic";
import { wipe } from "@stablelib/wipe";

import { DerivationAxis } from "../derivation/DerivationAxis";
import { DerivationPath } from "../derivation/DerivationPath";
import { Ed25519PublicKey } from "../Ed25519PublicKey";
import { Ed25519PrivateKey } from "../Ed25519PrivateKey";
import { Ed25519KeyPair } from "../Ed25519KeyPair";
import { X25519KeyPair } from "../X25519KeyPair";
import { X25519PrivateKey } from "../X25519PrivateKey";
import { X25519PublicKey } from "../X25519PublicKey";

export class EdDSA {
  private eddsa = new elliptic.eddsa("ed25519");
  private ec = new elliptic.ec("curve25519");
  private static s = "EDDSA AtalaPrism";

  constructor(private xprv: Uint8Array, private path: DerivationPath) {}

  private static sha512(data: Buffer) {
    const digest = hash.sha512().update(data).digest();
    return Buffer.from(digest);
  }

  private static hmac512(key: Buffer, data: Buffer): Buffer {
    const sha512 = hash.sha512 as unknown as BlockHash<Sha512Constructor>;
    const digest = hash.hmac(sha512, key).update(data).digest();
    return Buffer.from(digest);
  }

  public publicKey(): Ed25519PublicKey {
    return new Ed25519PublicKey(this.toPublic(Buffer.from(this.xprv)));
  }
  public privateKey(): Ed25519PrivateKey {
    return new Ed25519PrivateKey(Buffer.from(this.xprv));
  }
  public keyPair(): Ed25519KeyPair {
    return new Ed25519KeyPair(this.privateKey(), this.publicKey());
  }

  public x25519KeyPair() {
    return new X25519KeyPair(
      new X25519PrivateKey(this.getX25519PrivateKey()),
      new X25519PublicKey(this.getX25519PublicKey())
    );
  }

  private getX25519PublicKey(): Buffer {
    const ecKeyPair = this.ec.keyFromPrivate(this.getX25519PrivateKey());
    return Buffer.from(
      this.ec.g.mul(ecKeyPair.getPrivate()).encodeCompressed("hex"),
      "hex"
    );
  }

  private getX25519PrivateKey(): Buffer {
    const d = EdDSA.sha512(Buffer.from(this.xprv).subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const o = new Uint8Array(d.subarray(0, 32));
    wipe(d);
    return Buffer.from(o);
  }

  private static makeEd25519Extended(secret: Buffer): Buffer {
    const extended = this.sha512(secret);
    extended[0] &= 248;
    extended[31] &= 63;
    extended[31] |= 64;
    return extended;
  }

  static x25519FromSeed(seed: Buffer): Buffer {
    const continueLoop = true;
    let iteration = 1;
    let extendedKey: Buffer | undefined;
    while (continueLoop && !extendedKey) {
      const block = this.hmac512(seed, Buffer.from(`${EdDSA.s}${iteration}`));
      const extended = this.makeEd25519Extended(block.slice(0, 32));
      if ((extended[31] & 0x20) === 0) {
        return Buffer.concat([extended, block.slice(32, 64)]);
      }
      iteration++;
    }
    throw new Error("EDDSA Seed generation error");
  }

  static ed25519FromSeed(seed: Buffer): Buffer {
    const block = EdDSA.hmac512(Buffer.from(this.s), seed);
    const extended = EdDSA.sha512(block.slice(0, 32));
    extended[0] &= 248;
    extended[31] &= 0x1f;
    extended[31] |= 64;
    return Buffer.concat([extended, block.slice(32, 64)]);
  }

  private toPublic(kl: Buffer) {
    if (kl.length !== 32 && kl.length !== 96) {
      throw new Error("invalid xprv");
    }
    const key = this.eddsa.keyFromSecret(kl.slice(0, 32).toString("hex"));
    const pk = Buffer.from(key.getPublic());
    if (kl.length > 64) {
      return Buffer.concat([pk, kl.slice(64, 96)]);
    }
    return pk;
  }

  derive(axis: DerivationAxis): EdDSA {
    const index = axis.number;
    const kl = Buffer.from(this.xprv.slice(0, 32));
    const kr = Buffer.from(this.xprv.slice(32, 64));
    const cc = Buffer.from(this.xprv.slice(64, 96));

    let data;
    let z, i;

    if (index < 0x80000000) {
      data = Buffer.allocUnsafe(1 + 32 + 4);
      data.writeUInt32LE(index, 1 + 32);

      const pk = this.toPublic(kl);
      pk.copy(data, 1);

      data[0] = 0x02;
      z = EdDSA.hmac512(Buffer.from(cc), data);
      data[0] = 0x03;
      i = EdDSA.hmac512(Buffer.from(cc), data);
    } else {
      data = Buffer.allocUnsafe(1 + 64 + 4);
      data.writeUInt32LE(index, 1 + 64);
      kl.copy(data, 1);
      kr.copy(data, 1 + 32);

      data[0] = 0x00;
      z = EdDSA.hmac512(cc, data);
      data[0] = 0x01;
      i = EdDSA.hmac512(cc, data);
    }

    const chainCode = i.slice(32, 64);
    const zl = z.slice(0, 32);
    const zr = z.slice(32, 64);

    // left = kl + 8 * trunc28(zl)
    // right = zr + kr
    const left = new BN(kl, 16, "le")
      .add(new BN(zl.slice(0, 28), 16, "le").mul(new BN(8)))
      .toArrayLike(Buffer, "le", 32);
    let right = new BN(kr, 16, "le")
      .add(new BN(zr, 16, "le"))
      .toArrayLike(Buffer, "le")
      .slice(0, 32);

    // just padding
    if (right.length !== 32) {
      right = Buffer.from(right.toString("hex") + "00", "hex");
    }

    return new EdDSA(Buffer.concat([left, right, chainCode]), this.path);
  }
}
