import { uuid } from "@stablelib/uuid";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';


import { Mercury } from "../../../../src/domain/buildingBlocks/Mercury";
import { MercuryStub } from "../../mocks/MercuryMock";
import {
  AttachmentData,
  AttachmentDescriptor,
  Message,
} from "../../../../src/domain";
import { PickupRunner } from "../../../../src/edge-agent/protocols/pickup/PickupRunner";
import { ProtocolType } from "../../../../src/edge-agent/protocols/ProtocolTypes";
import * as Messages from "../../../fixtures/messages";

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

  test(`${ProtocolType.PickupStatus} - 0 messages`, async () => {
    const runner = new PickupRunner(Messages.PickupStatus, mercury);
    const response = await runner.run();

    expect(response).to.be.an("array").with.length(0);
  });

  test(`${ProtocolType.PickupDelivery} - 1 message`, async () => {
    const runner = new PickupRunner(Messages.PickupDelivery, mercury);
    const response = await runner.run();

    expect(response).to.be.an("array").with.length(1);
    expect(response[0].attachmentId).to.eq(Messages.PickupDelivery.attachments[0].id);
    expect(response[0].message.ack).to.deep.eq(Messages.ConnectionResponse.ack);
    expect(response[0].message.attachments).to.deep.eq(Messages.ConnectionResponse.attachments);
    expect(response[0].message.body).to.deep.eq(Messages.ConnectionResponse.body);
    expect(response[0].message.createdTime).to.deep.eq(Messages.ConnectionResponse.createdTime);
    expect(response[0].message.direction).to.deep.eq(Messages.ConnectionResponse.direction);
    expect(response[0].message.extraHeaders).to.deep.eq(Messages.ConnectionResponse.extraHeaders);
    expect(response[0].message.from).to.deep.eq(Messages.ConnectionResponse.from);
    expect(response[0].message.fromPrior).to.deep.eq(Messages.ConnectionResponse.fromPrior);
    expect(response[0].message.id).to.deep.eq(Messages.ConnectionResponse.id);
    expect(response[0].message.piuri).to.deep.eq(Messages.ConnectionResponse.piuri);
    expect(response[0].message.pthid).to.deep.eq(Messages.ConnectionResponse.pthid);
    expect(response[0].message.thid).to.deep.eq(Messages.ConnectionResponse.thid);
    expect(response[0].message.to).to.deep.eq(Messages.ConnectionResponse.to);
  });

  // it("Should parse message when DeliveryMessage is received", async () => {
  //   const message = new Message(
  //     "{}",
  //     undefined,
  //     ProtocolType.PickupDelivery,
  //     undefined,
  //     undefined,
  //     attachments.map((data) => {
  //       return new AttachmentDescriptor(data, undefined, uuid());
  //     })
  //   );

  //   const runner = new PickupRunner(message, mercury);
  //   const response = await runner.run();
  //   const parsedMessages = response.map((response) => response.message);

  //   expect(messageExamples).to.deep.equal(parsedMessages);
  // });

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
