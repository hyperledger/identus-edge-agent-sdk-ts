import { describe, assert, it, expect, test, beforeEach, afterEach } from 'vitest';
import * as DIDParser from "../../src/castor/parser/DIDParser";

describe("DIDParser", () => {
  it("should test valid DIDs", () => {
    const didExample1 = "did:aaaaaa:aa:aaa";
    const didExample2 = "did:prism01:b2.-_%11:b4._-%11";
    const didExample3 =
      "did:prism:b6c0c33d701ac1b9a262a14454d1bbde3d127d697a76950963c5fd930605:Cj8KPRI7CgdtYXN0ZXIwEAFKLgoJc2VmsxEiECSTjyV7sUfCr_ArpN9rvCwR9fRMAhcsr_S7ZRiJk4p5k";

    const parsedDID1 = DIDParser.parse(didExample1);
    const parsedDID2 = DIDParser.parse(didExample2);
    const parsedDID3 = DIDParser.parse(didExample3);

    expect(parsedDID1.schema).to.equal("did");
    expect(parsedDID1.method).to.equal("aaaaaa");
    expect(parsedDID1.methodId).to.equal("aa:aaa");

    expect(parsedDID2.schema).to.equal("did");
    expect(parsedDID2.method).to.equal("prism01");
    expect(parsedDID2.methodId).to.equal("b2.-_%11:b4._-%11");

    expect(parsedDID3.schema).to.equal("did");
    expect(parsedDID3.method).to.equal("prism");
    expect(parsedDID3.methodId).to.equal(
      "b6c0c33d701ac1b9a262a14454d1bbde3d127d697a76950963c5fd930605:Cj8KPRI7CgdtYXN0ZXIwEAFKLgoJc2VmsxEiECSTjyV7sUfCr_ArpN9rvCwR9fRMAhcsr_S7ZRiJk4p5k"
    );
  });

  it("should test invalid DIDs", () => {
    const didExample1 = "idi:aaaaaa:aa:aaa";
    const didExample2 = "did:-prism-:aaaaa:aaaa";
    const didExample3 = "did:prism:aaaaaaaaaaa::";
    const didExample4 = "did::prism:aaaaaaaaaaa:aaaa";
    const didExample5 = "did:prism::aaaaaaaaaaa:bbbb";

    assert.throws(
      () => {
        DIDParser.parse(didExample1);
      },
      Error,
      "Invalid did string"
    );
    assert.throws(
      () => {
        DIDParser.parse(didExample2);
      },
      Error,
      "Invalid did string"
    );
    assert.throws(
      () => {
        DIDParser.parse(didExample3);
      },
      Error,
      "Invalid did string"
    );
    assert.throws(
      () => {
        DIDParser.parse(didExample4);
      },
      Error,
      "Invalid did string"
    );
    assert.throws(
      () => {
        DIDParser.parse(didExample5);
      },
      Error,
      "Invalid did string"
    );
  });
});
