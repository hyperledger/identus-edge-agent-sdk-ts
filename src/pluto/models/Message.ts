import type { Model } from "./Model";
import { schemaFactory } from "./Schema";

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
  id?: string;
  createdTime?: number;
  thid?: string;
  piuri?: string;
  from?: string;
  to?: string;
  isReceived?: number;
}

export const MessageSchema = schemaFactory<Message>(schema => {
  schema.setRequired("dataJson");
  schema.addProperty("string", "dataJson");
  schema.addProperty("string", "id");
  schema.addProperty("string", "from");
  schema.addProperty("string", "piuri");
  schema.addProperty("string", "thid");
  schema.addProperty("string", "to");
  schema.addProperty("number", "createdTime");
  schema.addProperty("number", "isReceived");
  schema.setEncrypted("dataJson", "thid");
});
