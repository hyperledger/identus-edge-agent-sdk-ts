# Agent

Agent is a module which brings together all the building blocks of the PRISM 
Wallet SDK - Apollo, Castor, Pluto, Mercury, and Pollux - to provide a 
streamlined experience for developers to build Edge Agents and applications on
top of it. Agent implements core capabilities of an Edge Agent, such as DID 
management and support for a range of DIDComm protocols, including mediation, 
proof presentation, issue credential, and out-of-band messages. DIDComm related
functionality is based on the **DIDComm V2** specification.

## DIDComm Protocol Support

| Protocol | Supported | Notes |
| --- | :--: | -- |
| [Mediator Coordinator](https://didcomm.org/mediator-coordination/2.0/) | :white_check_mark: | -- |
| Connection | :white_check_mark: | -- |
| [DIDComm V2 Issue Credential](https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential) | :white_check_mark: | -- |
| [DIDComm V2 Present Proof](https://github.com/decentralized-identity/waci-didcomm/blob/main/present_proof/present-proof-v3.md) | :white_check_mark: | -- |

## Agent Setup

Assuming the Wallet SDK has been installed as a dependency, here's an example of
how to import and init Agent module:

```ts
import {
    Apollo,
    Castor,
    Pluto,
    Mercury,
    Agent,
    Domain,
    ApiImpl,
    DidCommWrapper,
    PublicMediatorStore,
    BasicMediatorHandler,
    ConnectionsManager
} from '@input-output-hk/atala-prism-wallet-sdk';

const apollo = new Apollo();
const castor = new Castor(apollo);
const pluto = new Pluto({
    type: 'sqljs',
    synchronize: true,
    location: "pluto",
    sqlJsConfig: {
        locateFile: (filename: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.2.1/dist/${filename}`
    },
    autoSave: true,
    useLocalForage: true,
});

const api = new ApiImpl();
const didCommWrapper = DidCommWrapper(apollo, castor, pluto);
const mercury = new Mercury(castor, didCommWrapper, api);

const mediatorDID = Domain.DID.fromString(
    "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
);
const mediatorStore = new PublicMediatorStore(pluto);
const mediatorHandler = new BasicMediatorHandler(mediatorDID, mercury, mediatorStore);
const connectionManager = new ConnectionsManager(castor, mercury, pluto, mediatorHandler);

const seedAndMnemonics = apollo.createRandomSeed();
const agent = new Agent(
    apollo,
    castor,
    pluto,
    mercury,
    mediatorHandler,
    connectionManager,
    seedAndMnemonics.seed
);

try {
    await agent.start();
    console.info(`Welcome to Atala PRISM Edge Agent [state=${agent.state}]`);
} catch (e) {
    console.error("Failed to start agent", e);
}
```

Quite a lot of things are happening here, so let's break it down:
- `Apollo`, `Castor`, `Pluto`, `Mercury`, and `Agent` are the main building 
blocks of the SDK. First three have already been covered in more detail in the 
previous sections, as they are user-facing modules, usable on their own. Other 
modules could be considered as internal modules, and are not meant to be used 
directly.
- `Mercury` is a module which deals with DIDComm V2 messaging, and is used 
primarily by the `Agent` to handle DIDComm messages.
- As already mentioned, `Domain` is a set of domain-specific types, models and 
utilities, usable in different contexts.
- Edge Agents are not able to provide highly-available service endpoints by 
themselves. That's why mediators are used to provide public endpoints and 
mailboxes to agents. `PublicMediatorStore`, `BasicMediatorHandler`, and 
`ConnectionsManager` are abstractions for interacting with mediators.
- Once an instance of `Agent` is prepared, `start` method is called to start the
agent and mediator services.

## Establishing Connection 
Let's see how to establish a connection with another agent and what it means.

In DIDComm Agent's world, a connection is nothing more than a pair of DIDs and
a label. Agent creates a new `peer` DID for each connection, and stores it in 
the wallet storage (Pluto), along with the DID of the other agent and the 
human-readable label used to help users navigate through the list of connections.

High-level steps for establishing a connection are as follows:

- An agent, typically a cloud agent representing an issuer or verifier, creates a
new DID for connection.
- New DID and usually a human-readable label, used to represent the inviter, are
used as inputs to create an out-of-band invitation message. The invitation 
message is encoded in appropriate format (QR code, deep link, etc.) and shared 
with the other party.
- Other agent, typically an edge agent representing a holder, receives the 
invitation and if accepted, creates a new DID for connection and sends a response
back to the inviter.
- Now both agents have a pair of DIDs and can store new connection to be used in
future interactions.

### Example code

Here is an example of how to establish a connection with another agent assuming
that the invitation is received as a QR code and that agent has already been 
started:

```ts
// ... QR code scaned and decoded
const qrCodeDecoded = "https://domain.com/path?_oob=eyJpZCI6ImUzNzZlZGYyLWVmNmQtNDk4ZS1hMTk3LWMwZTI2MGQxNTA2OCIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNoQUFxY1ZlZXRQNmlrdHk1bXl5OFFweE5wVlk3NEF0YUZuVmFrOFRwYnRkSy5WejZNa2dlYUVWZ0FVSHoyQWczaUZLRDIxMjZTR0tERnpIS28zSEFxYmM4eExOM1paLlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjRG92TDJodmMzUXVaRzlqYTJWeUxtbHVkR1Z5Ym1Gc09qZ3dPREF2Wkdsa1kyOXRiU0lzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6ImNvbm5lY3QiLCJnb2FsIjoiRXN0YWJsaXNoIGEgdHJ1c3QgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byBwZWVycyIsImFjY2VwdCI6W119fQ==";
const oobMessage = await agent.parseOOBInvitation(qrCodeDecoded);

// check if received message is a connection invitation
if (
    oobMessage.type === "https://didcomm.org/out-of-band/2.0/invitation" &&
    oobMessage.body.goal_code === "connect"
) {
    // accept invitation: this will create a new DID for connection and send response messege to the other agent
    await agent.acceptDIDCommInvitation(message);
    console.info(
        `Connection established with ${oobMessage.body.label}`
    );
}
```

## Receiving a credential
Coming soon...

## Presenting a proof in verification flow
Coming soon...
