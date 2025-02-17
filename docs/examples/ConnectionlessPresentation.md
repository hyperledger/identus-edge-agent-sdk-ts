# Edge SDK Connectionless Presentation
## Requirements
1. A working Identus Mediator and an Identus Cloud Agent.
2. A holder who already has a JWT Credential issued by a known issuer (prism:did) [Holder A]


> NOTE:
>
> Please follow the [Quick started guide](/home/quick-start) to complete steps 1, 2


## Flow
1. The verifier will need to generate an invitation url as follows:

```
curl --location 'http:///cloud-agent/present-proof/presentations/invitation' \
--header 'Content-Type: application/json' \
--data '{
 "goalCode" : "present-vp",
 "goal" : "Request proof of vaccination information",
  "proofs": [],
 "options": {
    "challenge": "11c91493-01b3-4c4d-ac36-b336bab5bddf",
    "domain": "https://prism-verifier.com"
  }
}
```

The response will look as follows:

```
{
    "presentationId": "715bc063-cd61-4049-834c-465b3eb19042",
    "thid": "71a16da3-97ff-460a-b5f9-25a61fe864f4",
    "role": "Verifier",
    "status": "InvitationGenerated",
    "proofs": [],
    "data": [],
    "goalCode": "present-vp",
    "goal": "Request proof of vaccination information",
    "myDid": "did:peer:2.Ez6LSt2C1xviB7nFEUHJAyWqvDF2xyJtQHWafQMxmy1SySoH6.Vz6MkgMChqZVQ47G88EBY6QZoPbBsCqByhtyfA3TQpyBKn7Ej.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfX0",
    "invitation": {
        "id": "71a16da3-97ff-460a-b5f9-25a61fe864f4",
        "type": "https://didcomm.org/out-of-band/2.0/invitation",
        "from": "did:peer:2.Ez6LSt2C1xviB7nFEUHJAyWqvDF2xyJtQHWafQMxmy1SySoH6.Vz6MkgMChqZVQ47G88EBY6QZoPbBsCqByhtyfA3TQpyBKn7Ej.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfX0",
        "invitationUrl": "https://my.domain.com/path?_oob=eyJpZCI6IjcxYTE2ZGEzLTk3ZmYtNDYwYS1iNWY5LTI1YTYxZmU4NjRmNCIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFN0MkMxeHZpQjduRkVVSEpBeVdxdkRGMnh5SnRRSFdhZlFNeG15MVN5U29INi5WejZNa2dNQ2hxWlZRNDdHODhFQlk2UVpvUGJCc0NxQnlodHlmQTNUUXB5QktuN0VqLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQTZMeTh4T1RJdU1UWTRMakV1TkRRNk9EQXdNQzlrYVdSamIyMXRJaXdpY2lJNlcxMHNJbUVpT2xzaVpHbGtZMjl0YlM5Mk1pSmRmWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6InByZXNlbnQtdnAiLCJnb2FsIjoiUmVxdWVzdCBwcm9vZiBvZiB2YWNjaW5hdGlvbiBpbmZvcm1hdGlvbiIsImFjY2VwdCI6W119LCJhdHRhY2htZW50cyI6W3siaWQiOiJjOGMxY2E3Zi05YjJjLTQwOGQtODZkMi0zNWJiYmU2ZTMwNjgiLCJtZWRpYV90eXBlIjoiYXBwbGljYXRpb24vanNvbiIsImRhdGEiOnsianNvbiI6eyJpZCI6Ijc4ZTc5NTFhLWZhOTYtNDg2Mi1hYmVkLWFmYTBhZWQyMzgzNCIsInR5cGUiOiJodHRwczovL2RpZGNvbW0uYXRhbGFwcmlzbS5pby9wcmVzZW50LXByb29mLzMuMC9yZXF1ZXN0LXByZXNlbnRhdGlvbiIsImJvZHkiOnsiZ29hbF9jb2RlIjoiUmVxdWVzdCBQcm9vZiBQcmVzZW50YXRpb24iLCJ3aWxsX2NvbmZpcm0iOmZhbHNlLCJwcm9vZl90eXBlcyI6W119LCJhdHRhY2htZW50cyI6W3siaWQiOiJiNWIzZjBjMC05NWQ2LTRkOTItOWQ0Ni1hNDVmYTdlMzVjYWEiLCJtZWRpYV90eXBlIjoiYXBwbGljYXRpb24vanNvbiIsImRhdGEiOnsianNvbiI6eyJvcHRpb25zIjp7ImNoYWxsZW5nZSI6IjExYzkxNDkzLTAxYjMtNGM0ZC1hYzM2LWIzMzZiYWI1YmRkZiIsImRvbWFpbiI6Imh0dHBzOi8vcHJpc20tdmVyaWZpZXIuY29tIn0sInByZXNlbnRhdGlvbl9kZWZpbml0aW9uIjp7ImlkIjoiZjNmNmQwYTAtYzdhNS00NjAzLWJkZjUtMjU1ZWJkZGU5ODdiIiwiaW5wdXRfZGVzY3JpcHRvcnMiOltdfX19LCJmb3JtYXQiOiJwcmlzbS9qd3QifV0sInRoaWQiOiI3MWExNmRhMy05N2ZmLTQ2MGEtYjVmOS0yNWE2MWZlODY0ZjQiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU3QyQzF4dmlCN25GRVVISkF5V3F2REYyeHlKdFFIV2FmUU14bXkxU3lTb0g2LlZ6Nk1rZ01DaHFaVlE0N0c4OEVCWTZRWm9QYkJzQ3FCeWh0eWZBM1RRcHlCS243RWouU2V5SjBJam9pWkcwaUxDSnpJanA3SW5WeWFTSTZJbWgwZEhBNkx5OHhPVEl1TVRZNExqRXVORFE2T0RBd01DOWthV1JqYjIxdElpd2ljaUk2VzEwc0ltRWlPbHNpWkdsa1kyOXRiUzkyTWlKZGZYMCJ9fX1dLCJjcmVhdGVkX3RpbWUiOjE3MjQ0MjY1NjgsImV4cGlyZXNfdGltZSI6MTcyNDQyNjg2OH0="
    },
    "metaRetries": 5
}
```

The Verifier will make this available to the holder in shape of QA code, link, etc.

2. The holder then opens its the Edge Agent Wallet SDK, "Connections tab" and will pase the invitation link in the field.

Once the invitation is parsed, the user will then be able to see a new Verification request, choose one of the available credentials and send the proof as the verifier requested.
