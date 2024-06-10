import * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";

export class LinkSecretRepository extends MapperRepository<Models.Key, Domain.LinkSecret> {
  baseModel = {
    recoveryId: "linksecret"
  };

  constructor(store: Pluto.Store) {
    super(store, "keys");
  }

  toDomain(model: Models.Key): Domain.LinkSecret {
    const secret = Buffer.from(model.rawHex, "hex").toString();
    const domain = new Domain.LinkSecret(secret, model.alias);

    return this.withId(domain, model.uuid);
  }

  toModel(domain: Domain.LinkSecret): Models.Key {
    return {
      ...this.baseModel,
      uuid: domain.uuid,
      rawHex: Buffer.from(domain.secret).toString("hex"),
      alias: domain.name
    };
  }
}
