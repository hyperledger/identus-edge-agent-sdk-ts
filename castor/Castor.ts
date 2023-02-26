import Apollo from "../domain/buildingBlocks/Apollo";
import { default as CastorInterface } from "../domain/buildingBlocks/Castor";
import {
  DID,
  PublicKey,
  Service,
  KeyPair,
  DIDDocument,
  PrismDIDMethodId,
} from "../domain/models";
import {
  getUsageId,
  PrismDIDPublicKey,
  Usage,
} from "./did/prismDID/PrismDIDPublicKey";
import * as DIDParser from "./parser/DIDParser";
import {
  AtalaOperation,
  CreateDIDOperation,
  Service as ProtoService,
} from "./protos/protos";

import { loadSync } from "protobufjs";
import { SHA256 } from "@stablelib/sha256";

export default class Castor implements CastorInterface {
  private apollo: Apollo;

  constructor(apollo: Apollo) {
    this.apollo = apollo;
  }

  parseDID(did: string): DID {
    return DIDParser.parse(did);
  }
  createPrismDID(
    masterPublicKey: PublicKey,
    services?: Service[] | undefined
  ): DID {
    const operation = new AtalaOperation();

    const id = getUsageId(Usage.MASTER_KEY);
    const publicKey = new PrismDIDPublicKey(
      this.apollo,
      id,
      Usage.MASTER_KEY,
      masterPublicKey
    );
    const didCreationData = new CreateDIDOperation.DIDCreationData();
    didCreationData.addPublicKeys(publicKey.toProto());

    services?.forEach((service) => {
      const protoService = new ProtoService();
      protoService.addServiceEndpoint(service.serviceEndpoint.uri);
      protoService.setId(service.id);
      protoService.setType(service.type[0]);
      didCreationData.addServices(protoService);
    });

    const didOperation = new CreateDIDOperation();
    didOperation.setDidData(didCreationData);

    operation.setCreateDid(didOperation);

    const encodableOperation = loadSync(
      "./protos/node_models.proto"
    ).lookupType("AtalaOperation");

    const encodedState = Buffer.from(
      encodableOperation.encode(operation.toObject()).finish()
    );
    const sha256 = new SHA256();
    const stateHash = Buffer.from(
      sha256.update(encodedState).digest()
    ).toString("hex");

    const base64State = encodedState.toString("base64");

    const methodSpecificId = new PrismDIDMethodId([stateHash, base64State]);

    return new DID("did", "prism", methodSpecificId.toString());
  }
  createPeerDID(keyPairs: KeyPair[], services: Service[]): DID {
    throw new Error("Method not implemented.");
  }
  resolveDID(did: string): Promise<DIDDocument> {
    throw new Error("Method not implemented.");
  }
  verifySignature(
    did: DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
