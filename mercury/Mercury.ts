import {default as MercuryInterface} from '../domain/buildingBlocks/Mercury'
import { Message } from '../domain/models/Message';

export default class Mercury implements MercuryInterface {
  packMessage(message: Message): String {
    throw new Error('Method not implemented.');
  }
  unpackMessage(message: String): Message {
    throw new Error('Method not implemented.');
  }
  sendMessage(message: Message): Promise<Uint8Array> {
    throw new Error('Method not implemented.');
  }
  sendMessageParseMessage(message: Message): Promise<Message | null> {
    throw new Error('Method not implemented.');
  }

}
