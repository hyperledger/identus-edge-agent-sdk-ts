import { expect } from "chai";

import {
  KeyPair,
  Service,
  DID,
  ServiceEndpoint,
  PublicKey,
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
import { X25519PrivateKey } from "../../src/apollo/utils/X25519PrivateKey";
import { X25519PublicKey } from "../../src/apollo/utils/X25519PublicKey";
import { Ed25519PrivateKey } from "../../src/apollo/utils/Ed25519PrivateKey";
import { Ed25519PublicKey } from "../../src/apollo/utils/Ed25519PublicKey";
import { X25519KeyPair } from "../../src/apollo/utils/X25519KeyPair";
import { Ed25519KeyPair } from "../../src/apollo/utils/Ed25519KeyPair";
import { Curve, KeyTypes } from "../../src/domain/models/Key";

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
      x: {
        data: "owBhCbktDjkfS6PdQddT0D3yjSitaSysP3YimJ_YgmA",
      },
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
    const validPeerDID = `did:peer:2.Ez6LSoHkfN1Y4nK9RCjx7vopWsLrMGNFNgTNZgoCNQrTzmb1n.Vz6MknRZmapV7uYZQuZez9n9N3tQotjRN18UGS68Vcfo6gR4h.SeyJyIjpbImRpZDpleGFtcGxlOnNvbWVtZWRpYXRvciNzb21la2V5Il0sInMiOiJodHRwczovL2V4YW1wbGUuY29tL2VuZHBvaW50IiwiYSI6W10sInQiOiJkbSJ9`;
    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const publicKeys: PublicKey[] = [];
    const keyAgreementPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.Curve25519,
      curve: Curve.X25519,
      raw: Buffer.from("COd9Xhr-amD7fuswWId2706JBUY_tmjp9eiNEieJeEE"),
    });

    const authenticationPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.ED25519,
      raw: Buffer.from("JLIJQ5jlkyqtGmtOth6yggJLLC0zuRhUPiBhd1-rGPs"),
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
      "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
    );
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    const document = await castor.resolveDID(mypeerDID.toString());
    expect(document.id.toString()).to.equal(mypeerDID.toString());
  });

  it("Create a PeerDID and verify a signature", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const publicKeys: PublicKey[] = [];
    const keyAgreementPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.Curve25519,
      curve: Curve.X25519,
      raw: Buffer.from("COd9Xhr-amD7fuswWId2706JBUY_tmjp9eiNEieJeEE"),
    });

    const authenticationPrivateKey = apollo.createPrivateKey({
      type: KeyTypes.EC,
      curve: Curve.ED25519,
      raw: Buffer.from("JLIJQ5jlkyqtGmtOth6yggJLLC0zuRhUPiBhd1-rGPs"),
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
