import * as React from "react";
import "./App.css";
import {
  Apollo,
  Castor,
  Domain,
} from "@input-output-hk/atala-prism-wallet-sdk";
import { useAtom } from "jotai";
import { mnemonicsAtom } from "./state";
import { trimString } from "./utils";
import Spacer from "./Spacer";
import * as jose from "jose";

const apollo = new Apollo();
const castor = new Castor(apollo);
// let mnemonics = apollo.createRandomMnemonics();
// let seed = apollo.createSeed(mnemonics, "my-secret");
// let keys = apollo.createKeyPairFromKeyCurve(seed, {
//   curve: Domain.Curve.SECP256K1,
// });
// console.log("mnemonics", mnemonics);
// console.log("seed words", seed);
// console.log("Keys", keys);

function Mnemonics() {
  let [mnemonics, setMnemonics] = useAtom(mnemonicsAtom);

  function createMnemonics() {
    setMnemonics(apollo.createRandomMnemonics());
  }

  return (
    <>
      <button onClick={createMnemonics}>Generate random mnemonics</button>
      <Spacer />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {mnemonics
          ? mnemonics.map((word, i) => (
              <span
                key={i + word}
                style={{
                  margin: 7,
                  padding: "4px 10px",
                  background: "lightgray",
                  borderRadius: 6,
                }}
              >
                {i + 1}. {word}
              </span>
            ))
          : null}
      </div>
    </>
  );
}

function KeyPair({ curve = Domain.Curve.SECP256K1 }: { curve?: Domain.Curve }) {
  let [mnemonics] = useAtom(mnemonicsAtom);
  // let [keyPair, setKeyPair] = React.useState<Domain.KeyPair | null>(null);
  let [keyPair, setKeyPair] = React.useState<Domain.KeyPair>();

  function createKeyPair() {
    if (!mnemonics) return;

    let seed = apollo.createSeed(mnemonics, "my-secret");
    let keyPair = apollo.createKeyPairFromKeyCurve(seed, {
      curve,
    });
    setKeyPair(keyPair);
  }

  return (
    <div
      style={{
        borderRadius: 10,
        border: "1px solid lightgray",
        padding: 20,
        margin: 20,
      }}
    >
      <h3> {curve} key pair</h3>
      <button onClick={createKeyPair}>Generate key pair</button>
      <Spacer />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {keyPair ? (
          <div>
            <p>
              <b>Curve:</b> {keyPair.keyCurve.curve}
            </p>
            <p>
              <b>Public key:</b>{" "}
              {trimString(jose.base64url.encode(keyPair.publicKey.value), 50)}
            </p>
            <p>
              <b>Private key:</b>{" "}
              {trimString(jose.base64url.encode(keyPair.privateKey.value), 50)}
            </p>

            <hr />

            <Signatures keyPair={keyPair} />
          </div>
        ) : (
          <p>No key pair created</p>
        )}
      </div>
    </div>
  );
}

function Signatures({ keyPair }: { keyPair: Domain.KeyPair }) {
  let [signatureEncoded, setSignatureEncoded] = React.useState<
    string | undefined
  >(undefined);
  let [isSignatureValid, setIsSignatureValid] = React.useState<
    boolean | undefined
  >(undefined);

  function signData() {
    let helloWorldSig = apollo.signStringMessage(
      keyPair.privateKey,
      "hello world"
    );

    setSignatureEncoded(jose.base64url.encode(helloWorldSig.value));
  }

  function verifySignature() {
    if (!signatureEncoded) return;

    let isValid;

    try {
      isValid = apollo.verifySignature(
        keyPair.publicKey,
        new TextEncoder().encode("hello world"),
        jose.base64url.decode(signatureEncoded)
      );
    } catch (e) {
      console.warn("Failed to validate signature", e);
      isValid = false;
    }

    setIsSignatureValid(isValid);
  }

  return (
    <div>
      <button onClick={signData}>Sign</button>
      <p>Signature of "hello world":</p>
      <textarea
        value={signatureEncoded}
        onChange={(e) => setSignatureEncoded(e.target.value)}
      />
      <Spacer />
      <button onClick={verifySignature}>Verify signature</button>
      <p>
        {typeof isSignatureValid === "boolean"
          ? `Signature is ${isSignatureValid ? "valid" : "invalid"}`
          : null}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Atala PRISM Wallet SDK Usage Examples</h1>
      <h2>Mnemonics and keys</h2>
      <Mnemonics />

      <Spacer />

      <KeyPair curve={Domain.Curve.SECP256K1} />
      <KeyPair curve={Domain.Curve.ED25519} />
      <KeyPair curve={Domain.Curve.X25519} />
    </div>
  );
}

export default App;
