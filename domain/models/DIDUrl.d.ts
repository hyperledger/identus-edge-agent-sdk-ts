import { DID } from "./DID";
export declare class DIDUrl {
    did: DID;
    path: string[];
    parameters: Map<string, string>;
    fragment: string;
    constructor(did: DID, path?: string[], parameters?: Map<string, string>, fragment?: string);
    string(): string;
    pathString(): string;
    queryString(): string;
    fragmentString(): string;
}
