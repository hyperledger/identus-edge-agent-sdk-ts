import { v4 as uuidv4 } from "uuid";

export class TraceableError extends Error {
    public id = uuidv4();
    constructor(...params) {
        super(...params)
    }
    static fromError(err: Error) {
        return new TraceableError(err.message);
    }
}