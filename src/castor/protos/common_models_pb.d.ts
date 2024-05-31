// package: io.iohk.atala.prism.protos
// file: common_models.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class HealthCheckRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
  static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
  export type AsObject = {
  }
}

export class HealthCheckResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
  static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

export namespace HealthCheckResponse {
  export type AsObject = {
  }
}

export class Date extends jspb.Message {
  getYear(): number;
  setYear(value: number): void;

  getMonth(): number;
  setMonth(value: number): void;

  getDay(): number;
  setDay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Date.AsObject;
  static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Date;
  static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
  export type AsObject = {
    year: number,
    month: number,
    day: number,
  }
}

export class TimeInterval extends jspb.Message {
  hasStartTimestamp(): boolean;
  clearStartTimestamp(): void;
  getStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTimestamp(): boolean;
  clearEndTimestamp(): void;
  getEndTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeInterval.AsObject;
  static toObject(includeInstance: boolean, msg: TimeInterval): TimeInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeInterval;
  static deserializeBinaryFromReader(message: TimeInterval, reader: jspb.BinaryReader): TimeInterval;
}

export namespace TimeInterval {
  export type AsObject = {
    startTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BlockInfo extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlockInfo): BlockInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockInfo;
  static deserializeBinaryFromReader(message: BlockInfo, reader: jspb.BinaryReader): BlockInfo;
}

export namespace BlockInfo {
  export type AsObject = {
    number: number,
    index: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TransactionInfo extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): void;

  getLedger(): LedgerMap[keyof LedgerMap];
  setLedger(value: LedgerMap[keyof LedgerMap]): void;

  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): BlockInfo | undefined;
  setBlock(value?: BlockInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionInfo): TransactionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionInfo;
  static deserializeBinaryFromReader(message: TransactionInfo, reader: jspb.BinaryReader): TransactionInfo;
}

export namespace TransactionInfo {
  export type AsObject = {
    transactionId: string,
    ledger: LedgerMap[keyof LedgerMap],
    block?: BlockInfo.AsObject,
  }
}

export interface SortByDirectionMap {
  SORT_BY_DIRECTION_UNKNOWN: 0;
  SORT_BY_DIRECTION_ASCENDING: 1;
  SORT_BY_DIRECTION_DESCENDING: 2;
}

export const SortByDirection: SortByDirectionMap;

export interface LedgerMap {
  UNKNOWN_LEDGER: 0;
  IN_MEMORY: 1;
  CARDANO_TESTNET: 4;
  CARDANO_MAINNET: 5;
}

export const Ledger: LedgerMap;

export interface OperationStatusMap {
  UNKNOWN_OPERATION: 0;
  PENDING_SUBMISSION: 1;
  AWAIT_CONFIRMATION: 2;
  CONFIRMED_AND_APPLIED: 3;
  CONFIRMED_AND_REJECTED: 4;
}

export const OperationStatus: OperationStatusMap;

