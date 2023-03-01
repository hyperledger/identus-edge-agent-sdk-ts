import { Message } from "../../domain/models/Message";

type DIDCommMessageResponse = Message | undefined;

export interface DIDCommConnection {
  awaitMessages(): Promise<Array<Message>>;
  awaitMessageResponse(id: string): DIDCommMessageResponse;
  sendMessage(message: Message): Promise<DIDCommMessageResponse>;
}
