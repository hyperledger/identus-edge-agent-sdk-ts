import { DID } from ".";
export declare class PrismDIDInfo {
    readonly did: DID;
    readonly keyPathIndex: Number;
    readonly alias?: string | undefined;
    constructor(did: DID, keyPathIndex?: Number, alias?: string | undefined);
}
