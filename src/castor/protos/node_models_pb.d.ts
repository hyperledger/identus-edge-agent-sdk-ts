// package: io.iohk.atala.prism.protos
// file: node_models.proto

import * as jspb from "google-protobuf";
import * as common_models_pb from "./common_models_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TimestampInfo extends jspb.Message {
  getBlockSequenceNumber(): number;
  setBlockSequenceNumber(value: number): void;

  getOperationSequenceNumber(): number;
  setOperationSequenceNumber(value: number): void;

  hasBlockTimestamp(): boolean;
  clearBlockTimestamp(): void;
  getBlockTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBlockTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampInfo): TimestampInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimestampInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampInfo;
  static deserializeBinaryFromReader(message: TimestampInfo, reader: jspb.BinaryReader): TimestampInfo;
}

export namespace TimestampInfo {
  export type AsObject = {
    blockSequenceNumber: number,
    operationSequenceNumber: number,
    blockTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ECKeyData extends jspb.Message {
  getCurve(): string;
  setCurve(value: string): void;

  getX(): Uint8Array | string;
  getX_asU8(): Uint8Array;
  getX_asB64(): string;
  setX(value: Uint8Array | string): void;

  getY(): Uint8Array | string;
  getY_asU8(): Uint8Array;
  getY_asB64(): string;
  setY(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ECKeyData.AsObject;
  static toObject(includeInstance: boolean, msg: ECKeyData): ECKeyData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ECKeyData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ECKeyData;
  static deserializeBinaryFromReader(message: ECKeyData, reader: jspb.BinaryReader): ECKeyData;
}

export namespace ECKeyData {
  export type AsObject = {
    curve: string,
    x: Uint8Array | string,
    y: Uint8Array | string,
  }
}

export class CompressedECKeyData extends jspb.Message {
  getCurve(): string;
  setCurve(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompressedECKeyData.AsObject;
  static toObject(includeInstance: boolean, msg: CompressedECKeyData): CompressedECKeyData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompressedECKeyData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompressedECKeyData;
  static deserializeBinaryFromReader(message: CompressedECKeyData, reader: jspb.BinaryReader): CompressedECKeyData;
}

export namespace CompressedECKeyData {
  export type AsObject = {
    curve: string,
    data: Uint8Array | string,
  }
}

export class PublicKey extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUsage(): KeyUsageMap[keyof KeyUsageMap];
  setUsage(value: KeyUsageMap[keyof KeyUsageMap]): void;

  hasAddedOn(): boolean;
  clearAddedOn(): void;
  getAddedOn(): LedgerData | undefined;
  setAddedOn(value?: LedgerData): void;

  hasRevokedOn(): boolean;
  clearRevokedOn(): void;
  getRevokedOn(): LedgerData | undefined;
  setRevokedOn(value?: LedgerData): void;

  hasEcKeyData(): boolean;
  clearEcKeyData(): void;
  getEcKeyData(): ECKeyData | undefined;
  setEcKeyData(value?: ECKeyData): void;

  hasCompressedEcKeyData(): boolean;
  clearCompressedEcKeyData(): void;
  getCompressedEcKeyData(): CompressedECKeyData | undefined;
  setCompressedEcKeyData(value?: CompressedECKeyData): void;

  getKeyDataCase(): PublicKey.KeyDataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKey): PublicKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKey;
  static deserializeBinaryFromReader(message: PublicKey, reader: jspb.BinaryReader): PublicKey;
}

export namespace PublicKey {
  export type AsObject = {
    id: string,
    usage: KeyUsageMap[keyof KeyUsageMap],
    addedOn?: LedgerData.AsObject,
    revokedOn?: LedgerData.AsObject,
    ecKeyData?: ECKeyData.AsObject,
    compressedEcKeyData?: CompressedECKeyData.AsObject,
  }

  export enum KeyDataCase {
    KEY_DATA_NOT_SET = 0,
    EC_KEY_DATA = 8,
    COMPRESSED_EC_KEY_DATA = 9,
  }
}

export class DIDData extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearPublicKeysList(): void;
  getPublicKeysList(): Array<PublicKey>;
  setPublicKeysList(value: Array<PublicKey>): void;
  addPublicKeys(value?: PublicKey, index?: number): PublicKey;

  clearServicesList(): void;
  getServicesList(): Array<Service>;
  setServicesList(value: Array<Service>): void;
  addServices(value?: Service, index?: number): Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DIDData.AsObject;
  static toObject(includeInstance: boolean, msg: DIDData): DIDData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DIDData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DIDData;
  static deserializeBinaryFromReader(message: DIDData, reader: jspb.BinaryReader): DIDData;
}

export namespace DIDData {
  export type AsObject = {
    id: string,
    publicKeysList: Array<PublicKey.AsObject>,
    servicesList: Array<Service.AsObject>,
  }
}

export class CreateDIDOperation extends jspb.Message {
  hasDidData(): boolean;
  clearDidData(): void;
  getDidData(): CreateDIDOperation.DIDCreationData | undefined;
  setDidData(value?: CreateDIDOperation.DIDCreationData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDIDOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDIDOperation): CreateDIDOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDIDOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDIDOperation;
  static deserializeBinaryFromReader(message: CreateDIDOperation, reader: jspb.BinaryReader): CreateDIDOperation;
}

export namespace CreateDIDOperation {
  export type AsObject = {
    didData?: CreateDIDOperation.DIDCreationData.AsObject,
  }

