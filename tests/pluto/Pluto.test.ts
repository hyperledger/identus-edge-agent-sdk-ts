import Pluto from '../../pluto/Pluto';
import {expect} from 'chai';
import Connection from '../../pluto/Connection';

describe('Pluto tests', () => {
  it('should start successfully', function () {
    const connection = new Connection({
      type: "sql"
    })
    new Pluto(connection);

  });

  it('should store prism DID', function () {

  })

  it('should store peer DID', function () {

  });

  it('should store DID Pair', function () {

  })

  it('should store message', function () {

  })

  it('should store messages', function () {

  })

  it('should store private keys', function () {

  });

  it('should store mediator', function () {

  });

  it('should store credential', function () {

  })

  it('should get all prism DIDs', function () {

  });

  it('should get DID info by DID', function () {

  });

  it('should get DID info by alias', function () {

  });

  it('should get prism DID key path index', function () {

  });

  it('should get prism last key path index', function () {

  });

  it('should get all peer DIDs', function () {

  });

  it('should get DID private keys by DID', function () {

  });

  it('should get DID private key by ID', function () {

  });

  it('should get all did pairs', function () {

  });

  it('should get pair by DID', function () {

  });

  it('should get pair by name', function () {

  });

  it('should get all messages', function () {

  });

  it('should get all messages by DID', function () {

  });

  it('should get all messages sent', function () {

  });

  it('should get all messages received', function () {

  });

  it('should get all messages sent to', function () {

  });

  it('should get all messages received from', function () {

  });

  it('should get all messages of type', function () {

  });

  it('should get all messages by from to DID', function () {

  });

  it('should get message', function () {

  });

  it('should get all mediators', function () {

  });

  it('should get all credentials', function () {

  });
})