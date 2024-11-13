@sdjwt @credential
Feature: Receive SD+JWT Credential
  The Edge Agent should be able to receive a SDJWT verifiable credential from Cloud Agent

  Scenario: Receive one verifiable credential
    Given Cloud Agent is connected to Edge Agent
    When Cloud Agent offers '1' sd+jwt credentials
    Then Edge Agent should receive the credentials offer from Cloud Agent
    When Edge Agent accepts the credentials offer from Cloud Agent
    And Cloud Agent should see all credentials were accepted
    Then Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent

  Scenario: Receive multiple verifiable credentials sequentially
    Given Cloud Agent is connected to Edge Agent
    When Edge Agent accepts 3 sd+jwt credential offer sequentially from Cloud Agent
    Then Cloud Agent should see all credentials were accepted
    And Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent

  Scenario: Receive multiple verifiable credentials at once
    Given Cloud Agent is connected to Edge Agent
    When Edge Agent accepts 3 sd+jwt credentials offer at once from Cloud Agent
    Then Cloud Agent should see all credentials were accepted
    And Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent
