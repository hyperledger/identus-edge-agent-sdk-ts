import { Message } from "../../../../domain";
import { Mercury } from "../../../../domain/buildingBlocks/Mercury";
import { OutOfBandParser } from "./OutOfBandParser";

export class InvitationRunner {
  constructor(private mercury: Mercury, private url: URL) {}

  async run(): Promise<Message> {
    const messageData = OutOfBandParser.parseMessage(this.url);
    return this.mercury.unpackMessage(messageData);
  }
}
