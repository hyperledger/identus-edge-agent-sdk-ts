import {Database as SQLDatabase, InitSqlJsStatic} from 'sql.js';
import {Database as SQLiteDatabase} from 'sqlite3';
export type ConnectionType = 'sql' | 'sqlite';
export type ConnectionDatabaseType = SQLDatabase | SQLiteDatabase | null;
export type ConnectionDriverType = InitSqlJsStatic;
export type ConnectionParams = {
  databaseURL?: string;
  type: ConnectionType;
}
export default interface ConnectionModel extends Pick<ConnectionParams, 'type'> {
  connect(driver: ConnectionDriverType): Promise<any>;
  disconnect(): Promise<any>;
  connected: boolean;
  initialized: boolean;
}