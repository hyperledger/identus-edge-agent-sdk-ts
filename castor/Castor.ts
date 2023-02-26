import Apollo from "../domain/buildingBlocks/Apollo";
import { default as CastorInterface } from "../domain/buildingBlocks/Castor";
import {
  DID,
  PublicKey,
  Service,
  KeyPair,
  DIDDocument,
  PrismDIDMethodId,
  Curve,
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

import * as PeerDID from "@aviarytech/did-peer";
import { IDIDDocumentServiceDescriptor } from "@aviarytech/did-peer/interfaces";
import { loadSync } from "protobufjs";
import { SHA256 } from "@stablelib/sha256";
import {
  PeerDIDKeys,
  VerificationMethodTypeAgreement,
  VerificationMethodTypeAuthentication,
} from "./types/PeerDIDKeys";
import { CastorError } from "domain/models/Errors";
import { PeerDIDResolver } from "./resolver/PeerDIDResolver";
export default class Castor implements CastorInterface {
  private apollo: Apollo;

  constructor(apollo: Apollo) {
    this.apollo = apollo;
  }

  parseDID(did: string): DID {
    return DIDParser.parse(did);
  }
  async createPrismDID(
    masterPublicKey: PublicKey,
    services?: Service[] | undefined
  ): Promise<DID> {
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

  private extractPeerDIDKeysFromKeyPairs(keyPairs: KeyPair[]): PeerDIDKeys {
    return keyPairs.reduce(
      ({ encryptionKeys, signingKeys }, currentKeyPair) => {
        if (currentKeyPair.keyCurve.curve == Curve.ED25519) {
          signingKeys.push({
            id: "",
            type: VerificationMethodTypeAuthentication.ED25519_VERIFICATION_KEY_2020,
            controller: "",
          });
          return { encryptionKeys, signingKeys };
        } else if (currentKeyPair.keyCurve.curve == Curve.X25519) {
          encryptionKeys.push({
            id: "",
            type: VerificationMethodTypeAgreement.X25519_KEY_AGREEMENT_KEY_2020,
            controller: "",
          });
          return { encryptionKeys, signingKeys };
        } else {
          throw new CastorError.InvalidKeyError();
        }
      },
      {
        encryptionKeys: [],
        signingKeys: [],
      } as PeerDIDKeys
    );
  }

  async createPeerDID(keyPairs: KeyPair[], services: Service[]): Promise<DID> {
    const service: IDIDDocumentServiceDescriptor[] = services.map(
      ({ id, type, serviceEndpoint: { uri, accept } }) => ({
        id: id,
        type: type[0]!,
        serviceEndpoint: uri,
        routingKeys: [],
        accepts: accept,
      })
    );

    const didPeerKeys = this.extractPeerDIDKeysFromKeyPairs(keyPairs);
    const peerDID = await PeerDID.create(
      2,
      didPeerKeys.signingKeys,
      didPeerKeys.encryptionKeys,
      service[0]
    );

    return DID.fromString(peerDID);
  }

  async resolveDID(did: string): Promise<DIDDocument> {
    const method = DID.fromString(did).method;

    if (method === PeerDIDResolver.method) {
      return PeerDIDResolver.resolve(did);
    }

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
