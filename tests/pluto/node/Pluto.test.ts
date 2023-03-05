import Pluto from '../../../pluto/Pluto';
import Apollo from '../../../apollo/Apollo';
import {DID} from '../../../domain';
import {Message, MessageDirection} from '../../../domain/models/Message';
import {v4 as uuidv4} from 'uuid';
import {expect} from 'chai';

describe('Pluto tests', () => {
  it('should start successfully', function () {

  });

  it('should store prism DID', async function () {
    const instance = new Pluto({
      type: 'sql',
    });
    await instance.start();
    const value = instance.storePrismDID(DID.fromString("did:prism:a7bacdc91c264066f5858ae3c2e8a159982e8292dc4bf94e58ef8dd982ea9f38:ChwKGhIYCgdtYXN0ZXIwEAFKCwoJc2VjcDI1Nmsx"), 0, "Did test");
    const values = instance.getAllPrismDIDs()
    const byAlias = instance.getDIDInfoByAlias('Did test');
  })
  //
  // it('should store peer DID', function () {
  //
  // });
  //
  // it('should store DID Pair', function () {
  //
  // })
  //
  it('should store message', async function () {

    const instance = new Pluto({
      type: 'sql',
    });
    await instance.start()
    const messageId = uuidv4();
    const message_a = {
      piuri: "test a",
      from: DID.fromString("did:prism:100"),
      thid: 'test',
      body: "Message",
      createdTime: "2000000",
      ack: ["Some string", "saodkas"],
      id: messageId,
      expiresTimePlus: "1000",
      attachments: [],
      to: DID.fromString("did:prism:200"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "sdomasd",
      extraHeaders: ['askdpaks']
    }

    instance.storeMessage(message_a);
    const values = instance.getAllMessages();
    expect(values).not.empty
  })

  it('should store messages', async function () {
    const instance = new Pluto({
      type: 'sql',
    });
    await instance.start()
    const messageId = uuidv4();

    const message = {
      piuri: "test a",
      from: DID.fromString("did:prism:100"),
      thid: 'test',
      body: "Message",
      createdTime: "2000000",
      ack: ["Some string", "saodkas"],
      id: messageId,
      expiresTimePlus: "1000",
      attachments: [],
      to: DID.fromString("did:prism:200"),
      direction: MessageDirection.RECEIVED,
      fromPrior: "sdomasd",
      extraHeaders: ['askdpaks']
    }

    instance.storeMessages(Array(10).fill("_").map(() => message));
    const values = instance.getAllMessages();
    expect(values.length).equals(10);
  })
  //
  // it('should store private keys', function () {
  //
  // });
  //
  // it('should store mediator', function () {
  //
  // });
  //
  // it('should store credential', function () {
  //
  // })
  //
  // it('should get all prism DIDs', function () {
  //
  // });
  //
  // it('should get DID info by DID', function () {
  //
  // });
  //
  // it('should get DID info by alias', function () {
  //
  // });
  //
  // it('should get prism DID key path index', function () {
  //
  // });
  //
  // it('should get prism last key path index', function () {
  //
  // });
  //
  // it('should get all peer DIDs', function () {
  //
  // });
  //
  // it('should get DID private keys by DID', function () {
  //
  // });
  //
  // it('should get DID private key by ID', function () {
  //
  // });
  //
  // it('should get all did pairs', function () {
  //
  // });
  //
  // it('should get pair by DID', function () {
  //
  // });
  //
  // it('should get pair by name', function () {
  //
  // });
  //
  // it('should get all messages', function () {
  //
  // });
  //
  // it('should get all messages by DID', function () {
  //
  // });
  //
  // it('should get all messages sent', function () {
  //
  // });
  //
  // it('should get all messages received', function () {
  //
  // });
  //
  // it('should get all messages sent to', function () {
  //
  // });
  //
  // it('should get all messages received from', function () {
  //
  // });
  //
  // it('should get all messages of type', function () {
  //
  // });
  //
  // it('should get all messages by from to DID', function () {
  //
  // });
  //
  // it('should get message', function () {
  //
  // });
  //
  // it('should get all mediators', function () {
  //
  // });
  //
  // it('should get all credentials', function () {
  //
  // });
})