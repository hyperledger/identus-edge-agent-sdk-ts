# Pluto


Pluto is the SDK storage layer, responsible for the saving and retrieval of data within the SDK.
As storage is a complex issue Pluto has been designed to try and enable maximum flexibility balanced with ease-of-use. Multiple levels of abstraction are provided so an implementation can be curated specifically to the use-case.
In an effort to reduce the minimum amount of work required to get started with the SDK, implementations of the top-most abstractions are provided, but the underlying data layer is not and will require some work.

The levels of abstraction are described below:


## Top level interface
An SDK specific interface, detailing all the necessary storage functions for operation.

This interface defines the specific functions requried by the SDK, and while it's input and output are all Domain classes, it provides no opinion on how they are handled internally.
This approach allows for maximum customisation, constrained only by the interface contract.

The top level interface can be found at [SDK.Domain.Pluto](../domain/buildingBlocks/Pluto.ts) alongside our other top level interfaces.


```TS
  import SDK from "@hyperledger/identus-edge-agent-sdk";

  class CustomPluto implements SDK.Domain.Pluto {
    storeMessage(message: SDK.Domain.Message): Promise<void> {
      // implementation
    }

    getAllMessages(): Promise<SDK.Domain.Message[]> {
      // implementation
    }

    // ...etc
  }

  const pluto = new CustomPluto();
  const agent = Agent.initialize({ pluto, ...etc });
```


## Store
A general purpose CRUD interface, with a pre-designed Table structure and significantly smaller footprint than the top level interface.

Designed to be used with the existing Pluto implementation, where Pluto handles the logic and orchestration from Domain classes to Storable models, and the Store handles the persistence of those models.

The Store revolves around a storable object, which is an arbitrary object with a `uuid` property that uniquely identifies the object. 
The interface can be found at [SDK.Pluto.Store](./Pluto.ts)

```TS
  import SDK from "@hyperledger/identus-edge-agent-sdk";

  class CustomStore implements SDK.Pluto.Store {
    insert<T extends SDK.Domain.Pluto.Storable>(table: string, model: T): Promise<void> {
      // implementation
    }

    query<T extends SDK.Domain.Pluto.Storable>(table: string, query?: MangoQuery<T>): Promise<T[]> {
      // implementation
    }

    update<T extends SDK.Domain.Pluto.Storable>(table: string, model: T): Promise<void> {
      // implementation
    }

    delete(table: string, uuid: string): Promise<void> {
      // implementation
    }
  }

  const store = new CustomStore();
  const pluto = new SDK.Pluto(store, apollo);
  const agent = Agent.initialize({ pluto, apollo, ...etc });
```

## RxDB storage

An implementation of the [RxStorage](https://rxdb.info/rx-storage.html) interface, allowing the choice and customisation of data layer using RxDB implementations.
The SDK exports an [implementation](./rxdb/Store.ts) of the Store interface using RxDB, which only requires the storage, name and password to run.

> Note: the composed storage requires encryption capabilities.


```TS
  import SDK from "@hyperledger/identus-edge-agent-sdk";
  import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';
  import { wrappedKeyEncryptionCryptoJsStorage } from 'rxdb/plugins/encryption-crypto-js';

  // custom RxDB inMemory storage
  const customStorage = wrappedKeyEncryptionCryptoJsStorage({
    storage: getRxStorageMemory()
  });

  const store = new SDK.Store({
    name: `exampledb`,
    password: 'examplepass',
    storage: customStorage,
  });
  const pluto = new SDK.Pluto(store, apollo);
  const agent = Agent.initialize({ pluto, apollo, ...etc });
```

> Read more about RxStorage in the RxDB docs https://rxdb.info/rx-storage.html