  export class DIDCreationData extends jspb.Message {
    clearPublicKeysList(): void;
    getPublicKeysList(): Array<PublicKey>;
    setPublicKeysList(value: Array<PublicKey>): void;
    addPublicKeys(value?: PublicKey, index?: number): PublicKey;

    clearServicesList(): void;
    getServicesList(): Array<Service>;
    setServicesList(value: Array<Service>): void;
    addServices(value?: Service, index?: number): Service;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DIDCreationData.AsObject;
    static toObject(includeInstance: boolean, msg: DIDCreationData): DIDCreationData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DIDCreationData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DIDCreationData;
    static deserializeBinaryFromReader(message: DIDCreationData, reader: jspb.BinaryReader): DIDCreationData;
  }

  export namespace DIDCreationData {
    export type AsObject = {
      publicKeysList: Array<PublicKey.AsObject>,
      servicesList: Array<Service.AsObject>,
    }
  }
}

export class AddKeyAction extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): PublicKey | undefined;
  setKey(value?: PublicKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddKeyAction.AsObject;
  static toObject(includeInstance: boolean, msg: AddKeyAction): AddKeyAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddKeyAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddKeyAction;
  static deserializeBinaryFromReader(message: AddKeyAction, reader: jspb.BinaryReader): AddKeyAction;
}

export namespace AddKeyAction {
  export type AsObject = {
    key?: PublicKey.AsObject,
  }
}

export class RemoveKeyAction extends jspb.Message {
  getKeyid(): string;
  setKeyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveKeyAction.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveKeyAction): RemoveKeyAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveKeyAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveKeyAction;
  static deserializeBinaryFromReader(message: RemoveKeyAction, reader: jspb.BinaryReader): RemoveKeyAction;
}

export namespace RemoveKeyAction {
  export type AsObject = {
    keyid: string,
  }
}

export class AddServiceAction extends jspb.Message {
  hasService(): boolean;
  clearService(): void;
  getService(): Service | undefined;
  setService(value?: Service): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddServiceAction.AsObject;
  static toObject(includeInstance: boolean, msg: AddServiceAction): AddServiceAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddServiceAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddServiceAction;
  static deserializeBinaryFromReader(message: AddServiceAction, reader: jspb.BinaryReader): AddServiceAction;
}

export namespace AddServiceAction {
  export type AsObject = {
    service?: Service.AsObject,
  }
}

export class RemoveServiceAction extends jspb.Message {
  getServiceid(): string;
  setServiceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveServiceAction.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveServiceAction): RemoveServiceAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveServiceAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveServiceAction;
  static deserializeBinaryFromReader(message: RemoveServiceAction, reader: jspb.BinaryReader): RemoveServiceAction;
}

