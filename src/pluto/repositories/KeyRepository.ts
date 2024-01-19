import * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";

export class KeyRepository extends MapperRepository<Models.Key, Domain.PrivateKey> {
  constructor(
    store: Pluto.Store,
    private readonly keyRestoration: Domain.KeyRestoration
  ) {
    super(store, "keys");
  }

  override async save(domain: Domain.PrivateKey) {
    const model = this.toModel(domain);
    const result = await this.insert(model);

    return this.withId(domain, result.uuid);
  }

  toDomain(model: Models.Key) {
    const domain = this.keyRestoration.restorePrivateKey(model);
    return this.withId(domain, model.uuid);
  }

  toModel(domain: Domain.PrivateKey) {
    if (!domain.isStorable()) {
      throw new Domain.PlutoError.PrivateKeyNotStorable();
    }

    return {
      uuid: domain.uuid,
      recoveryId: domain.recoveryId,
      raw: domain.raw,
      index: domain.index
    };
  }
}
