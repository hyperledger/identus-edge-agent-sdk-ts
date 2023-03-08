// import Connection from '../../../pluto/Connection';
// import {expect} from 'chai';
//
// describe('Connection tests', () => {
//   it('should connect & disconnect to sql in memory database', async function () {
//     const connection = new Connection({
//       type: "sql",
//       wasmBinaryURL: `${process.cwd()}/node_modules/sql.js/dist`
//     });
//     await connection.connect();
//     expect(connection.connected).true;
//     await connection.disconnect();
//     expect(connection.connected).false;
//   });
// });