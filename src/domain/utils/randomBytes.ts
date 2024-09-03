import { crypto } from '@noble/ciphers/crypto';

export function randomBytes(bytes: Uint8Array): Uint8Array {
  if (crypto && typeof crypto.getRandomValues === 'function') {
    return crypto.getRandomValues(bytes);
  }
  throw new Error('crypto.getRandomValues must be defined');
}
