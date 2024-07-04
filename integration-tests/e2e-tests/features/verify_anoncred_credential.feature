@anoncreds @credential @sdkverification
Feature: Verify Anoncreds presentation
  The Edge Agent should be able to receive a verifiable credential from Cloud Agent and then send a presentation to another edge agent who will verify it

  Scenario: SDKs Anoncreds Verification
    Given Cloud Agent is connected to Edge Agent
    When Cloud Agent offers '1' anonymous credential
    Then Edge Agent should receive the credentials offer from Cloud Agent
    When Edge Agent accepts the credentials offer from Cloud Agent
    And Cloud Agent should see all credentials were accepted
    Then Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent
    Then Verifier Edge Agent will request Edge Agent to verify the anonymous credential
    When Edge Agent sends the verification proof
    Then Verifier Edge Agent should see the verification proof is verified