import {describe} from 'mocha';
import Connection from '../../../pluto/Connection';
import {expect} from 'chai';

describe("Browser Connection tests", () => {
  it('should connect & disconnect to sql in memory database', async function () {
    const connection = new Connection({
      type: "sql",
      wasmBinaryURL: "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/",
    });

    await connection.connect();
    expect(connection.connected).true;
    await connection.disconnect();
    expect(connection.connected).false;
  });
});