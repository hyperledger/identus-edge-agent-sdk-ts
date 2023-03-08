import ConnectionModel, {ConnectionDatabaseType, ConnectionParams,} from '../domain/models/Connection';
import ConnectionError from '../domain/models/errors/Connection';
import {Database as SQLDatabaseType, InitSqlJsStatic} from 'sql.js';
import {Database as SQLiteDatabaseType, sqlite3} from 'sqlite3';

type ParamsType = string | number | null;
export default class Connection implements ConnectionModel {
  readonly filename;
  readonly sqliteDatabase;
  wasmBinaryURL?: string;
  initialized = false;
  connected = false;
  type;
  database: ConnectionDatabaseType = null;

  constructor(params: ConnectionParams) {
    this.type = params.type;
    if (params.type === 'sql') {
      this.wasmBinaryURL = params.wasmBinaryURL;
      this.sqliteDatabase = params.sqliteDatabase ?? null;
    }

    if (params.type === 'sqlite') {
      this.filename = params.filename;
    }
  }

  private get SQLDatabase(): Promise<SQLDatabaseType> {

    return new Promise(async (resolve, reject) => {
      try {
        const sqlInit: InitSqlJsStatic = await this.getSQLPackage();
        const that = this;
        const SQL = await sqlInit({
          // In browser should load async from URL
          locateFile: file => that.wasmBinaryURL ?? `https://sql.js.org/dist/${file}`
        });

        resolve(new SQL.Database(this.sqliteDatabase));

      } catch (error) {
        reject(error);
      }
    });
  }

  private get SqliteDatabase(): Promise<SQLiteDatabaseType> {
    return new Promise(async (resolve, reject) => {
      try {
        const sqlitePackage = await this.getSqlitePackage();
        const sqlite3 = sqlitePackage.verbose();
        resolve(new sqlite3.Database(this.filename ?? ":memory")); // default to memory
      } catch (error) {
        reject(error);
      }
    });
  }

  async connect(): Promise<any> {
    switch (this.type) {
      case 'sql':
        try {
          this.database = await this.SQLDatabase;
          this.connected = true;
        } catch (error) {
          throw error;
        }
        break;
      case 'sqlite':
        try {
          const db = await this.SqliteDatabase;
          this.database = db;
          this.connected = await new Promise<boolean>((resolve, reject) => {
            const openHandler = () => {
              resolve(true);
            };
            const errorHandler = () => {
              reject(false);
            };
            db.on("open", openHandler);
            db.on('error', errorHandler);
          });
        } catch (error) {
          throw error;
        }
        break;
    }
  }

  async disconnect() {
    if (this.database) {
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
          });
      }
    }
  }

  transformResponseToObject(values: any, columns: any) {
    let object: { [key: string]: string | number | null } = {};
    for (let key in columns) {
      object[columns[key]] = values[key];
    }
    return object;
  }

  execAsOne<param>(query: string, params?: ParamsType[] | { [key: string]: ParamsType }): param | null | Promise<param | null> {
    // @ts-ignore
    let result = this.exec<param>(query, params, true) as any;
    if (result instanceof Promise) {
      return result;
    }

    if (!result.length) {
      return null;
    }
    return this.transformResponseToObject(result[0].values[0], result[0].columns) as unknown as param;
  }

  execAsMany<param>(query: string, params?: ParamsType[] | { [key: string]: ParamsType }): param[] | Promise<param[]> {
    // @ts-ignore
    let result = this.exec<param>(query, params) as any;
    if (result instanceof Array) {
      return result[0].values.map((values: any) => this.transformResponseToObject(values, result[0].columns));
    } else {
      return result as Promise<param[]>;
    }
  }

  exec<Interface>(query: string, params?: any, firstOrNull?: false): Promise<Interface> | Interface {
    switch (this.type) {
      case "sql":
        return this.database?.exec(query, params) as Interface;
      case "sqlite":
        return new Promise((resolve, reject) => {
          const database = this.database as SQLiteDatabaseType;
          const prepare = database.prepare(query, params);
          database.serialize(() => {
            prepare.all((err, row) => {
              if (err) {
                return reject(err);
              }
              const first = firstOrNull ? row[0] : null;
              resolve(firstOrNull ? first as Interface : row as Interface);
            });
          });
        });
    }
  }

  private async getSQLPackage() {
    try {
      return (await import('sql.js') as { default: InitSqlJsStatic }).default;
    } catch (error) {
      throw new ConnectionError(`Unable to import sql driver, please install sql.js and try again.`);
    }
  }

  private async getSqlitePackage() {

    try {
      return (await import('sqlite3') as unknown as ({ default: sqlite3 })).default;
    } catch (error) {
      throw new ConnectionError("Unable to sqlite driver, please install sqlite3");
    }
  }

}