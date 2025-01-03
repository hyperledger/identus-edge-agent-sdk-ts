@connectionless
Feature: connectionless
  The Edge Agent should receive and present a credential connectionless

  Scenario: Receive and verify a credential (connectionless)
    Given Cloud Agent is not connected to Edge Agent
    When Cloud Agent has a connectionless credential offer invitation
    And Cloud Agent shares invitation to Edge Agent
    Then Edge Agent accepts the connectionless credential offer invitation
    And Edge Agent should receive the connectionless credential offer
    Then Edge Agent accepts the connectionless credential offer
    And Edge Agent should receive the connectionless credential
    Then Edge Agent processes the issued connectionless credential from Cloud Agent
    When Cloud Agent has a connectionless presentation invitation
    And Cloud Agent shares invitation to Edge Agent
    Then Edge Agent accepts the connectionless presentation invitation
    And Edge Agent should receive the connectionless presentation request
    When Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified
