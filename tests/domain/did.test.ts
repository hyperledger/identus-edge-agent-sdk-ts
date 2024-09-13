import { describe, it, assert, expect, test, beforeEach, afterEach } from 'vitest';
import { DID } from "../../src/domain";
import { InvalidDIDString } from "../../src/domain/models/errors/Castor";

describe("DID", () => {

  describe("toString", () => {
    test("returns {schema}:{method}:{methodId}", () => {
      const schema = "a";
      const method = "b";
      const methodId = "c";
      const did = new DID(schema, method, methodId);

      const result = did.toString();

      expect(result).to.be.a.string(`${schema}:${method}:${methodId}`);
    });
  });

  describe("from", () => {
    test("given DID - returns that DID", () => {
      const did = new DID("a", "b", "c");
      const result = DID.from(did);

      expect(result).to.eq(did);
    });

    test("given string - returns DID", () => {
      const schema = "q";
      const method = "w";
      const methodId = "e";
      const result = DID.from(`${schema}:${method}:${methodId}`);

      expect(result).to.be.instanceOf(DID);
      expect(result.schema).to.eq(schema);
      expect(result.method).to.eq(method);
      expect(result.methodId).to.eq(methodId);
    });
  });

  describe("fromString", () => {
    test("valid string - returns DID", () => {
      const schema = "a";
      const method = "s";
      const methodId = "d";
      const result = DID.fromString(`${schema}:${method}:${methodId}`);

      expect(result).to.be.instanceOf(DID);
      expect(result.schema).to.eq(schema);
      expect(result.method).to.eq(method);
      expect(result.methodId).to.eq(methodId);
    });


    describe("invalid", () => {
      test("empty string - throws", () => {
        assert.throws(
          () => DID.fromString(``),
          InvalidDIDString,
        );
      });

      // TODO - these aren't throwing
      test.skip("missing method + methodId - throws", () => {
        assert.throws(
          () => DID.fromString(`schema:`),
          InvalidDIDString,
        );
      });

      test.skip("missing methodId - throws", () => {
        assert.throws(
          () => DID.fromString(`schema:method`),
          InvalidDIDString,
        );
      });
    });
  });
});