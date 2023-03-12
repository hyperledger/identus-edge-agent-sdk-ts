import { Database as SQLDatabaseType, InitSqlJsStatic } from "sql.js";

import ConnectionModel, {
  ConnectionDatabaseType,
  ConnectionParams,
} from "../domain/models/Connection";
import ConnectionError from "../domain/models/errors/Connection";

type ParamsType = string | number | null;

let wasm: typeof import("sql.js");
async function getSQLWASM() {
  if (!wasm) {
    wasm = await (await import("sql.js")).default;
  }
  return wasm;
}

export default class Connection implements ConnectionModel {
  readonly sqliteDatabase;
  wasmBinaryURL?: string;
  initialized = false;
  connected = false;
  type;
  database: ConnectionDatabaseType = null;

  constructor(params: ConnectionParams) {
    this.type = params.type;
    if (params.type === "sql") {
      this.wasmBinaryURL = params.wasmBinaryURL;
      this.sqliteDatabase = params.sqliteDatabase ?? null;
    }
  }

  private get SQLDatabase(): Promise<SQLDatabaseType> {
    const db = this.sqliteDatabase;
    return new Promise((resolve, reject) => {
      getSQLWASM()
        .then(async (sqlInit: InitSqlJsStatic) => {
          const SQL = await sqlInit({
            locateFile: (file: string) => {
              debugger;
              return `${
                this.wasmBinaryURL ??
                "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0"
              }/${file}`;
            },
          });
          debugger;

          return resolve(new SQL.Database(db));
        })
        .catch(reject);
    });
  }

  // private get SqliteDatabase(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.getSqlitePackage().then(sqlitePackage => {
  //       const sqlite3 = sqlitePackage.verbose();
  //       resolve(new sqlite3.Database(this.filename ?? ":memory:"));
  //     }).catch(reject);
  //   });
  // }

  async connect(): Promise<any> {
    switch (this.type) {
      case "sql":
        this.database = await this.SQLDatabase;
        this.connected = true;
        break;
      // this.database = await this.SqliteDatabase;
      // this.connected = await new Promise<boolean>((resolve, reject) => {
      //   const openHandler = () => {
      //     resolve(true);
      //   };
      //   const errorHandler = () => {
      //     reject(false);
      //   };
      //   (this.database as any).on("open", openHandler);
      //   (this.database as any).on('error', errorHandler);
      // });
    }
  }

  async disconnect() {
    if (this.database) {
      switch (this.type) {
        case "sql":
          this.database.close();
          this.connected = false;
          break;
        // this.connected = await new Promise<boolean>((resolve) => {
        //   this.database?.close(() => {
        //     resolve(false);
        //   });
        // });
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

  execAsOne<param>(
    query: string,
    params?: ParamsType[] | { [key: string]: ParamsType }
  ): param | null {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = this.exec<param>(query, params, true) as any;

    if (!result.length) {
      return null;
    }
    return this.transformResponseToObject(
      result[0].values[0],
      result[0].columns
    ) as unknown as param;
  }

  execAsMany<param>(
    query: string,
    params?: ParamsType[] | { [key: string]: ParamsType }
  ): param[] {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = this.exec<param>(query, params) as any;
    if (!result.length) {
      return [];
    }
    return result[0].values.map((values: any) =>
      this.transformResponseToObject(values, result[0].columns)
    );
  }

  exec<Interface>(query: string, params?: any): Interface {
    return this.database?.exec(query, params) as Interface;
  }

  private async getSQLPackage() {
    try {
      return ((await import("sql.js")) as { default: InitSqlJsStatic }).default;
    } catch (error) {
      throw new ConnectionError(
        `Unable to import sql driver, please install sql.js and try again.`
      );
    }
  }

  // private async getSqlitePackage() {
  //
  //   try {
  //     return (await import('sqlite3') as unknown as ({ default: any })).default;
  //   } catch (error) {
  //     throw new ConnectionError("Unable to sqlite driver, please install sqlite3");
  //   }
  // }
}
