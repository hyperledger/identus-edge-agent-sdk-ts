import ConnectionModel, {
  ConnectionDatabaseType,
  ConnectionParams,
} from '../domain/models/Connection';
import ConnectionError from '../domain/models/errors/Connection';
import {Database as SQLDatabaseType, InitSqlJsStatic} from 'sql.js';
import {sqlite3, Database as SQLiteDatabaseType} from 'sqlite3';

export default class Connection implements ConnectionModel {
  private databaseURL?: string;
  private filename?: string;
  wasmBinaryURL?: string;
  initialized = false;
  connected = false;
  type;
  database:ConnectionDatabaseType = null;

  constructor(params: ConnectionParams) {
    this.type = params.type;
    if (params.type === 'sql') {
      this.wasmBinaryURL = params.wasmBinaryURL;
      this.databaseURL = params.databaseURL;
    }
    if (params.type === 'sqlite') {
      this.filename = params.filename;
    }
  }

  async connect(): Promise<any> {
    switch (this.type) {
      case 'sql':
        try {
          this.database = await this.SQLDatabase;
          this.connected = true;
        } catch (error) {
          throw error
        }
        break;
      case 'sqlite':
        try {
          const db = await this.SqliteDatabase;
          this.database = db;
          this.connected = await new Promise<boolean>((resolve, reject) => {
            const openHandler = () => {
              resolve(true);
            }
            const errorHandler = () => {
              reject(false);
            }
            db.on("open", openHandler)
            db.on('error', errorHandler);
          })
        } catch (error) {
          throw error
        }
        break;
    }
  }

  async disconnect() {
    if(this.database) {
      switch (this.type) {
        case 'sql':
          this.database.close();
          this.connected = false;
          break;
        case 'sqlite':
          this.connected = await new Promise<boolean>((resolve) => {
            this.database?.close(() => {
              resolve(false);
            });
          })
      }
    }
  }



  private async getSQLPackage() {
    try {
      return (await import('sql.js') as {default: InitSqlJsStatic}).default;
    } catch (error) {
      throw new ConnectionError(`Unable to import sql driver, please install sql.js and try again.`);
    }
  }


  private get SQLDatabase(): Promise<SQLDatabaseType> {
    return new Promise(async (resolve, reject) => {
      /*
      * @todo:
      *   - Load databases depending on the TARGET = node | browser
      * */
      try {
        const sqlInit:InitSqlJsStatic = await this.getSQLPackage();
        const that = this;
        const SQL = await sqlInit({
          // In browser should load async from URL
          locateFile: file => that.wasmBinaryURL ?? `https://sql.js.org/dist/${file}`
        });

        resolve(new SQL.Database())

      } catch (error) {
        reject(error)
      }
    })
  }

  private get SqliteDatabase(): Promise<SQLiteDatabaseType> {
    return new Promise(async (resolve, reject) => {
      try {
        const sqlitePackage = await this.getSqlitePackage();
        const sqlite3 = sqlitePackage.verbose();
        resolve(new sqlite3.Database(this.filename ?? ":memory")); // default to memory
      } catch (error) {
        reject(error)
      }
      })
  }


  private async getSqlitePackage() {

    try {
      return (await import('sqlite3') as unknown as  ({default: sqlite3})).default;
    } catch (error) {
      throw new ConnectionError("Unable to sqlite driver, please install sqlite3");
    }
  }
}