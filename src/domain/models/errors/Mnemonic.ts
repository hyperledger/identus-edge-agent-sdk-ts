export class MnemonicException extends Error {
  constructor(message?: string) {
    super(message || "Mnemonic exception occurred");
  }
}

export class MnemonicLengthException extends Error {
  constructor(message?: string) {
    super(message || "Mnemonic length exception occurred");
  }
}

export class MnemonicWordException extends Error {
  constructor(message?: string) {
    super(message || "Mnemonic word exception occurred");
  }
}

export class MnemonicChecksumException extends Error {
  constructor(message?: string) {
    super(message || "Mnemonic checksum exception occurred");
  }
}
