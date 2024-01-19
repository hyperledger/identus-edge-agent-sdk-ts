import * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { WithId } from "./builders/BaseRepository";
import { MapperRepository } from "./builders/MapperRepository";

export class DIDRepository extends MapperRepository<Models.DID, Domain.DID> {
  constructor(store: Pluto.Store) {
    super(store, "dids");
  }

  override async save(domain: Domain.DID, alias?: string) {
    if (typeof domain.uuid === "string") {
      return domain as WithId<Domain.DID>;
    }

    const existing = await this.find({
      method: domain.method,
      methodId: domain.methodId,
      schema: domain.schema
    });

    if (existing) {
      return existing;
    }

    const model = this.toModel(domain, alias);
    const result = await this.insert(model);

    return this.withId(domain, result.uuid);
  }

  toDomain(model: Models.DID) {
    const did = Domain.DID.from(model);
    return this.withId(did, model.uuid);
  }

  toModel(domain: Domain.DID, alias?: string) {
    return {
      method: domain.method,
      methodId: domain.methodId,
      schema: domain.schema,
      uuid: domain.uuid,
      alias
    };
  }
}
