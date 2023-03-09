import { DID } from "../../domain";

export interface Mediator {
  hostDID: DID;
  routingDID: DID;
  mediatorDID: DID;
}
