import React from "react";
import "./App.css";
import {
  Apollo,
  Castor,
  Domain,
} from "@input-output-hk/atala-prism-wallet-sdk";

const apollo = new Apollo();
const castor = new Castor(apollo);
let mnemonics = apollo.createRandomMnemonics();
let seedWords = apollo.createRandomSeed();
let keys = apollo.createKeyPairFromKeyCurve(seedWords.seed, {
  curve: Domain.Curve.SECP256K1,
});
console.log("mnemonics", mnemonics);
console.log("seed words", seedWords);
console.log("Keys", keys);

function MnemonicsAndKeys() {
  let [mnemonics, setMnemonics] = React.useState<string[]>([]);

  function createMnemonics() {
    setMnemonics(apollo.createRandomMnemonics());
  }

  return (
    <>
      <button onClick={createMnemonics}>Generate random mnemonics</button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {mnemonics.map((word, i) => (
          <span
            style={{
              margin: 7,
              padding: "4px 10px",
              background: "lightgray",
              borderRadius: 6,
            }}
          >
            {i + 1}. {word}
          </span>
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Atala PRISM Wallet SDK Usage Examples</h1>
      <h2>Mnemonics and keys</h2>
      <MnemonicsAndKeys />
      <code>const a = 2 + 2;</code>
    </div>
  );
}

export default App;
