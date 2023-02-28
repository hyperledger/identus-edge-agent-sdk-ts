const protobuf = require("protobufjs");
const pbts = require("protobufjs/cli/pbts");

// Load the .proto file
const root = protobuf.loadSync("./castor/protos/node_models.proto");

// Convert to JSON format
const json = root.toJSON();

// Generate TypeScript code
const ts = pbts.main([]);

console.log(ts);
