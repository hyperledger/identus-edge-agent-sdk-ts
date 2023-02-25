

export class InvalidURLError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class NoDIDReceiverSetError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class NoValidServiceFoundError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class FromFieldNotSetError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class UnknownAttachmentDataError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class MessageAttachmentWithoutIDError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class MessageInvalidBodyDataError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class UnknownPackingMessageError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class CouldNotResolveDIDError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class DidCommError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class UrlSessionError extends Error {
  statusCode: number;
  error?: Error;

  constructor(message?: string, statusCode?: number, error?: Error) {
    super(message);
    this.statusCode = statusCode || 500;
    this.error = error;
  }
}
