@jwt @revocation
Feature: Revoke JWT Credential
  Edge Agent should be notified when Cloud Agent revokes a credential

  Scenario: Revoke one verifiable credential
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has '1' jwt credentials issued by Cloud Agent
    When Cloud Agent revokes '1' credentials
    Then Edge Agent waits to receive the revocation notifications from Cloud Agent
    And Edge Agent should see the credentials were revoked by Cloud Agent
 