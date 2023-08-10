Feature: Create connection
    The Edge Agent should be able to create a connection to prism-agent

  Scenario: Create connection
    Given Cloud Agent has a connection invitation
    And Cloud Agent shares invitation to Edge Agent
    When Edge Agent connects through the invite
    Then Cloud Agent should have its status updated
