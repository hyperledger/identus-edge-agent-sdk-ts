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
  //TODO: We consider hashing as uppercase without slash but our dependencies use it with lowercase and -
  const safeAlg = alg.replace(/-/gmi, "").toUpperCase()
  if (safeAlg === Alg.SHA256) {
    return Uint8Array.from(Hashing.sha256().update(data).digest());
  }
  if (safeAlg === Alg.SHA512) {
    return Uint8Array.from(Hashing.sha512().update(data).digest());
  }
  throw new InvalidHashingAlgorithm();
};

export const hash = async (data: string | Uint8Array, alg: string) => hashSync(data, alg);
