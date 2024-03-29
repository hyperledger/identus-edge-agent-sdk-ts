@anoncred @proof
Feature: Provide anoncred proof
  The Edge Agent should provide anoncred proof to Cloud Agent

  Scenario: Edge Agent with a credential should provide proof to Cloud Agent
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has 1 anonymous credentials issued by Cloud Agent
    When Cloud Agent asks for presentation of AnonCred proof
    And Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified
