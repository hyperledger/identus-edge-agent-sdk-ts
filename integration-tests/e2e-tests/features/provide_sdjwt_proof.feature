@sdjwt @proofsd
Feature: Provide sd-jwt proof
  The Edge Agent should provide proof to Cloud Agent

  Scenario: Edge Agent with a sdjwt credential should provide proof to Cloud Agent
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has '1' sd+jwt credentials issued by Cloud Agent
    When Cloud Agent asks for sdjwt present-proof
    And Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified
