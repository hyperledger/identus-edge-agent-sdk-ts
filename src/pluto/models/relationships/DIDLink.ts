import type { Model } from "../Model";

/**
 * Definition for DID -> DID relationships
 * 
 * @typedef {Object} DIDLink
 */
export interface DIDLink extends Model {
  /**
   * Relationship of the DIDs
   * @see DIDLink.role enum
   */
  role: number;
  /**
   * UUID of the host DID
   */
  hostId: string;
  /**
   * UUID of the target DID
   */
  targetId: string;
  /**
   * Optional name for the relationship
   */
  alias?: string;
}

/**
 * Declaration merge to group Types
 */
export namespace DIDLink {
  /**
   * Enum for Role values
   *   - unknown : value could not be mapped
   *   - pair : DIDPair
   *   - mediator : Mediator connection, DID for mediator
   *   - routing : Mediator connection, routing DID returned
   * @enum {number}
   */
  export enum role {
    unknown,
    pair,
    mediator,
    routing
  }
}
