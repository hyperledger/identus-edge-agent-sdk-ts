@sdjwt @credential @sdkverificationsd
Feature: Verify SD+JWT presentation
  The Edge Agent should be able to receive a verifiable credential from Cloud Agent and then send a presentation to another edge agent who will verify it

  Scenario: SDKs SD+JWT Verification
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has '1' sd+jwt credentials issued by Cloud Agent
    Then Verifier Edge Agent will request Edge Agent to verify the SD+JWT credential
    When Edge Agent sends the verification proof
    Then Verifier Edge Agent should see the verification proof is verified

  Scenario: SDKs SD+JWT Verification
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has '1' sd+jwt credentials issued by Cloud Agent
    Then Verifier Edge Agent will request Edge Agent to verify the SD+JWT credential with non-existing claims
    When Edge Agent sends the verification proof
    Then Verifier Edge Agent should see the verification proof is verified false
