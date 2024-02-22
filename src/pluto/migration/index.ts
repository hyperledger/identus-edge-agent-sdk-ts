import {
  combineLatest,
  type Observable
  ,
  BehaviorSubject
} from 'rxjs'
import {
  shareReplay,
  switchMap
} from 'rxjs/operators'
import { INTERNAL_CONTEXT_COLLECTION, type InternalStoreCollectionDocType, type NumberFunctionMap, PROMISE_RESOLVE_NULL, type RxDocumentData, type RxJsonSchema, type RxSchema, type RxStorageInstance, type RxStorageInstanceCreationParams, type WithAttachmentsData, clone, createRevision, createRxSchema, deepEqual, flatClone, getDefaultRxDocumentMeta, getPreviousVersions, getPrimaryKeyOfInternalDocument, getWrappedStorageInstance, normalizeMangoQuery, now, overwritable, runAsyncPluginHooks, runPluginHooks, toPromise, type MigrationState, type RxStorage, getFromMapOrCreate, PROMISE_RESOLVE_FALSE, type RxCollection, RXJS_SHARE_REPLAY_DEFAULTS, type RxPlugin } from 'rxdb'

import { type AllMigrationStates, type RxDatabase, type RxDocument } from 'rxdb/dist/types/types'

export interface OldRxCollection {
  version: number
  schema: RxSchema
  storageInstance: RxStorageInstance<any, any, any>
  dataMigrator: EncryptedDataMigrator
  newestCollection: RxCollection
  database: RxDatabase
  _migrate?: boolean
  _migratePromise?: Promise<any>
}
export const MIGRATION_DEFAULT_BATCH_SIZE = 200

export class EncryptedDataMigrator {
  constructor(
    public newestCollection: RxCollection,
    public migrationStrategies: NumberFunctionMap
  ) {
    this.currentSchema = newestCollection.schema
    this.database = newestCollection.database
    this.name = newestCollection.name
  }

  public currentSchema: RxSchema
  public database: RxDatabase
  public name: string

  async countAllDocuments(
    storage: RxStorage<any, any>,
    storageInstance: RxStorageInstance<any, any, any>,
    schema: RxJsonSchema<any>
  ): Promise<number> {
    const getAllQueryPrepared = storage.statics.prepareQuery(
      storageInstance.schema,
      normalizeMangoQuery(
        schema,
        {}
      )
    )
    const queryResult = await storageInstance.count(getAllQueryPrepared)
    return queryResult.count
  }

  async migratePromise(batchSize: number): Promise<boolean> {
    const migrationNeeded = await mustMigrate(this)
    if (!migrationNeeded) {
      return false
    }
    const oldCollections = await _getOldCollections(this)
    while (oldCollections.length > 0) {
      const oldCollection = oldCollections.shift()
      if (oldCollection) {
        let row: RxDocument<any, any>
        const notMatching: any[] = []
        while ((row = await getBatchOfOldCollection(oldCollection, batchSize, notMatching)).length > 0) {
          await _migrateDocuments(oldCollection, row)
          notMatching.push(...row.map((document: any) => document[oldCollection.schema.primaryPath]))
        }
        await deleteOldCollection(oldCollection)
      }
    }
    return true
  }
}

export async function createOldCollection(
  version: number,
  schemaObj: RxJsonSchema<any>,
  dataMigrator: EncryptedDataMigrator
): Promise<OldRxCollection> {
  const database = dataMigrator.newestCollection.database
  const storageInstanceCreationParams: RxStorageInstanceCreationParams<any, any> = {
    databaseInstanceToken: database.token,
    databaseName: database.name,
    collectionName: dataMigrator.newestCollection.name,
    schema: schemaObj,
    options: dataMigrator.newestCollection.instanceCreationOptions,
    multiInstance: database.multiInstance,
    devMode: overwritable.isDevMode(),
    password: database.password
  }
  runPluginHooks(
    'preCreateRxStorageInstance',
    storageInstanceCreationParams
  )

  const storageInstance = await database.storage.createStorageInstance(
    storageInstanceCreationParams
  )
  const ret: OldRxCollection = {
    version,
    dataMigrator,
    newestCollection: dataMigrator.newestCollection,
    database,
    schema: createRxSchema(schemaObj, database.hashFunction, false),
    storageInstance
  }

  ret.storageInstance = getWrappedStorageInstance(
    ret.database,
    storageInstance,
    schemaObj
  )

  return ret
}

