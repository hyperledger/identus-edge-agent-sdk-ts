/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * WARNING: This is an example using an encrypted inMemory storage.
 * Checkout Community maintained NPM package @pluto-encrypted/database for more DB wrappers.
 */
import InMemory from "@pluto-encrypted/inmemory";
import { Database } from "@pluto-encrypted/database";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import * as jose from "jose";
import { useAtom } from "jotai";
import SDK from "@atala/prism-wallet-sdk";
import { mnemonicsAtom } from "./state";
import { trimString } from "./utils";
import Spacer from "./Spacer";
import { Box } from "./Box";

const BasicMessage = SDK.BasicMessage;
const ListenerKey = SDK.ListenerKey;
const OfferCredential = SDK.OfferCredential;
const IssueCredential = SDK.IssueCredential;
const RequestPresentation = SDK.RequestPresentation;

const apollo = new SDK.Apollo();
const castor = new SDK.Castor(apollo);
const defaultMediatorDID = "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19";

const useSDK = (mediatorDID: SDK.Domain.DID, pluto: SDK.Domain.Pluto) => {
  const agent = SDK.Agent.initialize({ mediatorDID, pluto });

  return { agent, pluto };
};

function Mnemonics() {
  const mnemonicState = useAtom(mnemonicsAtom);
  const [mnemonics, setMnemonics] = mnemonicState;

  function createMnemonics() {
    (setMnemonics as any)(apollo.createRandomMnemonics());
  }

  return (
    <Box>
      <h2>Mnemonics and keys</h2>

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
    </Box>
  );
}

