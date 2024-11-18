@connectionless @credential-offer
Feature: Edge SDK Connectionless Credential Offer

  Scenario: Receive a credential without a connection
    Given Cloud Agent is not connected to Edge Agent
    When Cloud Agent has a connectionless credential offer invitation
    And Cloud Agent shares invitation to Edge Agent
    Then Edge Agent accepts the connectionless credential offer invitation
    Then Edge Agent should receive the connectionless credential offer
    Then Edge Agent accepts the connectionless credential offer
    Then Edge Agent should receive the connectionless credential
    And Edge Agent processes the issued connectionless credential from Cloud Agent
