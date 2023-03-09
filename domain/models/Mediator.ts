import { DID } from "./DID";

export interface Mediator {
  hostDID: DID;
  routingDID: DID;
  mediatorDID: DID;
}
