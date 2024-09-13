import { describe, it, expect, test } from 'vitest';
import { Ed25519PrivateKey } from "../../../src/apollo/utils/Ed25519PrivateKey";
import { Ed25519PublicKey } from "../../../src/apollo/utils/Ed25519PublicKey";
import { X25519PrivateKey } from "../../../src/apollo/utils/X25519PrivateKey";
import { X25519PublicKey } from "../../../src/apollo/utils/X25519PublicKey";
import { Secp256k1PrivateKey } from "../../../src/apollo/utils/Secp256k1PrivateKey";
import { Secp256k1PublicKey } from "../../../src/apollo/utils/Secp256k1PublicKey";
import { JWK } from "../../../src/domain";
import { base64url } from 'multiformats/bases/base64';

describe("Keys", () => {
  describe("Ed25519PrivateKey", () => {
    const raw = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const pem = `-----BEGIN PRIVATE KEY-----\n${raw.toString("base64")}\n-----END PRIVATE KEY-----`;
    const jwk: JWK.OKP = {
      kty: 'OKP',
      crv: 'Ed25519',
      d: Buffer.from(base64url.baseEncode(raw)).toString(),
      x: 'TLWr9q15-_WrvMr8wmnYXNJlHtS4hbWGnyQa7fCluik'
    };

    describe("Exportable", () => {
      test("JWK", () => {
        const key = new Ed25519PrivateKey(raw);
        const result = key.to.JWK();

        expect(result).to.eql(jwk);
      });

      test("PEM", () => {
        const key = new Ed25519PrivateKey(raw);
        const result = key.to.PEM();

        expect(result).to.equal(pem);
      });
    });

    test("Importable - PEM", () => {
      const result = Ed25519PrivateKey.from.PEM(pem);

      expect(result.raw).to.eql(raw);
    });
  });

  describe("Ed25519PublicKey", () => {
    const raw = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const pem = `-----BEGIN PUBLIC KEY-----\n${raw.toString("base64")}\n-----END PUBLIC KEY-----`;
    const jwk: JWK.OKP = {
      kty: 'OKP',
      crv: 'Ed25519',
      x: Buffer.from(base64url.baseEncode(raw)).toString(),
    };

    describe("Exportable", () => {
      test("JWK", () => {
        const key = new Ed25519PublicKey(raw);
        const result = key.to.JWK();

        expect(result).to.eql(jwk);
      });

      test("PEM", () => {
        const key = new Ed25519PublicKey(raw);
        const result = key.to.PEM();

        expect(result).to.equal(pem);
      });
    });

    test("Importable - PEM", () => {
      const result = Ed25519PublicKey.from.PEM(pem);

      expect(result.raw).to.eql(raw);
    });
  });

  describe("X25519PrivateKey", () => {
    const raw = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const pem = `-----BEGIN PRIVATE KEY-----\n${raw.toString("base64")}\n-----END PRIVATE KEY-----`;
    const jwk: JWK.OKP = {
      kty: 'OKP',
      crv: 'X25519',
      d: Buffer.from(base64url.baseEncode(raw)).toString(),
      x: '_TOE4TKtAqVsePRVR-5AA43HkAK5DSntkOCO7nYq5xU'
    };

    describe("Exportable", () => {
      test("JWK", () => {
        const key = new X25519PrivateKey(raw);
        const result = key.to.JWK();

        expect(result).to.eql(jwk);
      });

      test("PEM", () => {
        const key = new X25519PrivateKey(raw);
        const result = key.to.PEM();

        expect(result).to.equal(pem);
      });
    });

    test("Importable - PEM", () => {
      const result = X25519PrivateKey.from.PEM(pem);

      expect(result.raw).to.eql(raw);
    });
  });

  describe("X25519PublicKey", () => {
    const raw = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const pem = `-----BEGIN PUBLIC KEY-----\n${raw.toString("base64")}\n-----END PUBLIC KEY-----`;
    const jwk: JWK.OKP = {
      kty: 'OKP',
      crv: 'X25519',
      x: Buffer.from(base64url.baseEncode(raw)).toString(),
    };

    describe("Exportable", () => {
      test("JWK", () => {
        const key = new X25519PublicKey(raw);
        const result = key.to.JWK();

        expect(result).to.eql(jwk);
      });

      test("PEM", () => {
        const key = new X25519PublicKey(raw);
        const result = key.to.PEM();

        expect(result).to.equal(pem);
      });
    });

    test("Importable - PEM", () => {
      const result = X25519PublicKey.from.PEM(pem);

      expect(result.raw).to.eql(raw);
    });
  });

  describe("Secp256k1PrivateKey", () => {
    const raw = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const pem = `-----BEGIN EC PRIVATE KEY-----\n${raw.toString("base64")}\n-----END EC PRIVATE KEY-----`;
    const jwk: JWK.EC = {
      kty: 'EC',
      crv: 'secp256k1',
      d: Buffer.from(base64url.baseEncode(raw)).toString(),
      x: "eb5mfvncu6xVoGKVzocLBwKb_NstzijZWfKBWxb4F5g",
      y: "SDradyajxGVdpPv8DhEIqP0XtEimhVQZnEfQj_sQ1Lg",
    };

    describe("Exportable", () => {
      test("JWK", () => {
        const key = new Secp256k1PrivateKey(raw);
        const result = key.to.JWK();

        expect(result).to.eql(jwk);
      });

      test("JWK with kid", () => {
        const key = new Secp256k1PrivateKey(raw);
        const kid = "qweruty";
        const result = key.to.JWK({ kid });

        expect(result).to.have.property("kid", kid);
        expect(result).to.have.property("kty", jwk.kty);
        expect(result).to.have.property("crv", jwk.crv);
        expect(result).to.have.property("d", jwk.d);
        expect(result).to.have.property("x", jwk.x);
        expect(result).to.have.property("y", jwk.y);
      });

      test("PEM", () => {
        const key = new Secp256k1PrivateKey(raw);
        const result = key.to.PEM();

        expect(result).to.equal(pem);
      });
    });

    test("Importable - PEM", () => {
      const result = Secp256k1PrivateKey.from.PEM(pem);

      expect(result.raw).to.eql(raw);
    });
  });

  describe("Secp256k1PublicKey", () => {
    const raw = Buffer.from([4, 49, 167, 173, 103, 15, 188, 85, 154, 102, 229, 108, 189, 122, 78, 227, 245, 99, 79, 55, 81, 220, 201, 4, 16, 89, 24, 121, 177, 48, 51, 1, 184, 41, 196, 54, 243, 176, 147, 60, 249, 136, 0, 13, 183, 1, 111, 60, 2, 85, 245, 209, 131, 187, 123, 221, 142, 111, 153, 145, 21, 106, 13, 19, 244]);
    const pem = `-----BEGIN EC PUBLIC KEY-----\n${raw.toString("base64")}\n-----END EC PUBLIC KEY-----`;
    const jwk: JWK.EC = {
      kty: 'EC',
      crv: 'secp256k1',
      x: "MaetZw-8VZpm5Wy9ek7j9WNPN1HcyQQQWRh5sTAzAbg",
      y: "KcQ287CTPPmIAA23AW88AlX10YO7e92Ob5mRFWoNE_Q",
    };

    describe("Exportable", () => {
      test("JWK", () => {
        const key = new Secp256k1PublicKey(raw);
        const result = key.to.JWK();

        expect(result).to.eql(jwk);
      });

      test("JWK with kid", () => {
        const key = new Secp256k1PublicKey(raw);
        const kid = "qweruty";
        const result = key.to.JWK({ kid });

        expect(result).to.have.property("kid", kid);
        expect(result).to.have.property("kty", jwk.kty);
        expect(result).to.have.property("crv", jwk.crv);
        expect(result).to.have.property("x", jwk.x);
      });

      test("PEM", () => {
        const key = new Secp256k1PublicKey(raw);
        const result = key.to.PEM();

        expect(result).to.equal(pem);
      });
    });

    test("Importable - PEM", () => {
      const result = Secp256k1PublicKey.from.PEM(pem);

      expect(result.raw).to.eql(raw);
    });
  });

  describe("JWK", () => {
    test("non-Key given - throws", () => {
      expect(() => JWK.fromKey({} as any)).to.throw;
    });
  });
});