export namespace RemoveServiceAction {
  export type AsObject = {
    serviceid: string,
  }
}

export class UpdateServiceAction extends jspb.Message {
  getServiceid(): string;
  setServiceid(value: string): void;

  getType(): string;
  setType(value: string): void;

  clearServiceEndpointsList(): void;
  getServiceEndpointsList(): Array<string>;
  setServiceEndpointsList(value: Array<string>): void;
  addServiceEndpoints(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceAction.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceAction): UpdateServiceAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServiceAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceAction;
  static deserializeBinaryFromReader(message: UpdateServiceAction, reader: jspb.BinaryReader): UpdateServiceAction;
}

export namespace UpdateServiceAction {
  export type AsObject = {
    serviceid: string,
    type: string,
    serviceEndpointsList: Array<string>,
  }
}

export class UpdateDIDAction extends jspb.Message {
  hasAddKey(): boolean;
  clearAddKey(): void;
  getAddKey(): AddKeyAction | undefined;
  setAddKey(value?: AddKeyAction): void;

  hasRemoveKey(): boolean;
  clearRemoveKey(): void;
  getRemoveKey(): RemoveKeyAction | undefined;
  setRemoveKey(value?: RemoveKeyAction): void;

  hasAddService(): boolean;
  clearAddService(): void;
  getAddService(): AddServiceAction | undefined;
  setAddService(value?: AddServiceAction): void;

  hasRemoveService(): boolean;
  clearRemoveService(): void;
  getRemoveService(): RemoveServiceAction | undefined;
  setRemoveService(value?: RemoveServiceAction): void;

  hasUpdateService(): boolean;
  clearUpdateService(): void;
  getUpdateService(): UpdateServiceAction | undefined;
  setUpdateService(value?: UpdateServiceAction): void;

  getActionCase(): UpdateDIDAction.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDIDAction.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDIDAction): UpdateDIDAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDIDAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDIDAction;
  static deserializeBinaryFromReader(message: UpdateDIDAction, reader: jspb.BinaryReader): UpdateDIDAction;
}

export namespace UpdateDIDAction {
  export type AsObject = {
    addKey?: AddKeyAction.AsObject,
    removeKey?: RemoveKeyAction.AsObject,
    addService?: AddServiceAction.AsObject,
    removeService?: RemoveServiceAction.AsObject,
    updateService?: UpdateServiceAction.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    ADD_KEY = 1,
    REMOVE_KEY = 2,
    ADD_SERVICE = 3,
    REMOVE_SERVICE = 4,
    UPDATE_SERVICE = 5,
  }
}

export class UpdateDIDOperation extends jspb.Message {
  getPreviousOperationHash(): Uint8Array | string;
  getPreviousOperationHash_asU8(): Uint8Array;
  getPreviousOperationHash_asB64(): string;
  setPreviousOperationHash(value: Uint8Array | string): void;

  getId(): string;
  setId(value: string): void;

  clearActionsList(): void;
  getActionsList(): Array<UpdateDIDAction>;
  setActionsList(value: Array<UpdateDIDAction>): void;
  addActions(value?: UpdateDIDAction, index?: number): UpdateDIDAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDIDOperation.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDIDOperation): UpdateDIDOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDIDOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDIDOperation;
  static deserializeBinaryFromReader(message: UpdateDIDOperation, reader: jspb.BinaryReader): UpdateDIDOperation;
}

export namespace UpdateDIDOperation {
  export type AsObject = {
    previousOperationHash: Uint8Array | string,
    id: string,
    actionsList: Array<UpdateDIDAction.AsObject>,
  }
}

export class CredentialBatchData extends jspb.Message {
  getIssuerDid(): string;
  setIssuerDid(value: string): void;

