import type {
  DIDResolver,
  Service,
  VerificationMethod,
  DIDDoc,
} from "didcomm-wasm";

import * as Domain from "../../domain";
import { PeerDIDService } from "../../peer-did/PeerDID";

export class DIDCommDIDResolver implements DIDResolver {
  constructor(private readonly castor: Domain.Castor) { }

  async resolve(did: string): Promise<DIDDoc | null> {
    const doc = await this.castor.resolveDID(did);

    const authentications: string[] = [];
    const keyAgreements: string[] = [];
    const services: Service[] = [];
    const verificationMethods: VerificationMethod[] = [];

    doc.coreProperties.forEach((coreProperty) => {
      if ("verificationMethods" in coreProperty) {
        coreProperty.verificationMethods.forEach((method) => {
          const curve = Domain.VerificationMethod.getCurveByType(
            method.publicKeyJwk?.crv || ""
          );

          switch (curve) {
            case Domain.Curve.ED25519:
              authentications.push(method.id);
              break;

            case Domain.Curve.X25519:
              keyAgreements.push(method.id);
              break;
          }
          const publicKeyBase64 = method.publicKeyJwk?.x as any;
          const publicKeyKid = (method.publicKeyJwk as any).kid;
          verificationMethods.push({
            controller: method.controller,
            id: method.id,
            type: "JsonWebKey2020",
            publicKeyJwk: {
              crv: method.publicKeyJwk?.crv,
              kid: publicKeyKid,
              kty: "OKP",
              x: publicKeyBase64,
            },
          });
        });
      }

      if (
        coreProperty instanceof Domain.Service &&
        coreProperty.type.includes(PeerDIDService.DIDCommMessagingKey)
      ) {
        services.push({
          id: coreProperty.id,
          type: PeerDIDService.DIDCommMessagingKey,
          serviceEndpoint: {
            uri: coreProperty.serviceEndpoint.uri,
            accept: coreProperty.serviceEndpoint.accept,
            routing_keys: coreProperty.serviceEndpoint.routingKeys,
          },
        });
      }
    });

    const dcdoc: DIDDoc = {
      id: doc.id.toString(),
      authentication: authentications,
      keyAgreement: keyAgreements,
      service: services,
      verificationMethod: verificationMethods,
    };

    return dcdoc;
  }
}
