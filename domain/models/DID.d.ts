export declare class DID {
    private schema;
    private method;
    private methodId;
    constructor(schema: string, method: string, methodId: string);
    toString(): string;
    static fromString(text: string): DID;
    static getSchemaFromString(text: string): string;
    static getMethodFromString(text: string): string;
    static getMethodIdFromString(text: string): string;
}
