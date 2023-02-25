export declare class InvalidURLError extends Error {
    constructor(message?: string);
}
export declare class NoDIDReceiverSetError extends Error {
    constructor(message?: string);
}
export declare class NoValidServiceFoundError extends Error {
    constructor(message?: string);
}
export declare class FromFieldNotSetError extends Error {
    constructor(message?: string);
}
export declare class UnknownAttachmentDataError extends Error {
    constructor(message?: string);
}
export declare class MessageAttachmentWithoutIDError extends Error {
    constructor(message?: string);
}
export declare class MessageInvalidBodyDataError extends Error {
    constructor(message?: string);
}
export declare class UnknownPackingMessageError extends Error {
    constructor(message?: string);
}
export declare class CouldNotResolveDIDError extends Error {
    constructor(message?: string);
}
export declare class DidCommError extends Error {
    constructor(message?: string);
}
export declare class UrlSessionError extends Error {
    statusCode: number;
    error?: Error;
    constructor(message?: string, statusCode?: number, error?: Error);
}
