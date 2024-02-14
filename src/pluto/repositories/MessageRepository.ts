import * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";

export class MessageRepository extends MapperRepository<Models.Message, Domain.Message> {
  constructor(store: Pluto.Store) {
    super(store, "messages");
  }

  toDomain(model: Models.Message): Domain.Message {
    const domain = Domain.Message.fromJson(model.dataJson);
    return this.withId(domain, model.uuid);
  }

  toModel(domain: Domain.Message): Models.Message {
    const msgJson = {
      id: domain.id,
      body: domain.body,
      piuri: domain.piuri,
      from: domain.from?.toString(),
      to: domain.to?.toString(),
      thid: domain.thid,
      pthid: domain.pthid,
      createdTime: Number(domain.createdTime),
      expiresTime: Number(domain.expiresTimePlus),
      attachments: domain.attachments,
      ack: domain.ack,
      direction: domain.direction,
      extraHeaders: domain.extraHeaders,
      fromPrior: domain.fromPrior,
    };

    return {
      uuid: domain.uuid,
      dataJson: JSON.stringify(msgJson),
      id: domain.id,
      createdTime: Number(domain.createdTime),
      from: domain.from?.toString(),
      isReceived: domain.direction,
      thid: domain.thid,
      to: domain.to?.toString(),
      piuri: domain.piuri,
    };
  }
}
