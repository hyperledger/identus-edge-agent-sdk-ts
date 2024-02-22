import * as Domain from "../../domain";
import type * as Models from "../models";
import type { Pluto } from "../Pluto";
import { MapperRepository } from "./builders/MapperRepository";

export class CredentialMetadataRepository extends MapperRepository<Models.CredentialMetadata, Domain.CredentialMetadata> {
  constructor(store: Pluto.Store) {
    super(store, "credential-metadata");
  }

  toDomain(model: Models.CredentialMetadata): Domain.CredentialMetadata {
    const json = JSON.parse(model.dataJson);
    const type = this.parseCredentialType(model);
    const domain = new Domain.CredentialMetadata(type, model.name, json);

    return this.withId(domain, model.uuid);
  }

  toModel(domain: Domain.CredentialMetadata): Models.CredentialMetadata {
    return {
      recoveryId: domain.type,
      dataJson: JSON.stringify(domain.toJSON()),
      name: domain.name,
      uuid: domain.uuid
    };
  }

  parseCredentialType(model: Models.CredentialMetadata): Domain.CredentialType {
    switch (model.recoveryId) {
      case Domain.CredentialType.AnonCreds:
        return Domain.CredentialType.AnonCreds;

      case Domain.CredentialType.JWT:
        return Domain.CredentialType.JWT;

    }

    throw new Error("Unable to recover CredentialMetadata");
  }
}
