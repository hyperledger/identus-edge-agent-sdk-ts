@anoncred @credential
Feature: Receive Anoncred Credential
  The Edge Agent should be able to receive an anonymous credential from Cloud Agent

  Scenario: Receive one anonymous credential
    Given Cloud Agent is connected to Edge Agent
    When Cloud Agent offers '1' anonymous credential
    Then Edge Agent should receive the credentials offer from Cloud Agent
    When Edge Agent accepts the credentials offer from Cloud Agent
    And Cloud Agent should see all credentials were accepted
    Then Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent
