import { DID } from "./DID";
export declare class DIDPair {
    readonly host: DID;
    readonly receiver: DID;
    readonly name?: string | undefined;
    constructor(host: DID, receiver: DID, name?: string | undefined);
}