  getMerkleRoot(): Uint8Array | string;
  getMerkleRoot_asU8(): Uint8Array;
  getMerkleRoot_asB64(): string;
  setMerkleRoot(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CredentialBatchData.AsObject;
  static toObject(includeInstance: boolean, msg: CredentialBatchData): CredentialBatchData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CredentialBatchData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CredentialBatchData;
  static deserializeBinaryFromReader(message: CredentialBatchData, reader: jspb.BinaryReader): CredentialBatchData;
}

export namespace CredentialBatchData {
  export type AsObject = {
    issuerDid: string,
    merkleRoot: Uint8Array | string,
  }
}

export class IssueCredentialBatchOperation extends jspb.Message {
  hasCredentialBatchData(): boolean;
  clearCredentialBatchData(): void;
  getCredentialBatchData(): CredentialBatchData | undefined;
  setCredentialBatchData(value?: CredentialBatchData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueCredentialBatchOperation.AsObject;
  static toObject(includeInstance: boolean, msg: IssueCredentialBatchOperation): IssueCredentialBatchOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueCredentialBatchOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueCredentialBatchOperation;
  static deserializeBinaryFromReader(message: IssueCredentialBatchOperation, reader: jspb.BinaryReader): IssueCredentialBatchOperation;
}

export namespace IssueCredentialBatchOperation {
  export type AsObject = {
    credentialBatchData?: CredentialBatchData.AsObject,
  }
}

export class RevokeCredentialsOperation extends jspb.Message {
  getPreviousOperationHash(): Uint8Array | string;
  getPreviousOperationHash_asU8(): Uint8Array;
  getPreviousOperationHash_asB64(): string;
  setPreviousOperationHash(value: Uint8Array | string): void;

  getCredentialBatchId(): string;
  setCredentialBatchId(value: string): void;

  clearCredentialsToRevokeList(): void;
  getCredentialsToRevokeList(): Array<Uint8Array | string>;
  getCredentialsToRevokeList_asU8(): Array<Uint8Array>;
  getCredentialsToRevokeList_asB64(): Array<string>;
  setCredentialsToRevokeList(value: Array<Uint8Array | string>): void;
  addCredentialsToRevoke(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeCredentialsOperation.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeCredentialsOperation): RevokeCredentialsOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeCredentialsOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeCredentialsOperation;
  static deserializeBinaryFromReader(message: RevokeCredentialsOperation, reader: jspb.BinaryReader): RevokeCredentialsOperation;
}

export namespace RevokeCredentialsOperation {
  export type AsObject = {
    previousOperationHash: Uint8Array | string,
    credentialBatchId: string,
    credentialsToRevokeList: Array<Uint8Array | string>,
  }
}

export class ProtocolVersionUpdateOperation extends jspb.Message {
  getProposerDid(): string;
  setProposerDid(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): ProtocolVersionInfo | undefined;
  setVersion(value?: ProtocolVersionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolVersionUpdateOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolVersionUpdateOperation): ProtocolVersionUpdateOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolVersionUpdateOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolVersionUpdateOperation;
  static deserializeBinaryFromReader(message: ProtocolVersionUpdateOperation, reader: jspb.BinaryReader): ProtocolVersionUpdateOperation;
}

export namespace ProtocolVersionUpdateOperation {
  export type AsObject = {
    proposerDid: string,
    version?: ProtocolVersionInfo.AsObject,
  }
}

export class ProtocolVersion extends jspb.Message {
  getMajorVersion(): number;
  setMajorVersion(value: number): void;

  getMinorVersion(): number;
  setMinorVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolVersion.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolVersion): ProtocolVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolVersion;
  static deserializeBinaryFromReader(message: ProtocolVersion, reader: jspb.BinaryReader): ProtocolVersion;
}

export namespace ProtocolVersion {
  export type AsObject = {
    majorVersion: number,
    minorVersion: number,
  }
}

export class ProtocolVersionInfo extends jspb.Message {
  getVersionName(): string;
  setVersionName(value: string): void;

  getEffectiveSince(): number;
  setEffectiveSince(value: number): void;

