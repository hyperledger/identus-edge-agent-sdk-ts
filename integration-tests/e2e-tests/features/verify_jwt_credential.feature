@jwt @credential @sdkverification
Feature: Verify JWT presentation
  The Edge Agent should be able to receive a verifiable credential from Cloud Agent and then send a presentation to another edge agent who will verify it

  Scenario: SDKs JWT Verification
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has '1' jwt credentials issued by Cloud Agent
    Then Verifier Edge Agent will request Edge Agent to verify the JWT credential
    When Edge Agent sends the verification proof
    Then Verifier Edge Agent should see the verification proof is verified

  Scenario: SDKs JWT Revoked Verification
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has '1' jwt credentials issued by Cloud Agent
    When Cloud Agent revokes '1' credentials
    Then Verifier Edge Agent will request Edge Agent to verify the JWT credential
    When Edge Agent sends the verification proof
    Then Verifier Edge Agent should see the verification proof is verified false
