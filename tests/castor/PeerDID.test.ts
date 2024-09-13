import { describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { base64url } from "multiformats/bases/base64";

import {
  Service,
  DID,
  ServiceEndpoint,
  PublicKey,
  KeyTypes,
  Curve,
  VerificationMethods,
} from "../../src/domain";
import Apollo from "../../src/apollo/Apollo";

import Castor from "../../src/castor/Castor";
import {
  VerificationMaterialAuthentication,
  VerificationMaterialFormatPeerDID,
  VerificationMethodTypeAuthentication,
} from "../../src/peer-did/types";
import { MultiCodec } from "../../src/peer-did/helpers/Multicodec";
import { PeerDIDResolver } from "../../src/castor/resolver/PeerDIDResolver";
describe("PEERDID CreateTest", () => {
  it("Should test milticodec coding", () => {
    const testData = Uint8Array.from(Buffer.from("test1"));

    const multicodec = new MultiCodec(testData);

    expect(testData).to.deep.equal(multicodec.decode().at(1));
  });
  it("Should decode ecnumbasic", () => {
    const ecnumBasis = "z6MkqRYqQiSgvZQdnBytw86Qbs2ZWUkGv22od935YF4s8M7V";
    const jwk = {
      crv: "Ed25519",
      kty: "OKP",
      x: "owBhCbktDjkfS6PdQddT0D3yjSitaSysP3YimJ_YgmA",
    };
    const jwkJson = JSON.stringify(jwk);
    const result = new VerificationMaterialAuthentication(
      jwkJson,
      VerificationMethodTypeAuthentication.JSON_WEB_KEY_2020,
      VerificationMaterialFormatPeerDID.JWK
    );

    const resolver = new PeerDIDResolver();
    const ecnumbasisResult = resolver.decodeMultibaseEncnumbasisAuth(
      ecnumBasis,
      VerificationMaterialFormatPeerDID.JWK
    );
    expect(result.type).to.equal(ecnumbasisResult[1].type);
    expect(result.value).to.equal(ecnumbasisResult[1].value);
    expect(result.format).to.equal(ecnumbasisResult[1].format);
  });
  it("Should create the peerDID correctly", async () => {
    const validPeerDID = `did:peer:2.Ez6LSoHkfN1Y4nK9RCjx7vopWsLrMGNFNgTNZgoCNQrTzmb1n.Vz6MknRZmapV7uYZQuZez9n9N3tQotjRN18UGS68Vcfo6gR4h.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vZXhhbXBsZS5jb20vZW5kcG9pbnQiLCJyIjpbImRpZDpleGFtcGxlOnNvbWVtZWRpYXRvciNzb21la2V5Il0sImEiOltdfX0`;
    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const publicKeys: PublicKey[] = [];
    const keyAgreementPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.Curve25519,
      curve: Curve.X25519,
      raw: base64url.baseDecode("COd9Xhr-amD7fuswWId2706JBUY_tmjp9eiNEieJeEE"),
    });

    const authenticationPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.ED25519,
      raw: base64url.baseDecode("JLIJQ5jlkyqtGmtOth6yggJLLC0zuRhUPiBhd1-rGPs"),
    });

    publicKeys.push(authenticationPrivateKey.publicKey());
    publicKeys.push(keyAgreementPrivateKey.publicKey());

    const services: Service[] = [
      new Service(
        "didcomm",
        ["DIDCommMessaging"],
        new ServiceEndpoint(
          "https://example.com/endpoint",
          [],
          ["did:example:somemediator#somekey"]
        )
      ),
    ];
    const did = await castor.createPeerDID(publicKeys, services);
    expect(did.toString()).to.equal(validPeerDID);
  });

  it("Should resolver peerdid correctly", async () => {
    const mypeerDID = new DID(
      "did",
      "peer",
      "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
    );
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    const document = await castor.resolveDID(mypeerDID.toString());
    expect(document.id.toString()).to.equal(mypeerDID.toString());
  });

  it("Should resolver peerdid's kid of the keys correctly according to https://github.com/decentralized-identity/peer-did-method-spec/pull/62", async () => {
    const mypeerDID = new DID(
      "did",
      "peer",
      "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
    );
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    const document = await castor.resolveDID(mypeerDID.toString());
    document.coreProperties.forEach((element) => {
      if (element instanceof VerificationMethods) {
        expect(element.values.length).to.equal(2);
        expect(element.values[0].id)
          .to.equal(element.values[0].publicKeyJwk?.kid)
          .to.equal("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ#key-2");
        expect(element.values[1].id)
          .to.equal(element.values[1].publicKeyJwk?.kid)
          .to.equal("did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ#key-1");
      }
    });
    expect(document.id.toString()).to.equal(mypeerDID.toString());
  });

  it("Create a PeerDID and verify a signature", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const publicKeys: PublicKey[] = [];
    const keyAgreementPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.Curve25519,
      curve: Curve.X25519,
      raw: base64url.baseDecode("COd9Xhr-amD7fuswWId2706JBUY_tmjp9eiNEieJeEE"),
    });

    const authenticationPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.ED25519,
      raw: base64url.baseDecode("JLIJQ5jlkyqtGmtOth6yggJLLC0zuRhUPiBhd1-rGPs"),
    });

    publicKeys.push(keyAgreementPrivateKey.publicKey());
    publicKeys.push(authenticationPrivateKey.publicKey());

    const services: Service[] = [
      new Service(
        "didcomm",
        ["DIDCommMessaging"],
        new ServiceEndpoint(
          "https://example.com/endpoint",
          [],
          ["did:example:somemediator#somekey"]
        )
      ),
    ];

    const did = await castor.createPeerDID(publicKeys, services);
    const text = "The quick brown fox jumps over the lazy dog";
    const signature =
      authenticationPrivateKey.isSignable() &&
      authenticationPrivateKey.sign(Buffer.from(text));

    expect(signature).to.not.be.equal(false);

    if (signature) {
      const result = await castor.verifySignature(
        did,
        Buffer.from(text),
        signature
      );

      expect(result).to.be.equal(true);
    }
  });

  it("Create a PeerDID and verify a signature from new keys", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const publicKeys: PublicKey[] = [];

    const authenticationPrivate = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.ED25519,
    });

    const keyAgreementPrivate = apollo.createPrivateKey({
      type: KeyTypes.Curve25519,
      curve: Curve.X25519,
    });

    publicKeys.push(authenticationPrivate.publicKey());
    publicKeys.push(keyAgreementPrivate.publicKey());

    const services: Service[] = [
      new Service(
        "didcomm",
        ["DIDCommMessaging"],
        new ServiceEndpoint(
          "https://example.com/endpoint",
          [],
          ["did:example:somemediator#somekey"]
        )
      ),
    ];
    const did = await castor.createPeerDID(publicKeys, services);
    const text = "The quick brown fox jumps over the lazy dog";

    const signature =
      authenticationPrivate.isSignable() &&
      authenticationPrivate.sign(Buffer.from(text));

    expect(signature).to.not.be.equal(false);

    if (signature) {
      const result = await castor.verifySignature(
        did,
        Buffer.from(text),
        signature
      );

      expect(result).to.be.equal(true);
    }
  });
});
