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

    return new Promise((resolve, reject) => {
      this.getSQLPackage().then((sqlInit: InitSqlJsStatic) => {
        sqlInit({
          // In browser should load async from URL
          locateFile: (file: string) => `${this.wasmBinaryURL}${file}`
          // locateFile: (file: string) => this.wasmBinaryURL ?? `https://sql.js.org/dist/${file}`
        }).then(SQL => resolve(new SQL.Database(this.sqliteDatabase))).catch(reject);
      });

    });
  }

  private get SqliteDatabase(): Promise<SQLiteDatabaseType> {
    return new Promise((resolve, reject) => {
      this.getSqlitePackage().then(sqlitePackage => {
        const sqlite3 = sqlitePackage.verbose();
        resolve(new sqlite3.Database(this.filename ?? ":memory:"));
      }).catch(reject);
    });
  }

  async connect(): Promise<any> {
    switch (this.type) {
      case 'sql':
        this.database = await this.SQLDatabase;
        this.connected = true;
        break;
      case 'sqlite':
        this.database = await this.SqliteDatabase;
        this.connected = await new Promise<boolean>((resolve, reject) => {
          const openHandler = () => {
            resolve(true);
          };
          const errorHandler = () => {
            reject(false);
          };
          (this.database as SQLiteDatabaseType).on("open", openHandler);
          (this.database as SQLiteDatabaseType).on('error', errorHandler);
        });
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
    const object: { [key: string]: string | number | null } = {};
    for (const key in columns) {
      object[columns[key]] = values[key];
    }
    return object;
  }

  execAsOne<param>(query: string, params?: ParamsType[] | { [key: string]: ParamsType }): param | null | Promise<param | null> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = this.exec<param>(query, params, true) as any;
    if (result instanceof Promise) {
      return result;
    }

    if (!result.length) {
      return null;
    }
    return this.transformResponseToObject(result[0].values[0], result[0].columns) as unknown as param;
  }

  execAsMany<param>(query: string, params?: ParamsType[] | { [key: string]: ParamsType }): param[] | Promise<param[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = this.exec<param>(query, params) as any;
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