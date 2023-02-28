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
  DID,
} from "../../domain/models";

import * as DIDParser from "../parser/DIDParser";

export class LongFormPrismDIDResolver implements DIDResolver {
  method: string = "prism";

  constructor(private apollo: Apollo) {}

  async resolve(didString: string): Promise<DIDDocument> {
    const did = DIDParser.parse(didString);
    const prismDID = new LongFormPrismDID(did);

    let [verificationMethods, services] = this.decodeState(
      did,
      prismDID.stateHash,
      Buffer.from(prismDID.encodedState, "base64url")
    );

    const servicesProperty = new DIDDocumentServices(services);
    //const verificationMethodsProperty = new DIDDocumentVerificationMethods();
    throw new Error();
  }

  private decodeState(
    did: DID,
    stateHash: string,
    encodedData: Uint8Array
  ): [Map<string, DIDDocumentVerificationMethod>, DIDDocumentService[]] {
    try {
      const verifyEncodedState = new SHA256().update(encodedData).digest();
      const verifyEncodedStateHex = verifyEncodedState.toString();

      if (stateHash !== verifyEncodedStateHex) {
        throw new CastorError.InitialStateOfDIDChanged();
      }

      const encodableOperation = loadSync(
        "./protos/node_models.proto"
      ).lookupType("AtalaOperation");

      const operation = encodableOperation.decode(encodedData);

      // const publicKeys =
      //   operation.createDid?.didData?.publicKeys?.map((key) => {
      //     try {
      //       return new PrismDIDPublicKey(apollo, key);
      //     } catch (e) {
      //       throw e;
      //     }
      //   }) || [];

      // const services =
      //   operation.createDid?.didData?.services?.map((service) => {
      //     return new DIDDocument.Service(
      //       service.id,
      //       [service.type],
      //       new DIDDocument.ServiceEndpoint(service.serviceEndpoint[0])
      //     );
      //   }) || [];

      // const verificationMethods = publicKeys.reduce(
      //   (partialResult, publicKey) => {
      //     const didUrl = new DIDUrl(did, publicKey.id);
      //     const method = new DIDDocument.VerificationMethod(
      //       didUrl,
      //       did,
      //       publicKey.keyData.curve.curve.value,
      //       publicKey.keyData.value.base64Encoded
      //     );
      //     return {
      //       ...partialResult,
      //       [didUrl.string()]: method,
      //     };
      //   },
      //   {}
      // );
      throw new Error();
      //return [verificationMethods, services];
    } catch (err) {
      throw new CastorError.InitialStateOfDIDChanged();
    }
  }
}
