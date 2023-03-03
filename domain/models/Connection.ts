import {Database as SQLDatabase} from 'sql.js';
import {Database as SQLiteDabase} from 'sqlite3';

export type ConnectionDatabaseType = SQLDatabase | SQLiteDabase | null;

export type ConnectionSQL = 'sql';
export type ConnectionSQLite = 'sqlite';
type ConfigSQL = {
  type: ConnectionSQL;
  databaseURL?: string;
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
  sqliteDatabaseURL?: string;
}