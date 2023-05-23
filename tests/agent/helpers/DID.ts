import { DID } from "../../../src/domain";

export class DIDTest extends DID {
  constructor(testMethod = "test", testMethodId = "testableId") {
    super("peer", testMethod, testMethodId);
  }

  static fromIndex(index: number): DIDTest {
    const testMethod = `test${index}`;
    const testMethodId = `testableId${index}`;
    return new DIDTest(testMethod, testMethodId);
  }
}