export async function getOldCollectionDocs(
  dataMigrator: EncryptedDataMigrator
): Promise<Array<RxDocumentData<InternalStoreCollectionDocType>>> {
  const collectionDocKeys = getPreviousVersions(dataMigrator.currentSchema.jsonSchema)
    .map(version => dataMigrator.name + '-' + version)

  const docs = await dataMigrator.database.internalStore.findDocumentsById(
    collectionDocKeys.map(key => getPrimaryKeyOfInternalDocument(
      key,
      INTERNAL_CONTEXT_COLLECTION
    )),
    false
  )
  return Object.values(docs)
}

/**
 * get an array with OldCollection-instances from all existing old storage-instances
 */
export async function _getOldCollections(
  dataMigrator: EncryptedDataMigrator
): Promise<OldRxCollection[]> {
  const oldColDocs = await getOldCollectionDocs(dataMigrator)

  return await Promise.all(
    oldColDocs
      .map(async colDoc => {
        return await createOldCollection(
          colDoc.data.schema.version,
          colDoc.data.schema,
          dataMigrator
        )
      })
      .filter(colDoc => colDoc !== null)
  )
}

/**
 * returns true if a migration is needed
 */
export async function mustMigrate(dataMigrator: EncryptedDataMigrator): Promise<boolean> {
  if (dataMigrator.currentSchema.version === 0) {
    return await PROMISE_RESOLVE_FALSE
  }
  return await getOldCollectionDocs(dataMigrator)
    .then(oldColDocs => {
      if (oldColDocs.length === 0) {
        return false
      } else {
        return true
      }
    })
}

export async function runStrategyIfNotNull(
  oldCollection: OldRxCollection,
  version: number,
  docOrNull: any | null
): Promise<any | null> {
  if (docOrNull === null) {
    return await PROMISE_RESOLVE_NULL
  } else {
    const migrationStrategy = oldCollection.dataMigrator.migrationStrategies[version]
    if (!migrationStrategy) {
      return docOrNull
    }
    const ret = migrationStrategy(docOrNull, oldCollection)
    const retPromise = toPromise(ret)
    return await retPromise
  }
}

export async function getBatchOfOldCollection(
  oldCollection: OldRxCollection,
  batchSize: number,
  notMatching: any[]
): Promise<any[]> {
  const storage = oldCollection.database.storage
  const storageInstance = oldCollection.storageInstance
  const query: any = {}
  if (notMatching.length > 0) {
    query[oldCollection.schema.primaryPath] = {
      $ne: notMatching
    }
  }
  const preparedQuery = storage.statics.prepareQuery(
    storageInstance.schema,
    {
      selector: query,
      sort: [{ [oldCollection.schema.primaryPath]: 'asc' } as any],
      limit: batchSize,
      skip: notMatching.length
    }
  )
  const results = await storageInstance.query(preparedQuery)
  const documents = results.documents.map((doc) => flatClone(doc))
  return documents
}

/**
 * runs the doc-data through all following migrationStrategies
 * so it will match the newest schema.
 * @throws Error if final doc does not match final schema or migrationStrategy crashes
 * @return final object or null if migrationStrategy deleted it
 */
