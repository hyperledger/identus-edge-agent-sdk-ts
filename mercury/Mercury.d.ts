import { default as MercuryInterface } from '../domain/buildingBlocks/Mercury';
import { Message } from '../domain/models/Message';
export default class Mercury implements MercuryInterface {
    packMessage(message: Message): String;
    unpackMessage(message: String): Message;
    sendMessage(message: Message): Promise<Uint8Array>;
    sendMessageParseMessage(message: Message): Promise<Message | null>;
}
