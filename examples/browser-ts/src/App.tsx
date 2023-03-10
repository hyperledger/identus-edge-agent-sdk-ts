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
import Box from "./Box";

const apollo = new Apollo();
const castor = new Castor(apollo);

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

  if (keyPair.keyCurve.curve === Domain.Curve.X25519) {
    return <b>Signatures not supported for X25519 keys!</b>;
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

function Dids() {
  const [mnemonics] = useAtom(mnemonicsAtom);
  const [prismDid, setPrismDid] = React.useState<Domain.DID | null>(null);
  const [peerDid, setPeerDid] = React.useState<Domain.DID | null>(null);

  const exampleService = new Domain.Service("didcomm", ["DIDCommMessaging"], {
    uri: "https://example.com/endpoint",
    accept: ["didcomm/v2"],
    routingKeys: ["did:example:somemediator#somekey"],
  });

  async function createPrismDid() {
    if (!mnemonics) return;

    const seed = apollo.createSeed(mnemonics, "my-secret");
    const keyPair = apollo.createKeyPairFromKeyCurve(seed, {
      curve: Domain.Curve.SECP256K1,
    });
    const prismDID = await castor.createPrismDID(keyPair.publicKey, [
      exampleService,
    ]);

    setPrismDid(prismDID);
  }

  async function resolvePrismDid() {
    if (!prismDid) return;
    const didStr = prismDid.toString();
    const didDoc = await castor.resolveDID(didStr);

    console.log("DID DOC", didDoc);
  }

  async function createPeerDid() {
    if (!mnemonics) return;

    const seed = apollo.createSeed(mnemonics, "my-secret");
    const authKeyPair = apollo.createKeyPairFromKeyCurve(seed, {
      curve: Domain.Curve.ED25519,
    });
    const keyAgreementKeyPair = apollo.createKeyPairFromKeyCurve(seed, {
      curve: Domain.Curve.X25519,
    });
    const peerDID = await castor.createPeerDID(
      [authKeyPair, keyAgreementKeyPair],
      [exampleService]
    );

    setPeerDid(peerDID);
  }

  async function resolvePeerDid() {
    if (!peerDid) return;
    const didStr = peerDid.toString();
    const didDoc = await castor.resolveDID(didStr);

    console.log("DID DOC", didDoc);
  }

  return (
    <Box>
      <h3>DIDs</h3>
      <button onClick={createPrismDid}>Create PRISM DID</button>
      {prismDid ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: 100,
          }}
        >
          <b>PRISM DID: </b>
          <div
            style={{
              overflow: "auto",
              width: "100%",
            }}
          >
            {prismDid.toString()}
          </div>
          <button style={{ width: 120 }} onClick={resolvePrismDid}>
            Resolve
          </button>
        </div>
      ) : null}

      <Spacer />

      <button onClick={createPeerDid}>Create Peer DID</button>
      {peerDid ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: 100,
          }}
        >
          <b>Peer DID: </b>
          <div
            style={{
              overflow: "auto",
              width: "100%",
            }}
          >
            {peerDid.toString()}
          </div>
          <button style={{ width: 120 }} onClick={resolvePeerDid}>
            Resolve
          </button>
        </div>
      ) : null}
    </Box>
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

      <Dids />

      <Spacer />
    </div>
  );
}

export default App;
