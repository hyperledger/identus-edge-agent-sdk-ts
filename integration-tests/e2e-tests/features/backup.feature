@backup
Feature: Backup
    The Edge Agent should be able to create and restore a backup

  Scenario: Create and restore a backup
    Given Edge Agent has created a backup
    Then a new SDK can be restored from Edge Agent

  Scenario: Agent without a seed should not be able to restore the backup
    Given Edge Agent has created a backup
    Then a new SDK cannot be restored from Edge Agent with wrong seed

  Scenario: Restored backup should be functional
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has '1' jwt credentials issued by Cloud Agent
    And Edge Agent creates '5' peer DIDs
    And Edge Agent creates '3' prism DIDs
    And Edge Agent has created a backup
    Then a new Restored Agent is restored from Edge Agent
    And Restored Agent should have the expected values from Edge Agent
    And Edge Agent is dismissed
    Given Cloud Agent is connected to Restored Agent
    And Cloud Agent asks for present-proof
    And Restored Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified
