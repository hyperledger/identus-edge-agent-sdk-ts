[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](Domain.md) / Backup

# Namespace: Backup

[Domain](Domain.md).Backup

## Table of contents

### Namespaces

- [v0\_0\_1](Domain.Backup.v0_0_1.md)

### Type Aliases

- [Schema](Domain.Backup.md#schema)
- [v0\_0\_1](Domain.Backup.md#v0_0_1)

### Variables

- [defaultVersion](Domain.Backup.md#defaultversion)
- [v0\_0\_1](Domain.Backup.md#v0_0_1-1)

## Type Aliases

### Schema

Ƭ **Schema**: [`v0_0_1`](Domain.Backup.md#v0_0_1)

All supported backup schemas

#### Defined in

[src/domain/backup/index.ts:6](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/backup/index.ts#L6)

___

### v0\_0\_1

Ƭ **v0\_0\_1**: `TB.Static`\<typeof [`v0_0_1`](Domain.Backup.md#v0_0_1-1)\>

#### Defined in

[src/domain/backup/v0_0_1.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/backup/v0_0_1.ts#L39)

[src/domain/backup/v0_0_1.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/backup/v0_0_1.ts#L50)

[src/domain/backup/v0_0_1.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/backup/v0_0_1.ts#L52)

## Variables

### defaultVersion

• `Const` **defaultVersion**: ``"0.0.1"``

#### Defined in

[src/domain/backup/index.ts:8](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/backup/index.ts#L8)

___

### v0\_0\_1

• `Const` **v0\_0\_1**: `TObject`\<\{ `credentials`: `TArray`\<`TObject`\<\{ `data`: `TString` ; `recovery_id`: `TString`  }\>\> ; `did_pairs`: `TArray`\<`TObject`\<\{ `alias`: `TString` ; `holder`: `TString` ; `recipient`: `TString`  }\>\> ; `dids`: `TArray`\<`TObject`\<\{ `alias`: `TOptional`\<`TString`\> ; `did`: `TString`  }\>\> ; `keys`: `TArray`\<`TObject`\<\{ `did`: `TOptional`\<`TString`\> ; `index`: `TOptional`\<`TNumber`\> ; `key`: `TString` ; `recovery_id`: `TString`  }\>\> ; `link_secret`: `TOptional`\<`TString`\> = linksecret; `mediators`: `TArray`\<`TObject`\<\{ `holder_did`: `TString` ; `mediator_did`: `TString` ; `routing_did`: `TString`  }\>\> ; `messages`: `TArray`\<`TString`\> ; `version`: `TOptional`\<`TLiteral`\<``"0.0.1"``\>\>  }\>

#### Defined in

[src/domain/backup/v0_0_1.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/backup/v0_0_1.ts#L39)

[src/domain/backup/v0_0_1.ts:50](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/backup/v0_0_1.ts#L50)

[src/domain/backup/v0_0_1.ts:52](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/412988e74b53c977d2db02a120bdfcde11978df5/src/domain/backup/v0_0_1.ts#L52)
