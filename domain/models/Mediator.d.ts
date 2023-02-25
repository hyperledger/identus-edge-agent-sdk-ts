import { DID } from "./DID";
export declare class Mediator {
    readonly id: string;
    readonly mediatorDID: DID;
    readonly hostDID: DID;
    readonly routingDID: DID;
    constructor(id: string, mediatorDID: DID, hostDID: DID, routingDID: DID);
}