  hasProtocolVersion(): boolean;
  clearProtocolVersion(): void;
  getProtocolVersion(): ProtocolVersion | undefined;
  setProtocolVersion(value?: ProtocolVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolVersionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolVersionInfo): ProtocolVersionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolVersionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolVersionInfo;
  static deserializeBinaryFromReader(message: ProtocolVersionInfo, reader: jspb.BinaryReader): ProtocolVersionInfo;
}

export namespace ProtocolVersionInfo {
  export type AsObject = {
    versionName: string,
    effectiveSince: number,
    protocolVersion?: ProtocolVersion.AsObject,
  }
}

export class DeactivateDIDOperation extends jspb.Message {
  getPreviousOperationHash(): Uint8Array | string;
  getPreviousOperationHash_asU8(): Uint8Array;
  getPreviousOperationHash_asB64(): string;
  setPreviousOperationHash(value: Uint8Array | string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateDIDOperation.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateDIDOperation): DeactivateDIDOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivateDIDOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateDIDOperation;
  static deserializeBinaryFromReader(message: DeactivateDIDOperation, reader: jspb.BinaryReader): DeactivateDIDOperation;
}

export namespace DeactivateDIDOperation {
  export type AsObject = {
    previousOperationHash: Uint8Array | string,
    id: string,
  }
}

export class AtalaOperation extends jspb.Message {
  hasCreateDid(): boolean;
  clearCreateDid(): void;
  getCreateDid(): CreateDIDOperation | undefined;
  setCreateDid(value?: CreateDIDOperation): void;

  hasUpdateDid(): boolean;
  clearUpdateDid(): void;
  getUpdateDid(): UpdateDIDOperation | undefined;
  setUpdateDid(value?: UpdateDIDOperation): void;

  hasIssueCredentialBatch(): boolean;
  clearIssueCredentialBatch(): void;
  getIssueCredentialBatch(): IssueCredentialBatchOperation | undefined;
  setIssueCredentialBatch(value?: IssueCredentialBatchOperation): void;

  hasRevokeCredentials(): boolean;
  clearRevokeCredentials(): void;
  getRevokeCredentials(): RevokeCredentialsOperation | undefined;
  setRevokeCredentials(value?: RevokeCredentialsOperation): void;

  hasProtocolVersionUpdate(): boolean;
  clearProtocolVersionUpdate(): void;
  getProtocolVersionUpdate(): ProtocolVersionUpdateOperation | undefined;
  setProtocolVersionUpdate(value?: ProtocolVersionUpdateOperation): void;

  hasDeactivateDid(): boolean;
  clearDeactivateDid(): void;
  getDeactivateDid(): DeactivateDIDOperation | undefined;
  setDeactivateDid(value?: DeactivateDIDOperation): void;

  getOperationCase(): AtalaOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AtalaOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AtalaOperation): AtalaOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AtalaOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AtalaOperation;
  static deserializeBinaryFromReader(message: AtalaOperation, reader: jspb.BinaryReader): AtalaOperation;
}

export namespace AtalaOperation {
  export type AsObject = {
    createDid?: CreateDIDOperation.AsObject,
    updateDid?: UpdateDIDOperation.AsObject,
    issueCredentialBatch?: IssueCredentialBatchOperation.AsObject,
    revokeCredentials?: RevokeCredentialsOperation.AsObject,
    protocolVersionUpdate?: ProtocolVersionUpdateOperation.AsObject,
    deactivateDid?: DeactivateDIDOperation.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE_DID = 1,
    UPDATE_DID = 2,
    ISSUE_CREDENTIAL_BATCH = 3,
    REVOKE_CREDENTIALS = 4,
    PROTOCOL_VERSION_UPDATE = 5,
    DEACTIVATE_DID = 6,
  }
}

