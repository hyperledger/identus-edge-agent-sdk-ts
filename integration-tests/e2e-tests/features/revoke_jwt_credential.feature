@jwt
@credentialx
Feature: Revoke JWT Credential
  //The Edge Agent should be able to receive a verifiable credential from Cloud Agent
  The Issuer (Cloud Agent) should be able to revoke a JWT credential from the Holder (Edge Agent)

  Scenario: Revoke one verifiable credential (Happy Path)
    Given Cloud Agent is connected to Edge Agent
    When Cloud Agent offers a credential


    Then Edge Agent should receive the credential
    When Edge Agent accepts the credential
    And Cloud Agent should see the credential was accepted

    Then Edge Agent wait to receive 1 issued credentials
    And Edge Agent process 1 issued credentials

    When Cloud Agent revokes the credential
    Then Edge Agent has the credential as revoked