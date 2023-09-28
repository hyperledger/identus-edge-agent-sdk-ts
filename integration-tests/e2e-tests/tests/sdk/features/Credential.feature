Feature: Credential
    The Edge Agent should be able to receive a credential from Cloud Agent and respond to a proof-of-request

  Scenario: Accept credential and respond to present-proof
    Given Cloud Agent is connected to Edge Agent
    When Cloud Agent offers a credential
    Then Edge Agent should receive the credential
    When Edge Agent accepts the credential
    And Cloud Agent should see the credential was accepted
    Then Edge Agent wait to receive an issued credential
    And Edge Agent process the issued credential
    When Cloud Agent asks for present-proof
    And Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified
