import ConnectionModel, {
  ConnectionDatabaseType,
  ConnectionDriverType,
  ConnectionParams
} from '../domain/models/Connection';
import ConnectionError from '../domain/models/errors/Connection';
import {InitSqlJsStatic} from 'sql.js';
import sqljs from 'sql.js';

export default class Connection implements ConnectionModel {
  private databaseURL?: string;
  initialized = false;
  connected = false;
  type;
  database:ConnectionDatabaseType = null;

  constructor(params: ConnectionParams) {
    this.type = params.type;
    this.databaseURL = params.databaseURL;
    // this.init();
  }

  async init() {
    let driver:ConnectionDriverType;
    let database: ConnectionDatabaseType;
    try {
      driver =  await this.getDriver();

    } catch (error) {
        throw new ConnectionError((error as ConnectionError).message)
    }

    try {
      database = await this.connect(driver);
    } catch (error) {
      throw error;
    }
    this.initialized = true;
    this.database = database;
  }

  async connect(driver:ConnectionDriverType): Promise<any> {
    const that = this;
    let database:ConnectionDatabaseType;

    switch (driver.name) {
      case 'initSqlJs':
        try {
          const SQL = await driver(this.databaseURL !== undefined ? {

            locateFile(url: string, scriptDirectory: string): string {
              return that.databaseURL as unknown as string;
            }
          } : {})
          that.connected = true;
          database = new SQL.Database();

        } catch (error) {
          // Unable to connect to database
          throw new ConnectionError((error as Error).message);
        }
        break;

      default:
        throw new ConnectionError(`Internal error: unable to handle the case of function ${driver.name}`);
    }
    return database;
  }

  async disconnect(): Promise<void> {
    if(this.database) {
      switch (this.type) {
        case 'sql':
          this.database.close();
          this.connected = false;
          break;
      }
    }
  }

  private async getDriver(): Promise<ConnectionDriverType> {
    let database:ConnectionDriverType;
    /*

    * Here you can add driver support.
    * Make sure you've defined a type for the given driver, then handle it in the switch cases
    *
    * */
    switch (this.type) {
      case 'sql':
        try {
          database = require('sql.js') as InitSqlJsStatic;
        } catch (error) {
          console.log(error)
          throw new ConnectionError(`Unable to import sql driver, please install sql.js and try again.`);
        }
        break;
      default:
        throw new ConnectionError(`The driver ${this.type} is not supported, please contact support.`);
    }
    return database;
  }

}