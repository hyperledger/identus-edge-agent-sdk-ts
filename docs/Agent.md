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
| Connection | :white_check_mark: | Atala PRISM proprietary |
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

await agent.start();
console.info(`Welcome to Atala PRISM Edge Agent [state=${agent.state}]`);
```
