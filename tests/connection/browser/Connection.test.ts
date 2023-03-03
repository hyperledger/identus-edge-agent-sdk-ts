import Connection from '../../../pluto/Connection';
import {expect} from 'chai';
describe('BROWSER - Connection tests', () => {
  it('should connect & disconnect to sql in memory database', async function () {
    const connection = new Connection({
      type: "sql",
      wasmBinaryURL: "./node_modules/sql.js/dist/sql-wasm.wasm",
    })

    await connection.connect()
    expect(connection.connected).true
    await connection.disconnect();
    expect(connection.connected).false;
  });

  it('should connect & disconnect to sqlite database in node', async function () {
    const connection = new Connection({
      type: "sqlite",
      filename: "sqlite.db"
    })

    await connection.connect();

    expect(connection.connected).true;

    await connection.disconnect();
    expect(connection.connected).false;
  });
})