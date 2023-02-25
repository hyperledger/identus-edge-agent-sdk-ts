import { DID } from "./DID";


export class Mediator {
  constructor(
    public readonly id: string,
    public readonly mediatorDID: DID,
    public readonly hostDID: DID,
    public readonly routingDID: DID
  ) {}
}
