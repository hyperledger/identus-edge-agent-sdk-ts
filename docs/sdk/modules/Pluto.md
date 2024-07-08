[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / Pluto

# Namespace: Pluto

Pluto implementation

Structure:
- Pluto class is an orchestration layer
- Repositories handle mapping Domain - Storable Models
- Models suggest db structure
- Store abstracts db implementation

Pluto:
- always handles Domain classes
- manage relationships
- handle logic and concepts
- throw known Errors
- return null
- naming convention
  - (get/store) (Domain name Pluralized) ie getCredentials

Models:
- naming convention
  - alias for optional names
  - name for required identifiers
  - dataJson for JSON.stringified objects

Store:
- simplified interface
- crud interactions
- only use Models

Future:
 - versioning
 - migrations

## Table of contents

### Interfaces

- [Store](../interfaces/Pluto.Store.md)
