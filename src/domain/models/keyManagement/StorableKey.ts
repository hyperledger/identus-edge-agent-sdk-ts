export enum SecurityLevel {
  high,
  low,
}
export abstract class StorableKey {
  abstract store(): void;
  abstract securityLevel: SecurityLevel;
  abstract StorableData: Uint8Array;
  abstract restorationIdentifier: string;
}
