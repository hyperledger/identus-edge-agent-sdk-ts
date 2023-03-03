import { expect } from "chai";

import { Curve } from "../../domain";
import Apollo from "../../apollo/Apollo";
import Castor from "../../castor/Castor";

describe("PRISMDID CreateTest", () => {
  it("Should correctly create a prismDID from an existing HexKey", async () => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);

    const didExample =
      "did:prism:82ef2865dc98665aac07f099a8d07d715923d7ac4c2a697c0297b13089efd1f2:CmYKZBJiCg1tYXN0ZXIoaW5kZXgpEAFKTwoJU2VjcDI1NmsxEkIwMzM0YjljZGU2MTQ5MGIwOTIwMDkyYzhlOWEyZDc0NTMzZDFjNmNiNDIyY2Y1MDQyM2E0ZTAwNmIwMTUwODc5MzA";
    const resolvedDID = await castor.resolveDID(didExample);

    const pubHex =
      "0434b9cde61490b0920092c8e9a2d74533d1c6cb422cf50423a4e006b015087930e4f9f7e496b1c8156ee92a44fc8be624b178be5d78b9877d5ccd431a54295ca7";

    const masterPublicKey = apollo.compressedPublicKeyFromPublicKey({
      keyCurve: {
        curve: Curve.SECP256K1,
      },
      value: pubHex,
    }).uncompressed;

    const createdDID = await castor.createPrismDID(masterPublicKey, []);
    const resolveCreated = await castor.resolveDID(createdDID.toString());

    expect(resolveCreated.id.toString()).to.be.equal(resolvedDID.id.toString());
  });
});