export class SignedAtalaOperation extends jspb.Message {
  getSignedWith(): string;
  setSignedWith(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): AtalaOperation | undefined;
  setOperation(value?: AtalaOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignedAtalaOperation.AsObject;
  static toObject(includeInstance: boolean, msg: SignedAtalaOperation): SignedAtalaOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignedAtalaOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignedAtalaOperation;
  static deserializeBinaryFromReader(message: SignedAtalaOperation, reader: jspb.BinaryReader): SignedAtalaOperation;
}

export namespace SignedAtalaOperation {
  export type AsObject = {
    signedWith: string,
    signature: Uint8Array | string,
    operation?: AtalaOperation.AsObject,
  }
}

export class LedgerData extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): void;

  getLedger(): common_models_pb.LedgerMap[keyof common_models_pb.LedgerMap];
  setLedger(value: common_models_pb.LedgerMap[keyof common_models_pb.LedgerMap]): void;

  hasTimestampInfo(): boolean;
  clearTimestampInfo(): void;
  getTimestampInfo(): TimestampInfo | undefined;
  setTimestampInfo(value?: TimestampInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerData.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerData): LedgerData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LedgerData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerData;
  static deserializeBinaryFromReader(message: LedgerData, reader: jspb.BinaryReader): LedgerData;
}

export namespace LedgerData {
  export type AsObject = {
    transactionId: string,
    ledger: common_models_pb.LedgerMap[keyof common_models_pb.LedgerMap],
    timestampInfo?: TimestampInfo.AsObject,
  }
}

export class OperationOutput extends jspb.Message {
  hasBatchOutput(): boolean;
  clearBatchOutput(): void;
  getBatchOutput(): IssueCredentialBatchOutput | undefined;
  setBatchOutput(value?: IssueCredentialBatchOutput): void;

  hasCreateDidOutput(): boolean;
  clearCreateDidOutput(): void;
  getCreateDidOutput(): CreateDIDOutput | undefined;
  setCreateDidOutput(value?: CreateDIDOutput): void;

  hasUpdateDidOutput(): boolean;
  clearUpdateDidOutput(): void;
  getUpdateDidOutput(): UpdateDIDOutput | undefined;
  setUpdateDidOutput(value?: UpdateDIDOutput): void;

  hasRevokeCredentialsOutput(): boolean;
  clearRevokeCredentialsOutput(): void;
  getRevokeCredentialsOutput(): RevokeCredentialsOutput | undefined;
  setRevokeCredentialsOutput(value?: RevokeCredentialsOutput): void;

  hasProtocolVersionUpdateOutput(): boolean;
  clearProtocolVersionUpdateOutput(): void;
  getProtocolVersionUpdateOutput(): ProtocolVersionUpdateOutput | undefined;
  setProtocolVersionUpdateOutput(value?: ProtocolVersionUpdateOutput): void;

  hasDeactivateDidOutput(): boolean;
  clearDeactivateDidOutput(): void;
  getDeactivateDidOutput(): DeactivateDIDOutput | undefined;
  setDeactivateDidOutput(value?: DeactivateDIDOutput): void;

  hasOperationId(): boolean;
  clearOperationId(): void;
  getOperationId(): Uint8Array | string;
  getOperationId_asU8(): Uint8Array;
  getOperationId_asB64(): string;
  setOperationId(value: Uint8Array | string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string;
  setError(value: string): void;

  getResultCase(): OperationOutput.ResultCase;
  getOperationMaybeCase(): OperationOutput.OperationMaybeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOutput.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOutput): OperationOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOutput;
  static deserializeBinaryFromReader(message: OperationOutput, reader: jspb.BinaryReader): OperationOutput;
}

export namespace OperationOutput {
  export type AsObject = {
    batchOutput?: IssueCredentialBatchOutput.AsObject,
    createDidOutput?: CreateDIDOutput.AsObject,
    updateDidOutput?: UpdateDIDOutput.AsObject,
    revokeCredentialsOutput?: RevokeCredentialsOutput.AsObject,
    protocolVersionUpdateOutput?: ProtocolVersionUpdateOutput.AsObject,
    deactivateDidOutput?: DeactivateDIDOutput.AsObject,
    operationId: Uint8Array | string,
    error: string,
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    BATCH_OUTPUT = 1,
    CREATE_DID_OUTPUT = 2,
    UPDATE_DID_OUTPUT = 3,
    REVOKE_CREDENTIALS_OUTPUT = 4,
    PROTOCOL_VERSION_UPDATE_OUTPUT = 7,
    DEACTIVATE_DID_OUTPUT = 8,
  }

