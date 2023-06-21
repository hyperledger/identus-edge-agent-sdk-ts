import { Message } from "../models/Message";

export interface Mercury {
  packMessage(message: Message): Promise<string>;
  unpackMessage(message: string): Promise<Message>;
  sendMessage(message: Message): Promise<Uint8Array>;
  sendMessageParseMessage(message: Message): Promise<Message | undefined>;
}
