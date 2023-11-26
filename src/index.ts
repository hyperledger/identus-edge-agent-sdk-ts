import "./globals";

export { default as Apollo } from "./apollo/Apollo";
export { default as Castor } from "./castor/Castor";
export * as Domain from "./domain";
export { default as Mercury } from "./mercury/Mercury";
export { default as Pollux } from "./pollux/Pollux";
export { default as Agent } from "./prism-agent/Agent";
export * from "./prism-agent/protocols/other/BasicMessage";
export { IssueCredential } from "./prism-agent/protocols/issueCredential/IssueCredential";
export { OfferCredential } from "./prism-agent/protocols/issueCredential/OfferCredential";
export { RequestPresentation } from "./prism-agent/protocols/proofPresentation/RequestPresentation";
export * from "./prism-agent/connectionsManager/ConnectionsManager";
export * from "./prism-agent/mediator/BasicMediatorHandler";
export * from "./prism-agent/mediator/PlutoMediatorStore";
export * from "./mercury/didcomm/Wrapper";
export * from "./prism-agent/helpers/ApiImpl";
export { ListenerKey } from "./prism-agent/types";

export * from './peer-did/PeerDIDCreate';
export type {
  MediatorHandler,
  ConnectionsManager as ConnectionsManagerInterface,
  MediatorStore,
  AgentCredentials,
  AgentInvitations,
  AgentDIDHigherFunctions,
  AgentMessageEvents,
} from "./prism-agent/types";
export type { DIDCommProtocol } from "./mercury/DIDCommProtocol";
export * from "./prism-agent/protocols/types";
export * from "./apollo/utils/Secp256k1PrivateKey";
export * from "./apollo/utils/Secp256k1PublicKey";
export * from "./apollo/utils/Secp256k1KeyPair";
export * from "./apollo/utils/Ed25519PrivateKey";
export * from "./apollo/utils/Ed25519PublicKey";
export * from "./apollo/utils/Ed25519KeyPair";
export * from "./apollo/utils/X25519PrivateKey";
export * from "./apollo/utils/X25519PublicKey";
export * from "./apollo/utils/X25519KeyPair";
export * from "./pollux/models/AnonCredsVerifiableCredential";
export * from "./pollux/models/JWTVerifiableCredential";
export { KeyProperties } from "./domain/models/KeyProperties";
