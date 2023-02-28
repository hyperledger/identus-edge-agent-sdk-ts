import { expect } from "chai";

import {
  PrivateKey,
  Curve,
  PublicKey,
  KeyPair,
  Service,
  DID,
} from "../../domain";
import Apollo from "../../apollo/Apollo";

import Castor from "../../castor/Castor";
import {
  VerificationMaterialAuthentication,
  VerificationMaterialFormatPeerDID,
  VerificationMethodTypeAgreement,
  VerificationMethodTypeAuthentication,
} from "../../peer-did/types";
import {
  MultiCodec,
  KeyType as PeerDIDKeyType,
  Codec,
} from "../../peer-did/helpers/Multicodec";
import { PeerDIDResolver } from "../../castor/resolver/PeerDIDResolver";

describe("DIDCreateTest", () => {
  it("Should test milticodec coding", () => {
    const testData = Uint8Array.from(Buffer.from("test1"));

    const multicodec = new MultiCodec(testData);

    expect(testData).to.deep.equal(multicodec.decode()[1]);
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
    const validPeerDID = `did:peer:2.Ez6LSoHkfN1Y4nK9RCjx7vopWsLrMGNFNgTNZgoCNQrTzmb1n.Vz6MknRZmapV7uYZQuZez9n9N3tQotjRN18UGS68Vcfo6gR4h.SeyJyIjpbImRpZDpleGFtcGxlOnNvbWVtZWRpYXRvciNzb21la2V5Il0sInMiOiJodHRwczovL2V4YW1wbGUuY29tL2VuZHBvaW50IiwiYSI6W10sInQiOiJkbSJ9`;
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    const agreementKeyCurve = {
      keyCurve: {
        curve: Curve.X25519,
      },
    };
    const authenticationKeyCurve = {
      keyCurve: {
        curve: Curve.ED25519,
      },
    };
    let KeyAgreementKeyPair: KeyPair = {
      ...agreementKeyCurve,
      privateKey: {
        ...agreementKeyCurve,
        value: "COd9Xhr-amD7fuswWId2706JBUY_tmjp9eiNEieJeEE",
      },
      publicKey: {
        ...agreementKeyCurve,
        value: "rI3CjEk-yaFi5bQTavOmV25EJHQnDQJeIi4OV6p_f2U",
      },
    };

    let authenticationKeyPair: KeyPair = {
      ...authenticationKeyCurve,
      privateKey: {
        ...authenticationKeyCurve,
        value: "JLIJQ5jlkyqtGmtOth6yggJLLC0zuRhUPiBhd1-rGPs",
      },
      publicKey: {
        ...authenticationKeyCurve,
        value: "dm5f2GdR5BaHpRxB8bTElvE_0gIC2p404Msx9swJ914",
      },
    };

    const keyPairs = [KeyAgreementKeyPair, authenticationKeyPair];
    const services: Service[] = [
      {
        id: "didcomm",
        type: ["DIDCommMessaging"],
        serviceEndpoint: {
          uri: "https://example.com/endpoint",
          accept: [],
          routingKeys: ["did:example:somemediator#somekey"],
        },
      },
    ];
    const did = await castor.createPeerDID(keyPairs, services);
    expect(did.toString()).to.equal(validPeerDID);
  });
  it("Should resolver peerdid correctly", async () => {
    let mypeerDID = new DID(
      "did",
      "peer",
      "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
    );
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    let document = await castor.resolveDID(mypeerDID.toString());
    expect(document.id.toString()).to.equal(mypeerDID.toString());
  });
});
