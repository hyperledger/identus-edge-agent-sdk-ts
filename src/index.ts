import "./globals";

export { default as Apollo } from "./apollo/Apollo";
export { default as Castor } from "./castor/Castor";
export * as Domain from "./domain";
export { default as Mercury } from "./mercury/Mercury";
export * from "./pluto";
export { default as Pollux } from "./pollux/Pollux";

// alias DIDCommAgent as Agent to hide breaking changes
export { default as Agent } from "./edge-agent/didcomm/Agent";
// export { default as Agent } from "./edge-agent/Agent";
// export { default as DIDCommAgent } from "./edge-agent/didcomm/Agent";
export * from "./edge-agent/oidc";
export * from "./edge-agent/protocols/other/BasicMessage";
export { IssueCredential } from "./edge-agent/protocols/issueCredential/IssueCredential";
export { OfferCredential } from "./edge-agent/protocols/issueCredential/OfferCredential";
export { HandshakeRequest } from './edge-agent/protocols/connection/HandshakeRequest';
export { OutOfBandInvitation } from './edge-agent/protocols/invitation/v2/OutOfBandInvitation';
export * from "./edge-agent/protocols/proofPresentation";
export * from "./edge-agent/connectionsManager/ConnectionsManager";
export * from "./edge-agent/mediator/BasicMediatorHandler";
export * from "./edge-agent/mediator/PlutoMediatorStore";
export * from "./mercury/didcomm/Wrapper";
export { FetchApi as ApiImpl } from "./edge-agent/helpers/FetchApi";
export { ListenerKey } from "./edge-agent/types";
export * from './peer-did/PeerDID';
export type {
  MediatorHandler,
  ConnectionsManager as ConnectionsManagerInterface,
  MediatorStore,
  AgentMessageEvents,
  EventCallback,
  MessageEventArg,
  ConnectionEventArg,
  RevokeEventArg
} from "./edge-agent/types";
export type { DIDCommProtocol } from "./mercury/DIDCommProtocol";
export * from "./edge-agent/protocols/types";
export { ProtocolType } from "./edge-agent/protocols/ProtocolTypes";
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
export * from "./pollux/models/SDJWTVerifiableCredential";

export { isPresentationDefinitionRequestType } from './pollux/utils/claims';

export { KeyProperties } from "./domain/models/KeyProperties";
