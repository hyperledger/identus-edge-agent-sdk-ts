import Connection from '../../../pluto/Connection';
import {expect} from 'chai';

describe('NODE Connection tests', () => {

  it('should connect & disconnect to sqlite database in node', async function () {
    const connection = new Connection({
      type: "sqlite",
      filename: "sqlite.db"
    });

    await connection.connect();
    expect(connection.connected).true;

    await connection.disconnect();
    expect(connection.connected).false;
  });
});