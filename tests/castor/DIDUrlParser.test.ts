import { describe, it, expect, test, beforeEach, afterEach } from 'vitest';

import * as DIDUrlParser from "../../src/castor/parser/DIDUrlParser";

describe("DIDUrlParser", () => {
  it("should test valid URLs", () => {
    const didExample1 = "did:example:123456:adsd/path?query=something#fragment";
    const didExample2 =
      "did:example:123456/path?query=something&query2=something#0";
    const didExample3 = "did:example:123456/path/jpg.pp?query=something";

    const parsedDID1 = DIDUrlParser.parse(didExample1);
    const parsedDID2 = DIDUrlParser.parse(didExample2);
    const parsedDID3 = DIDUrlParser.parse(didExample3);
    const expectedMap = new Map([["query", "something"]]);
    const secondaryExpectedMap = new Map([
      ["query", "something"],
      ["query2", "something"],
    ]);

    expect(parsedDID1.did.schema).to.equal("did");
    expect(parsedDID1.did.method).to.equal("example");
    expect(parsedDID1.did.methodId).to.equal("123456:adsd");
    expect(parsedDID1.path).to.deep.equal(["path"]);
    expect(parsedDID1.parameters.keys()).to.deep.equal(expectedMap.keys());
    expect(parsedDID1.parameters.entries()).to.deep.equal(
      expectedMap.entries()
    );

    expect(parsedDID1.fragment).to.equal("fragment");

    expect(parsedDID2.did.schema).to.equal("did");
    expect(parsedDID2.did.method).to.equal("example");
    expect(parsedDID2.did.methodId).to.equal("123456");
    expect(parsedDID2.path).to.deep.equal(["path"]);
    expect(parsedDID2.parameters.keys()).to.deep.equal(
      secondaryExpectedMap.keys()
    );
    expect(parsedDID2.parameters.entries()).to.deep.equal(
      secondaryExpectedMap.entries()
    );
    expect(parsedDID2.fragment).to.equal("0");

    expect(parsedDID3.did.schema).to.equal("did");
    expect(parsedDID3.did.method).to.equal("example");
    expect(parsedDID3.did.methodId).to.equal("123456");
    expect(parsedDID3.path).to.deep.equal(["path", "jpg.pp"]);
    expect(parsedDID3.parameters.keys()).to.deep.equal(expectedMap.keys());

    expect(parsedDID3.parameters.entries()).to.deep.equal(
      expectedMap.entries()
    );
    expect(parsedDID3.fragment).to.equal("");
  });
});