export async function migrateDocumentData(
  oldCollection: OldRxCollection,
  docData: any
): Promise<any | null> {
  /**
     * We cannot deep-clone Blob or Buffer
     * so we just flat clone it here
     * and attach it to the deep cloned document data.
     */
  const attachmentsBefore = flatClone(docData._attachments)
  const mutateableDocData = clone(docData)
  mutateableDocData._attachments = attachmentsBefore

  let nextVersion = oldCollection.version + 1

  // run the document through migrationStrategies
  let currentPromise = Promise.resolve(mutateableDocData)
  while (nextVersion <= oldCollection.newestCollection.schema.version) {
    const version = nextVersion
    currentPromise = currentPromise.then(async docOrNull => await runStrategyIfNotNull(
      oldCollection,
      version,
      docOrNull
    ))
    nextVersion++
  }

  return await currentPromise.then(doc => {
    if (doc === null) {
      return PROMISE_RESOLVE_NULL
    }

    /**
         * Add _meta field if missing.
         * We need this to migration documents from pre-12.0.0 state
         * to version 12.0.0. Therefore we need to add the _meta field if it is missing.
         * TODO remove this in the major version 13.0.0
         */
    if (!doc._meta) {
      doc._meta = getDefaultRxDocumentMeta()
    }
    return doc
  })
}

export function isDocumentDataWithoutRevisionEqual<T>(doc1: T, doc2: T): boolean {
  const doc1NoRev = Object.assign({}, doc1, {
    _attachments: undefined,
    _rev: undefined
  })
  const doc2NoRev = Object.assign({}, doc2, {
    _attachments: undefined,
    _rev: undefined
  })
  return deepEqual(doc1NoRev, doc2NoRev)
}

/**
 * transform documents data and save them to the new collection
 * @return status-action with status and migrated document
 */
export async function _migrateDocuments<RxDocType>(
  oldCollection: OldRxCollection,
  documentsData: Array<RxDocumentData<RxDocType>>
): Promise<Array<{ type: string, doc: any }>> {
  /**
     * Required in case the hooks mutate the document
     * data which would then wrongly cause conflicts
     * because we would send the mutated document
     * as writeRow.previous.
     */
  const previousDocumentData = clone(documentsData)

  // run hooks that might mutate documentsData
  await Promise.all(
    documentsData.map(async docData => await runAsyncPluginHooks(
      'preMigrateDocument',
      {
        docData,
        oldCollection
      }
    ))
  )
  // run the migration strategies on each document
  const migratedDocuments: Array<any | null> = await Promise.all(
    documentsData.map(async docData => await migrateDocumentData(oldCollection, docData))
  )

  const bulkWriteToStorageInput: Array<RxDocumentData<any>> = []
  const actions: any[] = []

  documentsData.forEach((docData, idx) => {
    const migratedDocData: any | null = migratedDocuments[idx]
    const action = {
      res: null as any,
      type: '',
      migrated: migratedDocData,
      doc: docData,
      oldCollection,
      newestCollection: oldCollection.newestCollection
    }
    actions.push(action)

    /**
         * Deterministically handle the revision
         * so migrating the same data on multiple instances
         * will result in the same output.
         */
    if (isDocumentDataWithoutRevisionEqual(docData, migratedDocData)) {
      /**
             * Data not changed by migration strategies, keep the same revision.
             * This ensures that other replicated instances that did not migrate already
             * will still have the same document.
             */
      migratedDocData._rev = docData._rev
    } else if (migratedDocData !== null) {
      /**
             * data changed, increase revision height
             * so replicating instances use our new document data
             */
      migratedDocData._rev = createRevision(
        oldCollection.newestCollection.database.token,
        docData
      )
    }

    if (migratedDocData) {
      /**
             * save to newest collection
             * notice that this data also contains the attachments data
             */
      const attachmentsBefore = migratedDocData._attachments
      const saveData: WithAttachmentsData<any> = migratedDocData
      saveData._attachments = attachmentsBefore
      saveData._meta.lwt = now()
      bulkWriteToStorageInput.push(saveData)
      action.res = saveData
      action.type = 'success'
    } else {
      /**
             * Migration strategy returned null
             * which means we should not migrate this document,
             * just drop it.
             */
      action.type = 'deleted'
    }
  })

  /**
     * Write the documents to the newest collection.
     * We need to add as revision
     * because we provide the _rev by our own
     * to have deterministic revisions in case the migration
     * runs on multiple nodes which must lead to the equal storage state.
     */
  if (bulkWriteToStorageInput.length > 0) {
    /**
         * To ensure that we really keep that revision, we
         * hackly insert this document via the RxStorageInstance.originalStorageInstance
         * so that getWrappedStorageInstance() does not overwrite its own revision.
         */
    const originalStorageInstance = oldCollection.newestCollection.storageInstance.originalStorageInstance
    await originalStorageInstance.bulkWrite(
      bulkWriteToStorageInput.map(document => ({ document })),
      'data-migrator-import'
    )
  }

  // run hooks
  await Promise.all(
    actions.map(async action => await runAsyncPluginHooks(
      'postMigrateDocument',
      action
    ))
  )

  // remove the documents from the old collection storage instance
  const bulkDeleteInputData = documentsData.map((docData, idx) => {
    const writeDeleted = flatClone(docData)
    writeDeleted._deleted = true
    writeDeleted._attachments = {}
    return {
      previous: previousDocumentData[idx],
      document: writeDeleted
    }
  })

  if (bulkDeleteInputData.length > 0) {
    await oldCollection.storageInstance.bulkWrite(
      bulkDeleteInputData,
      'data-migrator-delete'
    )
  }

  return actions
}

