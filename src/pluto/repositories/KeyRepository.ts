import { MangoQuery } from "rxdb";
import * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";
import { DeprecatedDerivationPathSchema } from "../../apollo/utils/derivation/schemas/DeprecatedDerivation";

export class KeyRepository extends MapperRepository<Models.Key, Domain.PrivateKey> {
  constructor(
    store: Pluto.Store,
    private readonly keyRestoration: Domain.KeyRestoration
  ) {
    super(store, "keys");
  }

  override async getModels(query?: MangoQuery<Models.Key>): Promise<Models.Key[]> {
    const result = await super.getModels(query);
    const filtered = result.filter(x => x.recoveryId !== "linksecret");

    return filtered;
  }

  toDomain(model: Models.Key): Domain.PrivateKey {
    const domain = this.keyRestoration.restorePrivateKey({
      ...model,
      raw: Buffer.from(model.rawHex, "hex"),
      keySpecification: new Map(
        Object.entries(
          JSON.parse(
            Buffer.from(model.keySpecification, 'base64').toString()
          )
        )
      )
    });

    if (model.index != undefined) {
      domain.keySpecification.set(Domain.KeyProperties.index, model.index.toString());
    }

    return this.withId(domain, model.uuid);
  }

  toModel(domain: Domain.PrivateKey): Models.Key {
    if (!domain.isStorable()) {
      throw new Domain.PlutoError.PrivateKeyNotStorable();
    }
    return {
      uuid: domain.uuid,
      recoveryId: domain.recoveryId,
      rawHex: domain.to.String("hex"),
      index: domain.index,
      keySpecification: Buffer.from(
        JSON.stringify(Object.fromEntries(domain.keySpecification))
      ).toString('base64'),
      derivationSchema: domain.derivationSchema ?? DeprecatedDerivationPathSchema
    };
  }
}