  export enum OperationMaybeCase {
    OPERATION_MAYBE_NOT_SET = 0,
    OPERATION_ID = 5,
    ERROR = 6,
  }
}

export class IssueCredentialBatchOutput extends jspb.Message {
  getBatchId(): string;
  setBatchId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueCredentialBatchOutput.AsObject;
  static toObject(includeInstance: boolean, msg: IssueCredentialBatchOutput): IssueCredentialBatchOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueCredentialBatchOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueCredentialBatchOutput;
  static deserializeBinaryFromReader(message: IssueCredentialBatchOutput, reader: jspb.BinaryReader): IssueCredentialBatchOutput;
}

export namespace IssueCredentialBatchOutput {
  export type AsObject = {
    batchId: string,
  }
}

export class CreateDIDOutput extends jspb.Message {
  getDidSuffix(): string;
  setDidSuffix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDIDOutput.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDIDOutput): CreateDIDOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDIDOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDIDOutput;
  static deserializeBinaryFromReader(message: CreateDIDOutput, reader: jspb.BinaryReader): CreateDIDOutput;
}

export namespace CreateDIDOutput {
  export type AsObject = {
    didSuffix: string,
  }
}

export class UpdateDIDOutput extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDIDOutput.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDIDOutput): UpdateDIDOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDIDOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDIDOutput;
  static deserializeBinaryFromReader(message: UpdateDIDOutput, reader: jspb.BinaryReader): UpdateDIDOutput;
}

export namespace UpdateDIDOutput {
  export type AsObject = {
  }
}

export class RevokeCredentialsOutput extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeCredentialsOutput.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeCredentialsOutput): RevokeCredentialsOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeCredentialsOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeCredentialsOutput;
  static deserializeBinaryFromReader(message: RevokeCredentialsOutput, reader: jspb.BinaryReader): RevokeCredentialsOutput;
}

export namespace RevokeCredentialsOutput {
  export type AsObject = {
  }
}

export class ProtocolVersionUpdateOutput extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolVersionUpdateOutput.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolVersionUpdateOutput): ProtocolVersionUpdateOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolVersionUpdateOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolVersionUpdateOutput;
  static deserializeBinaryFromReader(message: ProtocolVersionUpdateOutput, reader: jspb.BinaryReader): ProtocolVersionUpdateOutput;
}

export namespace ProtocolVersionUpdateOutput {
  export type AsObject = {
  }
}

export class DeactivateDIDOutput extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateDIDOutput.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateDIDOutput): DeactivateDIDOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivateDIDOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateDIDOutput;
  static deserializeBinaryFromReader(message: DeactivateDIDOutput, reader: jspb.BinaryReader): DeactivateDIDOutput;
}

export namespace DeactivateDIDOutput {
  export type AsObject = {
  }
}

export class Service extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  clearServiceEndpointList(): void;
  getServiceEndpointList(): Array<string>;
  setServiceEndpointList(value: Array<string>): void;
  addServiceEndpoint(value: string, index?: number): string;

  hasAddedOn(): boolean;
  clearAddedOn(): void;
  getAddedOn(): LedgerData | undefined;
  setAddedOn(value?: LedgerData): void;

  hasDeletedOn(): boolean;
  clearDeletedOn(): void;
  getDeletedOn(): LedgerData | undefined;
  setDeletedOn(value?: LedgerData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Service.AsObject;
  static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Service;
  static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
}

export namespace Service {
  export type AsObject = {
    id: string,
    type: string,
    serviceEndpointList: Array<string>,
    addedOn?: LedgerData.AsObject,
    deletedOn?: LedgerData.AsObject,
  }
}

export interface KeyUsageMap {
  UNKNOWN_KEY: 0;
  MASTER_KEY: 1;
  ISSUING_KEY: 2;
  KEY_AGREEMENT_KEY: 3;
  AUTHENTICATION_KEY: 4;
  REVOCATION_KEY: 5;
  CAPABILITY_INVOCATION_KEY: 6;
  CAPABILITY_DELEGATION_KEY: 7;
}

export const KeyUsage: KeyUsageMap;