/**
 * deletes this.storageInstance and removes it from the database.collectionsCollection
 */
export async function deleteOldCollection(
  oldCollection: OldRxCollection
): Promise<void> {
  await oldCollection.storageInstance.remove()

  const removeCollection = await oldCollection.database.removeCollectionDoc(
    oldCollection.dataMigrator.name,
    oldCollection.schema
  )

  return removeCollection
}

export const DATA_MIGRATOR_BY_COLLECTION = new WeakMap<RxCollection, EncryptedDataMigrator>()
export interface MigrationStateWithCollection {
  collection: RxCollection
  state: MigrationState
}

export const DATA_MIGRATION_STATE_SUBJECT_BY_DATABASE = new WeakMap<RxDatabase, BehaviorSubject<Array<Observable<MigrationStateWithCollection>>>>()

export function getMigrationStateByDatabase(database: RxDatabase): BehaviorSubject<Array<Observable<MigrationStateWithCollection>>> {
  return getFromMapOrCreate(
    DATA_MIGRATION_STATE_SUBJECT_BY_DATABASE,
    database,
    () => new BehaviorSubject<Array<Observable<MigrationStateWithCollection>>>([])
  )
}

/**
 * Complete on database destroy
 * so people do not have to unsubscribe
 */
export function onDatabaseDestroy(database: RxDatabase) {
  const subject = DATA_MIGRATION_STATE_SUBJECT_BY_DATABASE.get(database)
  if (subject) {
    subject.complete()
  }
}

export const RxDBEncryptedMigrationPlugin: RxPlugin = {
  name: 'encrypted-migration',
  rxdb: true,
  hooks: {
    preDestroyRxDatabase: {
      after: onDatabaseDestroy
    }
  },
  prototypes: {
    RxDatabase: (proto: any) => {
      proto.migrationStates = function (this: RxDatabase): Observable<AllMigrationStates> {
        return getMigrationStateByDatabase(this).pipe(
          switchMap(list => combineLatest(list)),
          shareReplay(RXJS_SHARE_REPLAY_DEFAULTS)
        )
      }
    },
    RxCollection: (proto: any) => {
      proto.getDataMigrator = function (this: RxCollection): EncryptedDataMigrator {
        return getFromMapOrCreate(
          DATA_MIGRATOR_BY_COLLECTION,
          this,
          () => new EncryptedDataMigrator(
            this.asRxCollection,
            this.migrationStrategies
          )
        )
      }
      proto.migrationNeeded = async function (this: RxCollection) {
        if (this.schema.version === 0) {
          return await PROMISE_RESOLVE_FALSE
        }
        const dataMigrator = getFromMapOrCreate(
          DATA_MIGRATOR_BY_COLLECTION,
          this,
          () => new EncryptedDataMigrator(
            this.asRxCollection,
            this.migrationStrategies
          )
        )
        return await mustMigrate(dataMigrator)
      }
    }
  }
}
