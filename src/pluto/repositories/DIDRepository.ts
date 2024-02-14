import * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";

export class DIDRepository extends MapperRepository<Models.DID, Domain.DID> {
  constructor(store: Pluto.Store) {
    super(store, "dids");
  }

  override async save(domain: Domain.DID, alias?: string) {
    const existing = await this.byUUID(domain.uuid);

    if (existing) {
      return existing;
    }

    const model = this.toModel(domain, alias);
    const result = await this.insert(model);

    return this.withId(domain, result.uuid);
  }

  toDomain(model: Models.DID): Domain.DID {
    const did = Domain.DID.from(model.uuid);
    return this.withId(did, model.uuid);
  }

  toModel(domain: Domain.DID, alias?: string): Models.DID {
    return {
      method: domain.method,
      schema: domain.schema,
      uuid: domain.uuid,
      alias
    };
  }
}
