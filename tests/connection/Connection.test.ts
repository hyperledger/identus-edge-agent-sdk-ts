import Connection from '../../pluto/Connection';
import {expect} from 'chai';

describe('Connection tests', () => {
  it('should connect to sql in memory database', async function () {
    const connection = new Connection({
      type: "sql",
    })

    await connection.init()
    expect(connection.connected).true
  });
})