function KeyPair({ curve = SDK.Domain.Curve.SECP256K1 }: { curve?: SDK.Domain.Curve; }) {
  const [mnemonics] = useAtom(mnemonicsAtom);
  // let [keyPair, setKeyPair] = React.useState<Domain.KeyPair | null>(null);
  const [keyPair, setKeyPair] = React.useState<SDK.Domain.KeyPair>();

  function createKeyPair() {
    if (!mnemonics) return;

    const seed = apollo.createSeed(mnemonics, "my-secret");

    const type = curve === SDK.Domain.Curve.X25519 ? SDK.Domain.KeyTypes.Curve25519 : SDK.Domain.KeyTypes.EC;
    const privateKey = apollo.createPrivateKey({
      type: type,
      curve: curve,
      seed: Buffer.from(seed.value).toString("hex"),
    });

    setKeyPair({
      curve: curve,
      privateKey: privateKey,
      publicKey: privateKey.publicKey()
    });
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
      <h3>{curve} key pair</h3>
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
              <b>Curve:</b> {keyPair.curve}
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

function Signatures({ keyPair }: { keyPair: SDK.Domain.KeyPair; }) {
  const [signatureEncoded, setSignatureEncoded] = React.useState<string | undefined>(undefined);
  const [isSignatureValid, setIsSignatureValid] = React.useState<boolean | undefined>(undefined);

  function signData() {
    if (keyPair.privateKey.isSignable()) {
      const helloWorldSig = keyPair.privateKey.sign(Buffer.from("hello world"));
      setSignatureEncoded(jose.base64url.encode(helloWorldSig));
    }
  }

  function verifySignature() {
    if (!signatureEncoded) return;

    let isValid;

    try {
      if (keyPair.publicKey.canVerify()) {
        isValid = keyPair.publicKey.verify(Buffer.from("hello world"), Buffer.from(jose.base64url.decode(signatureEncoded)));
      }

    } catch (e) {
      console.warn("Failed to validate signature", e);
      isValid = false;
    }

    setIsSignatureValid(isValid);
  }

  if (keyPair.curve === SDK.Domain.Curve.X25519) {
    return <b>Signatures not supported for X25519 keys!</b>;
  }

  return (
    <div>
      <button onClick={signData}>Sign</button>
      <p>Signature of &quot;hello world&quot;:</p>
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
  const [prismDid, setPrismDid] = React.useState<SDK.Domain.DID | null>(null);
  const [peerDid, setPeerDid] = React.useState<SDK.Domain.DID | null>(null);

  const exampleService = new SDK.Domain.Service("didcomm", ["DIDCommMessaging"], {
    uri: "https://example.com/endpoint",
    accept: ["didcomm/v2"],
    routingKeys: ["did:example:somemediator#somekey"],
  });

  async function createPrismDid() {
    if (!mnemonics) return;

    const seed = apollo.createSeed(mnemonics, "my-secret");

    const privateKey = apollo.createPrivateKey({
      type: SDK.Domain.KeyTypes.EC,
      curve: SDK.Domain.Curve.SECP256K1,
      seed: Buffer.from(seed.value).toString("hex"),
    });


    const prismDID = await castor.createPrismDID(privateKey.publicKey(), [
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

    const authPrivateKey = apollo.createPrivateKey({
      type: SDK.Domain.KeyTypes.EC,
      curve: SDK.Domain.Curve.ED25519,
    });

    const keyAgreementPrivateKey = apollo.createPrivateKey({
      type: SDK.Domain.KeyTypes.Curve25519,
      curve: SDK.Domain.Curve.X25519,
    });

    const peerDID = await castor.createPeerDID(
      [authPrivateKey.publicKey(), keyAgreementPrivateKey.publicKey()],
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

const OOB: React.FC<{ agent: SDK.Agent, pluto: SDK.Domain.Pluto; }> = props => {
  const CONNECTION_EVENT = ListenerKey.CONNECTION;
  const [connections, setConnections] = React.useState<Array<any>>([]);
  const [oob, setOOB] = React.useState<string>();
  const handleConnections = useCallback((event: any) => {
    setConnections([...connections, event]);
  }, []);
  useEffect(() => {
    props.agent.addListener(CONNECTION_EVENT, handleConnections);
    return () => {
      props.agent.removeListener(CONNECTION_EVENT, handleConnections);
    };
  }, []);
  const handleOnChange = (e: any) => {
    setOOB(e.target.value);
  };
  async function handleParseOOB() {
    if (!oob) {
      return;
    }
    const parsed = await props.agent.parseOOBInvitation(new URL(oob));
    await props.agent.acceptInvitation(parsed);
  }

  const connection = connections.at(0);

  return <>
    <p>PRISM Agent connection</p>

    <p>
      <input type="text" value={oob ?? ""} onChange={handleOnChange} />
    </p>
    <button style={{ width: 120 }} onClick={handleParseOOB}>Create connection</button>

    {!!connection && (
      <>
        <p>Stored OOB Connection at <b>{connection.name}</b></p>
      </>
    )}
  </>;
};

const Agent: React.FC<{ pluto: SDK.Domain.Pluto }> = props => {
  const [mediatorDID, setMediatorDID] = useState<string>(defaultMediatorDID);

  const sdk = useMemo(() => useSDK(SDK.Domain.DID.fromString(mediatorDID), props.pluto), [mediatorDID]);

  const { pluto, agent } = sdk;

  const [state, setState] = React.useState<string>(agent.state);
  const [error, setError] = React.useState<any>();

  const [newMessage, setNewMessage] = React.useState<any>([]);
  const [messages, setMessages] = React.useState<SDK.Domain.Message[]>([]);

  const handleMessages = async (newMessages: SDK.Domain.Message[]) => {
    const joinedMessages = [...messages, ...newMessages];

    setMessages(joinedMessages);
    setNewMessage(joinedMessages.map(() => ""));

    const credentialOffers = newMessages.filter((message) => message.piuri === "https://didcomm.org/issue-credential/3.0/offer-credential");
    const issuedCredentials = newMessages.filter((message) => message.piuri === "https://didcomm.org/issue-credential/3.0/issue-credential");
    const requestPresentations = newMessages.filter((message) => message.piuri === "https://didcomm.atalaprism.io/present-proof/3.0/request-presentation");

    if (requestPresentations.length) {
      for (const requestPresentation of requestPresentations) {
        const lastCredentials = await pluto.getAllCredentials();
        const lastCredential = lastCredentials.at(-1);
        const requestPresentationMessage = RequestPresentation.fromMessage(requestPresentation);
        try {
          if (lastCredential === undefined) throw new Error("last credential not found");

          const presentation = await agent.createPresentationForRequestProof(requestPresentationMessage, lastCredential);
          await agent.sendMessage(presentation.makeMessage());
        } catch (err) {
          console.log("continue after err", err);
        }
      }
    }
    if (credentialOffers.length) {
      for (const credentialOfferMessage of credentialOffers) {
        const credentialOffer = OfferCredential.fromMessage(credentialOfferMessage);

        const requestCredential = await agent.prepareRequestCredentialWithIssuer(credentialOffer);
        try {
          await agent.sendMessage(requestCredential.makeMessage());
        } catch (err) {
          console.log("continue after err", err);
        }
      }
    }
    if (issuedCredentials.length) {
      for (const issuedCredential of issuedCredentials) {
        const issueCredential = IssueCredential.fromMessage(issuedCredential);
        await agent.processIssuedCredentialMessage(issueCredential);
      }
    }

  };

  useEffect(() => {
    agent.addListener(ListenerKey.MESSAGE, handleMessages);
    return () => {
      agent.removeListener(ListenerKey.MESSAGE, handleMessages);
    };
  });

  const handleOnChange = (e: any, i: number) => {
    setNewMessage([
      ...newMessage.map((message: any, z: number) => {
        if (z === i) {
          return e.target.value;
        }
        return message;
      })
    ]);
  };

  const handleStart = async () => {
    setState("starting");
    try {
      if (!mediatorDID) {
        throw new Error("Set mediator did first before starting");
      }

      const status = await agent.start();
      const mediator = agent.currentMediatorDID;
      console.log("STARTING: ", mediatorDID, mediator);

      if (!mediator) {
        throw new Error("Mediator not available");
      }

      const secondaryDID = await agent.createNewPeerDID(
        [],
        true
      );
      const testMessage = new BasicMessage(
        { content: "Test Message" },
        secondaryDID,
        secondaryDID
      ).makeMessage();

      try {
        await agent.sendMessage(testMessage);
      } catch (err) {
        console.log("Safe to ignore, mediator returns null on successfully receiving the message, unpack fails.");
      }

      setState(status);
    } catch (e) {
      setError(e);
      setState("failed");
      throw e;
    }
  };

  const handleSend = async (responseMessageIndex: number) => {
    const text = newMessage[responseMessageIndex];
    setNewMessage(newMessage.map((message: any, i: number) => (i === responseMessageIndex) ? "" : message));
    const message = messages[responseMessageIndex];
    // ok for demo
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const from = message?.from as SDK.Domain.DID;
    try {
      await agent.sendMessage(
        new BasicMessage(
          { content: text },
          from,
          from
        ).makeMessage()

      );
    }
    catch (e) { }
  };

  const handleStop = async () => {
    setState("stopping");
    await agent.stop();
    setState("stopped");
  };

  return (
    <Box>
      <h2>Agent</h2>
      <p>
        <b>Status:</b>&nbsp; {state}
      </p>
      <div>
        {state === "stopped" && (
          <>
            <div>
              Set the mediatorDID here:<br />
              <input
                type="text"
                style={{ width: "75%", padding: "5px" }}
                onChange={(e) => {
                  try {
                    SDK.Domain.DID.fromString(e.target.value);
                    setMediatorDID(e.target.value);
                  } catch (err) {
                    console.log(err);
                  }
                }} value={mediatorDID} />
            </div>
            <button style={{ width: 120 }} onClick={handleStart}>Start</button>
          </>
        )}

        {state === "running" && (
          <>
            <button style={{ width: 120 }} onClick={handleStop}>Stop</button>
            <hr />
            <OOB agent={agent} pluto={pluto} />

            {messages.map((message, i) => {
              const body = JSON.parse(message.body);

              // if (message.piuri === "https://atalaprism.io/mercury/connections/1.0/response") {
              //   return <div key={`responseField${i}`}>
              //     <p>Connection Established with {message.from!.toString()} (Goal: {body.goal})?</p>
              //     <p>Message {message.id} {JSON.stringify(message)}</p>
              //   </div>;
              // }

              const parsed = { ...message };
              if (typeof parsed.body === "string") {
                (parsed as any).body = JSON.parse(message.body);
              }

              const attachments = message.attachments.reduce((acc, x) => {
                if ("base64" in x.data) {
                  if (x.format === "prism/jwt") {
                    const decodedFirst = Buffer.from(x.data.base64, "base64").toString();
                    const decoded = Buffer.from(decodedFirst.split(".")[1], "base64").toString();
                    const parsed = JSON.parse(decoded);

                    return acc.concat(parsed);
                  }

                  const decoded = Buffer.from(x.data.base64, "base64").toString();
                  const parsed = JSON.parse(decoded);

                  return acc.concat(parsed);
                }

                return acc;
              }, []);

              return <Box key={`responseField${i}`}>
                <div>
                  <b>Message: </b> {message.id}
                  {message.piuri === "https://atalaprism.io/mercury/connections/1.0/response" && (
                    <p>Connection Established with {message.from!.toString()} (Goal: {body.goal})?</p>
                  )}
                  <pre style={{
                    background: "lightBlue",
                    textAlign: "left",
                    wordWrap: "break-word",
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap",
                  }}
                  >
                    {JSON.stringify(parsed, null, 2)}

                  </pre>
                  {attachments.length > 0 && (
                    <pre style={{
                      background: "lightCyan",
                      textAlign: "left",
                      wordWrap: "break-word",
                      wordBreak: "break-all",
                      whiteSpace: "pre-wrap",
                    }}
                    >
                      <b>Attachments:</b>
                      {attachments.map(x => JSON.stringify(x, null, 2))}
                    </pre>
                  )}

                </div>

                <input type="text" value={newMessage[i]} onChange={(e) => handleOnChange(e, i)} />

                <button style={{ width: 120 }} onClick={() => {
                  handleSend(i);
                }}>Respond</button>
              </Box>;
            })}
          </>
        )}
      </div>

      {error instanceof Error && (
        <pre>
          Error: {error.message}
        </pre>
      )}
    </Box>
  );
};


function App() {
  const [pluto, setPluto] = useState<SDK.Domain.Pluto>()

  useEffect(() => {
    if (!pluto) {
      const defaultPassword = new Uint8Array(32).fill(1);
      Database.createEncrypted(
        {
          name: `my-db`,
          encryptionKey: defaultPassword,
          storage: InMemory,
        }
      ).then((db) => setPluto(db as any))
    }
  }, [pluto, setPluto])

  return (
    <div className="App">
      <h1>Atala PRISM Wallet SDK Usage Examples</h1>
      {pluto && <Agent pluto={pluto} />}
      <Mnemonics />
      <Spacer />
      <KeyPair curve={SDK.Domain.Curve.SECP256K1} />
      <KeyPair curve={SDK.Domain.Curve.ED25519} />
      <KeyPair curve={SDK.Domain.Curve.X25519} />
      <Dids />
      <Spacer />
    </div>
  );
}

export default App;
