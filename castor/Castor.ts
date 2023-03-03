/* eslint-disable @typescript-eslint/no-unused-vars */
import Apollo from "../domain/buildingBlocks/Apollo";
import { default as CastorInterface } from "../domain/buildingBlocks/Castor";
import {
  DID,
  PublicKey,
  Service,
  KeyPair,
  DIDDocument,
  PrismDIDMethodId,
  DIDResolver,
  Curve
} from "../domain/models";
import {
  getUsageId,
  PrismDIDPublicKey,
  Usage,
} from "./did/prismDID/PrismDIDPublicKey";
import * as DIDParser from "./parser/DIDParser";
import * as Protos from "./protos/node_models";
import { SHA256 } from "@stablelib/sha256";

import { PeerDIDResolver } from "./resolver/PeerDIDResolver";
import { PeerDIDCreate } from "../peer-did/PeerDIDCreate";
import { LongFormPrismDIDResolver } from "./resolver/LongFormPrismDIDResolver";
import { CastorError } from "../domain/models/Errors";
import {
  VerificationMethod as DIDDocumentVerificationMethod,
    VerificationMethods as DIDDocumentVerificationMethods,
  } from "../domain";
import * as base64 from "multiformats/bases/base64";
export default class Castor implements CastorInterface {
  private apollo: Apollo;
  private resolvers: DIDResolver[];

  constructor(apollo: Apollo) {
    this.apollo = apollo;
    this.resolvers = [
      new PeerDIDResolver(),
      new LongFormPrismDIDResolver(this.apollo),
    ];
  }

  parseDID(did: string): DID {
    return DIDParser.parse(did);
  }

  async createPrismDID(
    masterPublicKey: PublicKey,
    services?: Service[] | undefined
  ): Promise<DID> {
    const id = getUsageId(Usage.MASTER_KEY);
    const publicKey = new PrismDIDPublicKey(
      this.apollo,
      id,
      Usage.MASTER_KEY,
      masterPublicKey
    );
    const didCreationData =
      new Protos.io.iohk.atala.prism.protos.CreateDIDOperation.DIDCreationData({
        public_keys: [publicKey.toProto()],
        services: services?.map((service) => {
          return new Protos.io.iohk.atala.prism.protos.Service({
            service_endpoint: [service.serviceEndpoint.uri],
            id: service.id,
            type: service.type[0],
          });
        }),
      });

    const didOperation =
      new Protos.io.iohk.atala.prism.protos.CreateDIDOperation({
        did_data: didCreationData,
      });

    const operation = new Protos.io.iohk.atala.prism.protos.AtalaOperation({
      create_did: didOperation,
    });

    const encodedState = operation.serializeBinary();
    const sha256 = new SHA256();
    const stateHash = Buffer.from(
      sha256.update(encodedState).digest()
    ).toString("hex");

    const base64State = base64.base64url.baseEncode(encodedState);

    const methodSpecificId = new PrismDIDMethodId([stateHash, base64State]);

    return new DID("did", "prism", methodSpecificId.toString());
  }

  async createPeerDID(keyPairs: KeyPair[], services: Service[]): Promise<DID> {
    const peerDIDOperation = new PeerDIDCreate();
    const peerDID = peerDIDOperation.createPeerDID(keyPairs, services);
    return peerDID.did;
  }

  async resolveDID(did: string): Promise<DIDDocument> {
    const parsed = DID.fromString(did);
    const resolver = this.resolvers.find(
      (resolver) => resolver.method === parsed.method
    );
    if (!resolver) {
      throw new CastorError.NotPossibleToResolveDID();
    }
    return resolver.resolve(did);
  }

  async verifySignature(
    did: DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    const didDocument = await this.resolveDID(did.toString())
    didDocument
    const verificationMethods = didDocument.coreProperties.reduce<DIDDocumentVerificationMethod[]>((result, property) => {
      if (property instanceof DIDDocumentVerificationMethods) {
       result.push(...property.values);
      }
      return result;
    }, []);
    var publicKey = null;
    if (did.method == 'prism') {
      const method = verificationMethods.find(method => method.type == Curve.SECP256K1);
      if (method == null) {
        throw new Error("Not verification method for Prism DID")
      }
      if (method.publicKeyMultibase == null) {
        throw new Error("No public key multibase available for Prism DID")
      }
      try {
        publicKey = this.apollo.compressedPublicKeyFromCompresedData(Buffer.from(method.publicKeyMultibase)).uncompressed;
      } catch(e) {
        throw new Error()
      }
      
    } else if(did.method == 'peer') {
      const method = verificationMethods.find(method => method.type == Curve.ED25519);
      if (method == null) {
        throw new Error("Not verification method for DID peer")
      }
      if (method.publicKeyJwk == null) {
        throw new Error("No public key JWK available for DID peer")
      }
      publicKey = this.apollo.compressedPublicKeyFromPublicKey({
        keyCurve: {
          curve: Curve.ED25519
        }, 
        value: method.publicKeyJwk.x
      }).uncompressed
      
    } else {
      throw new Error("Did not supported")
    }
    if (publicKey != null) {
      return this.apollo.verifySignature(publicKey, challenge, {value: signature})
    }
    throw new Error("Wrong method");
  }
}
