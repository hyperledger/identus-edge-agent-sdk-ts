import { SHA256 } from "@stablelib/sha256";
import { CastorError } from "../../domain/models/Errors";
import { Apollo } from "../../domain/buildingBlocks/Apollo";
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
  DIDUrl,
  DIDDocumentCoreProperty,
  PublicKey,
  Curve,
  getUsage,
} from "../../domain/models";

import * as DIDParser from "../parser/DIDParser";
import * as Protos from "../protos/node_models";
import * as base64 from "multiformats/bases/base64";
import * as base58 from "multiformats/bases/base58";
import { Secp256k1PublicKey } from "../../apollo/utils/Secp256k1PublicKey";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { Ed25519PublicKey } from "../../apollo/utils/Ed25519PublicKey";
import { X25519PublicKey } from "../../apollo/utils/X25519PublicKey";
import { PrismDIDPublicKey } from "../did/prismDID/PrismDIDPublicKey";

export class LongFormPrismDIDResolver implements DIDResolver {
  method = "prism";

  constructor(private apollo: Apollo) { }

  async resolve(didString: string): Promise<DIDDocument> {
    const did = DIDParser.parse(didString);
    const prismDID = new LongFormPrismDID(did);
    const state = prismDID.encodedState;
    const base64State = base64.base64url.decode(`u${state}`);
    const [verificationMethods, services] = this.decodeState(
      did,
      prismDID.stateHash,
      base64State
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

  private getProtoCurve(proto: Protos.io.iohk.atala.prism.protos.PublicKey) {
    return proto.compressed_ec_key_data?.curve ?? proto.ec_key_data.curve
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
      const operation =
        Protos.io.iohk.atala.prism.protos.AtalaOperation.deserializeBinary(
          encodedData
        );

      const publicKeys: PrismDIDPublicKey[] =
        operation.create_did?.did_data?.public_keys?.map(
          (key: Protos.io.iohk.atala.prism.protos.PublicKey) => {
            const curve = this.getProtoCurve(key)
            let pk: PublicKey;
            if (curve === Curve.SECP256K1) {
              pk = key.has_compressed_ec_key_data
                ? Secp256k1PublicKey.secp256k1FromBytes(
                  key.compressed_ec_key_data.data
                )
                : Secp256k1PublicKey.secp256k1FromByteCoordinates(
                  key.ec_key_data.x,
                  key.ec_key_data.y
                );
            } else if (curve === Curve.ED25519) {
              if (!key.has_compressed_ec_key_data) {
                throw new Error("Expected compressed compressed key")
              }
              pk = Ed25519PublicKey.from.Buffer(
                Buffer.from(key.compressed_ec_key_data.data)
              )
            } else if (curve === Curve.X25519) {
              if (!key.has_compressed_ec_key_data) {
                throw new Error("Expected compressed compressed key")
              }
              pk = X25519PublicKey.from.Buffer(
                Buffer.from(key.compressed_ec_key_data.data)
              )
            } else {
              throw new Error("Unsupported key type")
            }
            const usage = getUsage(key.usage);
            return new PrismDIDPublicKey(
              key.id,
              usage,
              pk,
            )
          }
        ) || [];

      const services =
        operation.create_did?.did_data?.services?.reduce<DIDDocumentService[]>(
          (acc, service) => {
            const endpoint = service.service_endpoint.at(0);

            if (endpoint === undefined) return acc;

            return acc.concat(
              new DIDDocumentService(
                service.id,
                [service.type],
                new DIDDocumentServiceEndpoint(endpoint)
              )
            );
          },
          []
        ) ?? [];

      const verificationMethods = publicKeys.reduce(
        (partialResult, publicKey) => {
          /**
           * TODO: Support keys in multiple formats, right now its multibase
           */
          const didUrl = new DIDUrl(did, [], new Map(), publicKey.id);
          const curve = publicKey.keyData.getProperty(KeyProperties.curve);
          if (!curve) {
            throw new CastorError.InvalidKeyError();
          }
          const method = new DIDDocumentVerificationMethod(
            didUrl.string(),
            did.toString(),
            curve,
            undefined,
            base58.base58btc.encode(publicKey.keyData.raw)
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
