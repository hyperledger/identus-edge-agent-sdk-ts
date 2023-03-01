import { SHA256 } from "@stablelib/sha256";
import { loadSync } from "protobufjs";

import { CastorError } from "../../domain/models/Errors";
import Apollo from "../../domain/buildingBlocks/Apollo";
import { LongFormPrismDID } from "../../castor/did/prismDID/LongFormPrismDID";
import {
  DIDResolver,
  DIDDocument,
  VerificationMethod as DIDDocumentVerificationMethod,
  VerificationMethods as DIDDocumentVerificationMethods,
  Service as DIDDocumentService,
  Services as DIDDocumentServices,
  ServiceEndpoint as DIDDocumentServiceEndpoint,
  Authentication as DIDDocumentAuthentication,
  DID,
  Curve,
  DIDUrl,
  DIDDocumentCoreProperty,
} from "../../domain/models";

import * as DIDParser from "../parser/DIDParser";
import * as Protos from "../../castor/protos/node_models";
import {
  getUsage,
  getUsageId,
  PrismDIDPublicKey,
} from "../../castor/did/prismDID/PrismDIDPublicKey";

export class LongFormPrismDIDResolver implements DIDResolver {
  method = "prism";

  constructor(private apollo: Apollo) {}

  async resolve(didString: string): Promise<DIDDocument> {
    const did = DIDParser.parse(didString);
    const prismDID = new LongFormPrismDID(did);

    const [verificationMethods, services] = this.decodeState(
      did,
      prismDID.stateHash,
      Buffer.from(prismDID.encodedState, "base64url")
    );
    const servicesProperty = new DIDDocumentServices(services);
    const verificationMethodsProperty = new DIDDocumentVerificationMethods([
      ...verificationMethods.values(),
    ]);
    const coreProperties: DIDDocumentCoreProperty[] = [];
    const authenticate: DIDDocumentAuthentication[] = [];

    for (const [key, value] of verificationMethods) {
      authenticate.push(new DIDDocumentAuthentication([key], [value]));
    }

    coreProperties.push(...authenticate);
    coreProperties.push(servicesProperty);
    coreProperties.push(verificationMethodsProperty);

    return new DIDDocument(did, coreProperties);
  }

  private decodeState(
    did: DID,
    stateHash: string,
    encodedData: Uint8Array
  ): [Map<string, DIDDocumentVerificationMethod>, DIDDocumentService[]] {
    try {
      const verifyEncodedState = new SHA256().update(encodedData).digest();
      const verifyEncodedStateHex = verifyEncodedState;

      if (
        Buffer.from(verifyEncodedState).toString("hex") !==
        Buffer.from(verifyEncodedStateHex).toString("hex")
      ) {
        throw new CastorError.InitialStateOfDIDChanged();
      }

      const encodableOperation = loadSync(
        "castor/protos/node_models.proto"
      ).lookupType("AtalaOperation");

      const operation = encodableOperation.decode(encodedData) as any;

      const publicKeys: PrismDIDPublicKey[] =
        operation.createDid?.didData?.publicKeys?.map(
          (key: Protos.io.iohk.atala.prism.protos.PublicKey) => {
            return new PrismDIDPublicKey(
              this.apollo,
              getUsageId(getUsage(key.usage)),
              getUsage(key.usage),
              {
                keyCurve: {
                  curve: Curve.SECP256K1,
                },
                value: key.key_data,
              }
            );
          }
        ) || [];

      const services =
        operation.createDid?.didData?.services?.map(
          (service: Protos.io.iohk.atala.prism.protos.Service) => {
            return new DIDDocumentService(
              service.id,
              [service.type],
              new DIDDocumentServiceEndpoint(service.service_endpoint[0])
            );
          }
        ) || [];

      const verificationMethods = publicKeys.reduce(
        (partialResult, publicKey) => {
          const didUrl = new DIDUrl(did, [], new Map(), publicKey.id);
          const method = new DIDDocumentVerificationMethod(
            didUrl.string(),
            did.toString(),
            publicKey.keyData.keyCurve.curve,
            undefined,
            publicKey.keyData.value
          );
          partialResult.set(didUrl.string(), method);
          return partialResult;
        },
        new Map<string, DIDDocumentVerificationMethod>()
      );

      return [verificationMethods, services];
    } catch (err) {
      throw new CastorError.InitialStateOfDIDChanged();
    }
  }
}
