Feature: Receive verifiable credential
  The Edge Agent should be able to receive a verifiable credential from Cloud Agent

  Scenario: Receive one verifiable credential
    Given Cloud Agent is connected to Edge Agent
    When Cloud Agent offers a credential
    Then Edge Agent should receive the credential
    When Edge Agent accepts the credential
    And Cloud Agent should see the credential was accepted
    Then Edge Agent wait to receive 1 issued credentials
    And Edge Agent process 1 issued credentials

  Scenario: Receive multiple verifiable credentials sequentially
    Given Cloud Agent is connected to Edge Agent
    When Edge Agent accepts 3 credential offer sequentially from Cloud Agent
    Then Cloud Agent should see all credentials were accepted
    And Edge Agent wait to receive 3 issued credentials
    And Edge Agent process 3 issued credentials