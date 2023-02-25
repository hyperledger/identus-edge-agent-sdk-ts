import { expect } from "chai";
import Apollo from "../apollo/Apollo";
import { Curve, KeyPair, KeyCurve } from "../domain/models";
import { MnemonicWordList } from "../domain/models/WordList";

let apollo: Apollo;
let keyPair: KeyPair;

describe("Apollo Tests", () => {
  const testData = new Uint8Array([
    -107, 101, 68, 118, 27, 74, 29, 50, -32, 72, 47, -127, -49, 3, -8, -55, -63,
    -66, 46, 125,
  ]);

  beforeEach(() => {
    apollo = new Apollo();
  });

  it("It should test random mnemonic generation length always matches 24", () => {
    for (let i = 1; i <= 10; i++) {
      expect(apollo.createRandomMnemonics().length).to.equal(24);
    }
  });

  it("Should generate random mnemonics", () => {
    const seenWords: string[] = new Array(24);
    for (let i = 1; i <= 300; i++) {
      seenWords.push(
        ...apollo
          .createRandomMnemonics()
          .filter((newWord) => !seenWords.includes(newWord))
      );
    }
    // with great probability we'll see at least 75% of words after 3600 draws from 2048 possible
    expect(2048 - seenWords.length).to.be.lessThan(512);
  });
});
