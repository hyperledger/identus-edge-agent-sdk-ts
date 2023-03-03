import {Database as SQLDatabase} from 'sql.js';
import {Database as SQLiteDabase} from 'sqlite3';
import {Buffer} from 'buffer';

export type ConnectionDatabaseType = SQLDatabase | SQLiteDabase | null;
export type SqliteDatabaseType = ArrayLike<number> | Buffer | null;

export type ConnectionSQL = 'sql';
export type ConnectionSQLite = 'sqlite';
type ConfigSQL = {
  type: ConnectionSQL;
  sqliteDatabase?: SqliteDatabaseType;
  wasmBinaryURL?: string;
}

type ConfigSQLite = {
  type: ConnectionSQLite;
  filename: string;

}

export type ConnectionParams = ConfigSQL | ConfigSQLite

export default interface ConnectionModel extends Pick<ConnectionParams, "type"> {
  connect(driver: ConnectionDatabaseType): Promise<any>;
  disconnect(): Promise<any>;
  connected: boolean;
  initialized: boolean;
  wasmBinaryURL?: string;
  readonly filename?: string;
  readonly sqliteDatabase?: SqliteDatabaseType;
}