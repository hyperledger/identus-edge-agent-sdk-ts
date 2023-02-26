import Apollo from "../../apollo/Apollo";
import Castor from "../../castor/Castor";
import { expect } from "chai";

import {
  PrivateKey,
  KeyCurve,
  Curve,
  PublicKey,
  KeyPair,
  Service,
} from "../../domain";
describe("DIDCreateTest", () => {
  it("Should create the peerDID correctly", () => {
    const verKeyStr = "z6LSci5EK4Ezue5QA72ZX71QUbXY2xr5ygRw7wM1WJigTNnd";
    const authKeyStr = "z6MkqgCXHEGr2wJZANPZGC8WFmeVuS3abAD9uvh7mTXygCFv";
    const serviceStr =
      "eyJpZCI6IkRJRENvbW1WMiIsInQiOiJkbSIsInMiOiJsb2NhbGhvc3Q6ODA4MiIsInIiOltdLCJhIjpbImRtIl19";

    const fakeVerPrivateKey: PrivateKey = {
      keyCurve: {
        curve: Curve.X25519,
      },
      value: Buffer.from("").toString("hex"),
    };

    const fakeAuthPrivateKey: PrivateKey = {
      keyCurve: {
        curve: Curve.X25519,
      },
      value: Buffer.from("").toString("hex"),
    };

    const verificationPubKey: PublicKey = {
      keyCurve: {
        curve: Curve.X25519,
      },
      value: Buffer.from(verKeyStr).toString("hex"),
    };

    const authenticationPubKey: PublicKey = {
      keyCurve: {
        curve: Curve.ED25519,
      },
      value: Buffer.from(authKeyStr).toString("hex"),
    };

    const verificationKeyPair: KeyPair = {
      keyCurve: {
        curve: Curve.ED25519,
      },
      publicKey: verificationPubKey,
      privateKey: fakeVerPrivateKey,
    };

    const authenticationKeyPair: KeyPair = {
      keyCurve: {
        curve: Curve.ED25519,
      },
      publicKey: authenticationPubKey,
      privateKey: fakeAuthPrivateKey,
    };

    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const keyPairs = [verificationKeyPair, authenticationKeyPair];
    const services: Service[] = [
      {
        id: "DIDCommV2",
        type: ["DIDCommMessaging"],
        serviceEndpoint: {
          uri: "localhost:8082",
          accept: ["DIDCommMessaging"],
          routingKeys: [],
        },
      },
    ];
    const did = castor.createPeerDID(keyPairs, services);
    expect(did.toString()).to.equal(
      `did:peer:2.E${verKeyStr}.V${authKeyStr}.S${serviceStr}`
    );
  });
});
