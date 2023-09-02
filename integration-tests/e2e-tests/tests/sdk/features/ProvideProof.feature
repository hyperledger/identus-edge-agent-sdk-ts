Feature: Provide proof of request
  The Edge Agent should provide proof to Cloud Agent

  Scenario: Edge Agent with a credential should provide proof to Cloud Agent
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has 1 credentials issued by Cloud Agent
    When Cloud Agent asks for present-proof
    And Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified
