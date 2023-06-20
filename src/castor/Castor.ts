/* eslint-disable @typescript-eslint/no-unused-vars */
import { SHA256 } from "@stablelib/sha256";
import { base64url } from "multiformats/bases/base64";
import * as base64 from "multiformats/bases/base64";
import * as base58 from "multiformats/bases/base58";

import Apollo from "../domain/buildingBlocks/Apollo";
import { default as CastorInterface } from "../domain/buildingBlocks/Castor";
import {
  DID,
  PublicKey,
  Service,
  KeyPair,
  DIDDocument,
  PrismDIDMethodId,
  DIDDocumentCoreProperty,
  DIDResolver,
  Curve,
} from "../domain/models";
import {
  getUsageId,
  PrismDIDPublicKey,
  Usage,
} from "./did/prismDID/PrismDIDPublicKey";
import * as DIDParser from "./parser/DIDParser";
import * as Protos from "./protos/node_models";

import { PeerDIDResolver } from "./resolver/PeerDIDResolver";
import { PeerDIDCreate } from "../peer-did/PeerDIDCreate";
import { LongFormPrismDIDResolver } from "./resolver/LongFormPrismDIDResolver";
import { CastorError } from "../domain/models/Errors";
import {
  VerificationMethod as DIDDocumentVerificationMethod,
  VerificationMethods as DIDDocumentVerificationMethods,
} from "../domain";

import { JWKHelper } from "../peer-did/helpers/JWKHelper";
import {
  VerificationMaterialAgreement,
  VerificationMaterialAuthentication,
  VerificationMaterialFormatPeerDID,
  VerificationMethodTypeAgreement,
  VerificationMethodTypeAuthentication,
} from "../peer-did/types";
import { Secp256k1PublicKey } from "../apollo/utils/Secp256k1PublicKey";

/**
 * Castor is a powerful and flexible library for working with DIDs. Whether you are building a decentralised application
 * or a more traditional system requiring secure and private identity management, Castor provides the tools and features
 * you need to easily create, manage, and resolve DIDs.
 *
 * @export
 * @class Castor
 * @typedef {Castor}
 * @implements {CastorInterface}
 */
export default class Castor implements CastorInterface {
  private apollo: Apollo;
  private resolvers: DIDResolver[];

  /**
   * Creates an instance of Castor as soon as a valid cryptographic interface is provided (Apollo).
   *
   * @constructor
   * @param {Apollo} apollo
   */
  constructor(apollo: Apollo) {
    this.apollo = apollo;
    this.resolvers = [
      new PeerDIDResolver(),
      new LongFormPrismDIDResolver(this.apollo),
    ];
  }

  /**
   * Parses a string representation of a Decentralized Identifier (DID) into a DID object.
   *
   * @param {string} did
   * @returns {DID}
   */
  parseDID(did: string): DID {
    return DIDParser.parse(did);
  }

  /**
   * Creates a DID for a prism (a device or server that acts as a DID owner and controller) using a
   * given master public key and list of services.
   *
   * @async
   * @param {PublicKey} masterPublicKey
   * @param {?(Service[] | undefined)} [services]
   * @returns {Promise<DID>}
   */
  async createPrismDID(
    masterPublicKey: PublicKey,
    services?: Service[] | undefined
  ): Promise<DID> {
    const publicKey = new PrismDIDPublicKey(
      getUsageId(Usage.MASTER_KEY),
      Usage.MASTER_KEY,
      masterPublicKey
    );
    const authenticateKey = new PrismDIDPublicKey(
      getUsageId(Usage.AUTHENTICATION_KEY),
      Usage.AUTHENTICATION_KEY,
      masterPublicKey
    );
    const didCreationData =
      new Protos.io.iohk.atala.prism.protos.CreateDIDOperation.DIDCreationData({
        public_keys: [authenticateKey.toProto(), publicKey.toProto()],
        services: services?.map((service) => {
          return new Protos.io.iohk.atala.prism.protos.Service({
            service_endpoint: [service.serviceEndpoint.uri],
            id: service.id,
            type: service.type.at(0),
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

  /**
   * Creates a DID for a peer (a device or server that acts as a DID subject) using given key agreement
   * and authentication key pairs and a list of services.
   *
   * @async
   * @param {KeyPair[]} keyPairs
   * @param {Service[]} services
   * @returns {Promise<DID>}
   */
  async createPeerDID(keyPairs: KeyPair[], services: Service[]): Promise<DID> {
    const peerDIDOperation = new PeerDIDCreate();
    const peerDID = peerDIDOperation.createPeerDID(keyPairs, services);
    return peerDID.did;
  }

  /**
   * Asynchronously resolves a DID to its corresponding DID Document. This function may throw an error if
   * the DID is invalid or the document cannot be retrieved.
   *
   * @async
   * @param {string} did
   * @returns {Promise<DIDDocument>}
   */
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

  /**
   * Extracts the verificationMethods from an array of CoreProperties inside a DID Document
   *
   * @private
   * @param {DIDDocumentCoreProperty[]} coreProperties
   * @returns {DIDDocumentVerificationMethod[]}
   */
  private extractVerificationMethods(
    coreProperties: DIDDocumentCoreProperty[]
  ): DIDDocumentVerificationMethod[] {
    return coreProperties.reduce<DIDDocumentVerificationMethod[]>(
      (result, property) => {
        if (property instanceof DIDDocumentVerificationMethods) {
          result.push(...property.values);
        }
        return result;
      },
      []
    );
  }

  /**
   * Verifies the authenticity of a signature using the corresponding DID Document, challenge, and signature data.
   * This function returns a boolean value indicating whether the signature is valid or not. This function may throw
   * an error if the DID Document or signature data are invalid.
   *
   * @async
   * @param {DID} did
   * @param {Uint8Array} challenge
   * @param {Uint8Array} signature
   * @returns {Promise<boolean>}
   */
  async verifySignature(
    did: DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    const didDocument = await this.resolveDID(did.toString());
    const verificationMethods = this.extractVerificationMethods(
      didDocument.coreProperties
    );
    let publicKey: PublicKey;

    if (did.method == "prism") {
      const methods = verificationMethods.filter(
        (method) => method.type == Curve.SECP256K1
      );
      if (methods.length <= 0) {
        throw new Error("No verification methods for Prism DID");
      }
      for (const method of methods) {
        if (!method.publicKeyMultibase) {
          throw new Error(
            "PrismDID VerificationMethod does not have multibase Key in it"
          );
        }

        const publicKeyEncoded = Secp256k1PublicKey.secp256k1FromBytes(
          Buffer.from(base58.base58btc.decode(method.publicKeyMultibase))
        ).getEncoded();

        publicKey = {
          keyCurve: {
            curve: Curve.SECP256K1,
          },
          value: publicKeyEncoded,
        };
        if (this.apollo.verifySignature(publicKey, challenge, signature)) {
          return true;
        }
      }
    } else if (did.method == "peer") {
      const methods = verificationMethods.filter(({ publicKeyJwk }) => {
        if (!publicKeyJwk) return false;
        return publicKeyJwk.crv === Curve.ED25519;
      });
      if (methods.length <= 0) {
        throw new Error("No verification methods for Peer DID");
      }
      for (const method of methods) {
        if (!method.publicKeyJwk) {
          throw new Error(
            "PeerDID VerificationMethod does not have jwk Key in it"
          );
        }
        const material =
          method.publicKeyJwk.crv === Curve.X25519
            ? new VerificationMaterialAgreement(
                JSON.stringify(method.publicKeyJwk),
                VerificationMethodTypeAgreement.JSON_WEB_KEY_2020,
                VerificationMaterialFormatPeerDID.JWK
              )
            : new VerificationMaterialAuthentication(
                JSON.stringify(method.publicKeyJwk),
                VerificationMethodTypeAuthentication.JSON_WEB_KEY_2020,
                VerificationMaterialFormatPeerDID.JWK
              );

        const decodedKey =
          method.publicKeyJwk.crv === Curve.X25519
            ? JWKHelper.fromJWKAgreement(
                material as VerificationMaterialAgreement
              )
            : JWKHelper.fromJWKAuthentication(
                material as VerificationMaterialAuthentication
              );

        publicKey = {
          keyCurve: {
            curve: method.publicKeyJwk.crv as Curve,
          },
          value: Buffer.from(base64url.baseEncode(decodedKey)),
        };
        if (this.apollo.verifySignature(publicKey, challenge, signature)) {
          return true;
        }
      }
    } else {
      throw new Error("Did not supported");
    }

    return false;
  }

  /**
   * Returns ecnumbasis from a valid DID and its related keyPair
   *
   * @param {DID} did
   * @param {KeyPair} keyPair
   * @returns {string}
   */
  getEcnumbasis(did: DID, keyPair: KeyPair): string {
    return new PeerDIDCreate().computeEncnumbasis(did, keyPair);
  }
}
