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
