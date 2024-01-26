import * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";


export class LinkSecretRepository extends MapperRepository<Models.Key, Domain.LinkSecret> {
  baseModel: Partial<Models.Key> = {
    recoveryId: "linkSecret"
  };

  constructor(store: Pluto.Store) {
    super(store, "keys");
  }

  toDomain(model: Models.Key) {
    const secret = Buffer.from(model.raw).toString();
    const domain = new Domain.LinkSecret(secret, model.alias);

    return this.withId(domain, model.uuid);
  }

  toModel(domain: Domain.LinkSecret) {
    return {
      uuid: domain.uuid,
      recoveryId: "linkSecret",
      raw: Buffer.from(domain.secret),
      name: domain.name,
    };
  }
}
