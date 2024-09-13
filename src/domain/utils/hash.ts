import Hashing from "hash.js";

enum Alg {
  SHA256 = 'SHA256',
  SHA512 = 'SHA512'
}

class InvalidHashingAlgorithm extends Error {
  constructor() {
    super(`Invalid Hashing Algorithm. Valid options are: ${Alg.SHA256}, ${Alg.SHA512}`);
  }
}

export const hashSync = (data: string | Uint8Array, alg: string) => {
  if (alg === Alg.SHA256) {
    return Uint8Array.from(Hashing.sha256().update(data).digest());
  }

  if (alg === Alg.SHA512) {
    return Uint8Array.from(Hashing.sha512().update(data).digest());
  }

  throw new InvalidHashingAlgorithm();
};

export const hash = async (data: string | Uint8Array, alg: string) => hashSync(data, alg);
