import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { AgentError } from "../../../../src/domain/models/Errors";
import { PrismOnboardingInvitation } from "../../../../src/edge-agent/protocols/prismOnboarding/PrismOnboardingInvitation";
import { ProtocolType } from "../../../../src/edge-agent/protocols/ProtocolTypes";
import { PrismOnboardingInvitationBody } from "../../../../src/edge-agent/protocols/types";

describe("PrismOnboardingInvitation Tests", () => {
  it("Should create a valid PrismOnboardingInvitation from json", async () => {
    const example: PrismOnboardingInvitationBody = {
      type: ProtocolType.PrismOnboarding,
      onboardingEndpoint: "localhost:8080",
      from: "someone",
    };
    const exampleString: string = JSON.stringify(example);

    const invitation = new PrismOnboardingInvitation(exampleString);
    expect(invitation.body.from).to.equal(example.from);
    expect(invitation.body.onboardingEndpoint).to.equal(
      example.onboardingEndpoint
    );
    expect(invitation.body.type).to.equal(example.type);
  });

  it("Should throw an Error when invalid invitation type is used", () => {
    const example: PrismOnboardingInvitationBody = {
      type: "wrong type",
      onboardingEndpoint: "localhost:8080",
      from: "someone",
    };
    const exampleString: string = JSON.stringify(example);
    expect(() => new PrismOnboardingInvitation(exampleString)).to.throw(
      AgentError.UnknownPrismOnboardingTypeError,
      "Invalid InvitationType received"
    );
  });
});
