import type * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";

interface LinkSecret extends Domain.Pluto.Storable {
  name: string;
  secret: string;
}

export class LinkSecretRepository extends MapperRepository<Models.Key, LinkSecret> {
  baseModel: Partial<Models.Key> = {
    recoveryId: "linkSecret"
  };

  constructor(store: Pluto.Store) {
    super(store, "keys");
  }

  toDomain(model: Models.Key) {
    return {
      uuid: model.uuid,
      name: model.alias ?? "",
      secret: Buffer.from(model.raw).toString(),
    };
  }

  toModel(domain: LinkSecret) {
    return {
      uuid: domain.uuid,
      recoveryId: "linkSecret",
      raw: Buffer.from(domain.secret),
      name: domain.name,
    };
  }
}
