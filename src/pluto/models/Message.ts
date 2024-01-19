import type { Model } from "./Model";

/**
 * Definition for Message model
 * Represents {@link Domain!Message}
 * 
 * @typedef {Object} MessageModel
 * @see Domain.Message
 */
export interface Message extends Model {
  /**
   * Stringified JSON values
   */
  dataJson: string;

  // searchable properties
  id: string;
  createdTime: number;
  thid?: string;
  piuri: string;
  // Q: these are DIDs - should we normalize?
  from?: string;
  to?: string;
  isReceived: number;
}
