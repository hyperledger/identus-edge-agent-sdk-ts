import { uuid } from "@stablelib/uuid";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

import { expect } from "chai";

import Mercury from "../../../../domain/buildingBlocks/Mercury";
import { MercuryStub } from "../../mocks/MercuryMock";
import {
  AttachmentData,
  AttachmentDescriptor,
  Message,
} from "../../../../domain";
import { ProtocolType } from "../../../../prism-agent/protocols/ProtocolTypes";
import { PickupRunner } from "../../../../prism-agent/protocols/pickup/PickupRunner";

chai.use(chaiAsPromised);

let mercury: Mercury;
let messageExamples: Message[];
let attachments: AttachmentData[];

describe("PickupRunner Tests", () => {
  beforeEach(async () => {
    mercury = new MercuryStub();
    messageExamples = [
      new Message("{}", undefined, "test1"),
      new Message("{}", undefined, "test2"),
      new Message("{}", undefined, "test3"),
    ];
    attachments = await Promise.all(
      messageExamples.map(async (message) => {
        return {
          base64: await mercury.packMessage(message),
        };
      })
    );
  });

  it("Should parse message when DeliveryMessage is received", async () => {
    const message = new Message(
      "{}",
      undefined,
      ProtocolType.PickupDelivery,
      undefined,
      undefined,
      attachments.map((data) => {
        return new AttachmentDescriptor(data, undefined, uuid());
      })
    );

    const runner = new PickupRunner(message, mercury);
    const response = await runner.run();
    const parsedMessages = response.map((response) => response.message);

    expect(messageExamples).to.deep.equal(parsedMessages);
  });

  it("Should throw an error when a non DeliveryMessage is received", async () => {
    const message = new Message(
      "{}",
      undefined,
      "SomethingElse",
      undefined,
      undefined,
      attachments.map((data) => {
        return new AttachmentDescriptor(data, undefined, uuid());
      })
    );

    async function run() {
      const runner = new PickupRunner(message, mercury);
      return runner.run();
    }

    expect(run()).to.eventually.be.rejectedWith(
      Error,
      "Invalid Pickup message type received"
    );
  });
});
