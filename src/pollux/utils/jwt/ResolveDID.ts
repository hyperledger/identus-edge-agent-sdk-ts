import type * as DIDResolver from "did-resolver";
import * as Domain from "../../../domain";
import { Task, asArray, isEmpty } from "../../../utils";

export interface Args {
  did: string;
}

export class ResolveDID extends Task<DIDResolver.DIDResolutionResult, Args> {
  async run(ctx: Task.Context) {
    const resolved = await ctx.Castor.resolveDID(this.args.did);

    const alsoKnownAs = resolved.coreProperties.find(
      (prop): prop is Domain.AlsoKnownAs => prop instanceof Domain.AlsoKnownAs
    );
    const controller = resolved.coreProperties.find(
      (prop): prop is Domain.Controller => prop instanceof Domain.Controller
    );
    const verificationMethods = resolved.coreProperties.find(
      (prop): prop is Domain.VerificationMethods => prop instanceof Domain.VerificationMethods
    );
    const service = resolved.coreProperties.find(
      (prop): prop is Domain.Services => prop instanceof Domain.Services
    );

    return {
      didResolutionMetadata: { contentType: "application/did+ld+json" },
      didDocumentMetadata: {},
      didDocument: {
        id: resolved.id.toString(),
        alsoKnownAs: alsoKnownAs?.values,
        controller: asArray(controller?.values).map((v) => v.toString()),
        verificationMethod: asArray(verificationMethods?.values).map((vm) => {
          if (vm.publicKeyMultibase) {
            return {
              id: vm.id,
              type: vm.type === Domain.Curve.SECP256K1
                ? "EcdsaSecp256k1VerificationKey2019"
                : vm.type === Domain.Curve.ED25519
                  ? 'Ed25519VerificationKey2020'
                  : 'unknown',
              controller: vm.controller,
              publicKeyMultibase: vm.publicKeyMultibase,
            };
          }

          if (vm.publicKeyJwk) {
            return {
              id: vm.id,
              type: "JsonWebKey2020",
              controller: vm.controller,
              publicKeyJwk: vm.publicKeyJwk,
            };
          }

          throw new Error("Invalid KeyType");
        }),
        service: asArray(service?.values).reduce<DIDResolver.Service[]>((acc, service) => {
          const type = service.type.at(0);

          return isEmpty(type) ? acc : acc.concat({
            type: type,
            id: service.id,
            serviceEndpoint: service.serviceEndpoint,
          });
        }, []),
      },
    };
  }
}
