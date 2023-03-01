import { Message } from "../models/Message"

export default interface Mercury {
  packMessage(message: Message): string;
  unpackMessage(message: string): Message;
  sendMessage(message: Message): Promise<Uint8Array>;
  sendMessageParseMessage(message: Message): Promise<Message | null>
}
