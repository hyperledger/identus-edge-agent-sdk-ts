@connection
Feature: Create connection
    The Edge Agent should be able to create a connection to Cloud Agent

  Scenario Outline: Create connection: [label=<label>; goalCode=<goalCode>; goal=<goal>]
    Given Cloud Agent has a connection invitation with '<label>', '<goalCode>' and '<goal>' parameters
    And Cloud Agent shares invitation to Edge Agent
    And Edge Agent connects through the invite
    Then Cloud Agent should have the connection status updated to 'ConnectionResponseSent'

    Examples:
      | label | goalCode   | goal                   |
      | alice | automation | automation description |
      |       |            |                        |
      | alice | null       | null                   |
      | null  | automation | null                   |
      | null  | null       | automation description |
      | null  | null       | null                   |
