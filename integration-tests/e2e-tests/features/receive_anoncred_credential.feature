@anoncred
@credential
Feature: Receive Anoncred Credential
  The Edge Agent should be able to receive an anonymous credential from Cloud Agent

  Scenario: Receive one anonymous credential
    Given Cloud Agent is connected to Edge Agent
    When Cloud Agent offers an anonymous credential
    Then Edge Agent should receive the credential
    When Edge Agent accepts the credential
    And Cloud Agent should see the credential was accepted
    Then Edge Agent wait to receive 1 issued credentials
    And Edge Agent process 1 issued credentials
