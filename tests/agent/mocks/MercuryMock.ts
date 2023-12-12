/* eslint-disable @typescript-eslint/no-unused-vars */
import { base64 } from "multiformats/bases/base64";
import { Message } from "../../../src/domain";
import { Mercury } from "../../../src/domain/buildingBlocks/Mercury";

export class MercuryStub implements Mercury {
  private throwSendMessageError?: Error;
  private throwUnpackError?: Error;
  private throwPackageError?: Error;
  private sendMessageDataReturn?: Uint8Array;
  private sendMessageReturn?: Message;

  async packMessage(message: Message): Promise<string> {
    if (this.throwPackageError) {
      throw this.throwPackageError;
    }
    const jsonStr = JSON.stringify(message);
    const base64Str = base64.baseEncode(Buffer.from(jsonStr)).toString();
    return base64Str;
  }

  async unpackMessage(message: string): Promise<Message> {
    if (this.throwUnpackError) {
      throw this.throwUnpackError;
    }
    const jsonStr = Buffer.from(base64.baseDecode(message));
    return Message.fromJson(jsonStr.toString());
  }

  async sendMessage(message: Message): Promise<Uint8Array> {
    if (this.throwSendMessageError) {
      throw this.throwSendMessageError;
    }
    const encoded = await this.packMessage(message);
    return Buffer.from(encoded);
  }

  async sendMessageParseMessage(
    message: Message
  ): Promise<Message | undefined> {
    if (this.throwSendMessageError) throw this.throwSendMessageError;
    return this.sendMessageReturn;
  }
}
