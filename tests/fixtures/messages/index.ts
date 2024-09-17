import { base64 } from "multiformats/bases/base64";
import * as Domain from "../../../src/domain";
import { ProtocolType } from "../../../src/edge-agent/protocols/ProtocolTypes";

// convert raw DIDComm message to domain, handles parsing idiosyncrasies
const convertDidcomm = (value: any) => new Domain.Message(
  value.body,
  value.id,
  value.type,
  typeof value.from === "string" ? Domain.DID.fromString(value.from) : undefined,
  typeof value.to?.at(0) === "string" ? Domain.DID.fromString(value.to?.at(0)) : undefined,
  // this.parseAttachmentsToDomain(value.attachments ?? []),
  (value.attachments ?? []).map(x => ({
    ...x,
    data: {
      base64: x.data.base64,
      data: x.data.json,
    }
  })),
  value.thid,
  value.extraHeaders,
  value.created_time,
  value.expires_time,
  [],
  undefined,
  value.from_prior,
  value.pthid
);

// create a mocked attachment from a Domain Message
const msgToAttachment = (value: Domain.Message) => {
  const obj = {
    ...value,
    to: value.to?.toString(),
    from: value.from?.toString()
  };
  const encoded = Buffer.from(JSON.stringify(obj)).toString("base64");
  const mocked = base64.baseEncode(Buffer.from(encoded)).toString();
  return mocked;
};

const requestPresentationJWTRaw = {
  "id": "eba52581-479d-45cc-87e7-7ae243528a7b",
  "typ": "application/didcomm-plain+json",
  "type": "https://didcomm.atalaprism.io/present-proof/3.0/request-presentation",
  "body": {
    "comment": null,
    "goal_code": "Request Proof Presentation",
    "proof_types": [],
    "will_confirm": false
  },
  "from": "did:peer:2.Ez6LSqJHNXspKSEypt7qPSaifAzUAStLaG3sar8gbcNmN92vV.Vz6MkwGaRMGyXBWE5J5vsj9rE9fvXasixU9gZCnnY3jwBnDiR.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuMTA3OjgwMDAvZGlkY29tbSIsInIiOltdLCJhIjpbImRpZGNvbW0vdjIiXX19",
  "to": [
    "did:peer:2.Ez6LSjqGYh5yamStvyG8DLoghHGBkWmMPR6HNQjyMynNzeURN.Vz6MkhZpDwnkg7vstYKWuphSAR1fJqbJ1fEYsALRYryy97f9h.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJyIjpbXSwiYSI6W119fQ"
  ],
  "thid": "66938dc8-45db-4091-a360-e38ca5c9cada",
  "created_time": 1718629162,
  "expires_time": 1718630162,
  "attachments": [
    {
      "data": {
        "json": {
          "options": {
            "challenge": "11c91493-01b3-4c4d-ac36-b336bab5bddf",
            "domain": "http://localhost:8000/cloud-agent"
          },
          "presentation_definition": {
            "format": null,
            "id": "ca545f5d-9dc8-4bb8-9bd8-c121c0d2e606",
            "input_descriptors": [],
            "name": null,
            "purpose": null
          }
        }
      },
      "id": "1c69dc03-3479-49b4-b9c3-db8c99b351f1",
      "format": "prism/jwt"
    }
  ]
};

export const RequestPresentationJWT = convertDidcomm(requestPresentationJWTRaw);

const issueCredentialJWTRaw = {
  "id": "6857ff7c-b5c3-4c9a-b258-e8ad4acc83b0",
  "typ": "application/didcomm-plain+json",
  "type": "https://didcomm.org/issue-credential/3.0/issue-credential",
  "body": {
    "comment": null,
    "goal_code": null,
    "more_available": null,
    "replacement_id": null
  },
  "from": "did:peer:2.Ez6LSqJHNXspKSEypt7qPSaifAzUAStLaG3sar8gbcNmN92vV.Vz6MkwGaRMGyXBWE5J5vsj9rE9fvXasixU9gZCnnY3jwBnDiR.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuMTA3OjgwMDAvZGlkY29tbSIsInIiOltdLCJhIjpbImRpZGNvbW0vdjIiXX19",
  "to": [
    "did:peer:2.Ez6LSjqGYh5yamStvyG8DLoghHGBkWmMPR6HNQjyMynNzeURN.Vz6MkhZpDwnkg7vstYKWuphSAR1fJqbJ1fEYsALRYryy97f9h.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJyIjpbXSwiYSI6W119fQ"
  ],
  "thid": "7266384c-c377-425b-ae89-22fbe3eed5f1",
  "created_time": 1718628667,
  "expires_time": 1718629667,
  "attachments": [
    {
      "data": {
        "base64": "ZXlKaGJHY2lPaUpGVXpJMU5rc2lmUS5leUpwYzNNaU9pSmthV1E2Y0hKcGMyMDZOVEJqWlRFd1lqQmpNV1ppTXpObVpHSXlaVFEwTmpGa1lUSTVZV0kyWmpBeE4ySTBObUU1TjJZNVl6ZzNOR1UzTkRRellUaGhZV0UyTmpnM01ESm1NRHBEY210Q1EzSlpRa1ZxYjB0Q2JVWXhaRWRuZEUxU1FVVlRhVFJMUTFoT2JGa3pRWGxPVkZweVRWSkphRUUyUTJSTVVEWm9jR2R2U0RCMU1sazNhM2d5VFd0dmRqUk5jRFJ0YlVOelEzaFRSM1oxZEdKdVFWaHhSV3B6UzBJeWJIcGpNMVpzVEZSRlVVRnJiM1ZEWjJ4NldsZE9kMDFxVlRKaGVrVlRTVkZNU0hSSmRuWkpNV2hUVFV0Q1R6WndibVZvU1hrNU5XcHdlVXRxTm1waVVqQkNVM0ZMUW5ScVdWRXRlRWszUTJka2RGbFlUakJhV0VsM1JVRkdTMHhuYjBwak1sWnFZMFJKTVU1dGMzaEZhVVZEYjJsV1VESXhibFE1UTJOWlIxbzBkelIzTjJaU1pIcEpOV001ZHpCeVIwcFphazFmUVVnNGNFTTJUU0lzSW5OMVlpSTZJbVJwWkRwd2NtbHpiVHBpTmpBNE9EZzNZbUl6WW1VNU5qRXdNVFl3WlRJek0yWTJaakU0WXpSak9HUXpNVGcwTldZMllUZ3lOek0wWmpJNU9ETTVNbU0yTkRrNU5EQmpNbUl5T2tOME9FSkRkSGRDUlc1UlMwZ3lSakZrUjJoc1ltNVNjRmt5UmpCaFZ6bDFXVmhXTUdGSFZuVmtSMnhxV1ZoU2NHSXlOVXhhV0d0UlFrVktVRU5uYkhwYVYwNTNUV3BWTW1GNlJWTkpRV1psYmxGNkxWRlFia1JxTTI1SWRIa3hNazgzU3pCVmFWSlNVeloyWHpOMU5VWjFXR2hFV1Y4NVFVZHBSREYxTVhKTmIxSktOVVY1ZW0xQlJFa3RabU13ZUhwQ1dtNDFkRk5xZFU5WUxUSlpSR2hRU25kcGJWSkthME5uT1hSWldFNHdXbGhLZEZsWVRqQmFXRXBNV2xoclVVRlZTbEJEWjJ4NldsZE9kMDFxVlRKaGVrVlRTVUZtWlc1UmVpMVJVRzVFYWpOdVNIUjVNVEpQTjBzd1ZXbFNVbE0yZGw4emRUVkdkVmhvUkZsZk9VRkhhVVF4ZFRGeVRXOVNTalZGZVhwdFFVUkpMV1pqTUhoNlFscHVOWFJUYW5WUFdDMHlXVVJvVUVwM2FXMVJJaXdpYm1KbUlqb3hOekU0TmpJNE5qWTFMQ0oyWXlJNmV5SmpjbVZrWlc1MGFXRnNVM1ZpYW1WamRDSTZleUptWVcxcGJIbE9ZVzFsSWpvaVJHVnRieUlzSW1sa0lqb2laR2xrT25CeWFYTnRPbUkyTURnNE9EZGlZak5pWlRrMk1UQXhOakJsTWpNelpqWm1NVGhqTkdNNFpETXhPRFExWmpaaE9ESTNNelJtTWprNE16a3lZelkwT1RrME1HTXlZakk2UTNRNFFrTjBkMEpGYmxGTFNESkdNV1JIYUd4aWJsSndXVEpHTUdGWE9YVlpXRll3WVVkV2RXUkhiR3BaV0ZKd1lqSTFURnBZYTFGQ1JVcFFRMmRzZWxwWFRuZE5hbFV5WVhwRlUwbEJabVZ1VVhvdFVWQnVSR296YmtoMGVURXlUemRMTUZWcFVsSlROblpmTTNVMVJuVllhRVJaWHpsQlIybEVNWFV4Y2sxdlVrbzFSWGw2YlVGRVNTMW1ZekI0ZWtKYWJqVjBVMnAxVDFndE1sbEVhRkJLZDJsdFVrcHJRMmM1ZEZsWVRqQmFXRXAwV1ZoT01GcFlTa3hhV0d0UlFWVktVRU5uYkhwYVYwNTNUV3BWTW1GNlJWTkpRV1psYmxGNkxWRlFia1JxTTI1SWRIa3hNazgzU3pCVmFWSlNVeloyWHpOMU5VWjFXR2hFV1Y4NVFVZHBSREYxTVhKTmIxSktOVVY1ZW0xQlJFa3RabU13ZUhwQ1dtNDFkRk5xZFU5WUxUSlpSR2hRU25kcGJWRWlmU3dpZEhsd1pTSTZXeUpXWlhKcFptbGhZbXhsUTNKbFpHVnVkR2xoYkNKZExDSkFZMjl1ZEdWNGRDSTZXeUpvZEhSd2N6cGNMMXd2ZDNkM0xuY3pMbTl5WjF3dk1qQXhPRnd2WTNKbFpHVnVkR2xoYkhOY0wzWXhJbDBzSW1OeVpXUmxiblJwWVd4VGRHRjBkWE1pT25zaWMzUmhkSFZ6VUhWeWNHOXpaU0k2SWxKbGRtOWpZWFJwYjI0aUxDSnpkR0YwZFhOTWFYTjBTVzVrWlhnaU9qRXNJbWxrSWpvaWFIUjBjRHBjTDF3dk1Ua3lMakUyT0M0eExqRXdOem80TURBd1hDOWpiRzkxWkMxaFoyVnVkRnd2WTNKbFpHVnVkR2xoYkMxemRHRjBkWE5jTHprMFpEZGhOamhtTFdaalkyRXROR1F4WXkxaFlUUmlMV1JqWXpCa05qYzJObVpoWlNNeElpd2lkSGx3WlNJNklsTjBZWFIxYzB4cGMzUXlNREl4Ulc1MGNua2lMQ0p6ZEdGMGRYTk1hWE4wUTNKbFpHVnVkR2xoYkNJNkltaDBkSEE2WEM5Y0x6RTVNaTR4TmpndU1TNHhNRGM2T0RBd01Gd3ZZMnh2ZFdRdFlXZGxiblJjTDJOeVpXUmxiblJwWVd3dGMzUmhkSFZ6WEM4NU5HUTNZVFk0WmkxbVkyTmhMVFJrTVdNdFlXRTBZaTFrWTJNd1pEWTNOalptWVdVaWZYMTkuZTEtZTZuNHhPSXNTNUJfSGpENlI0TS04WnZHeWFySmRLeWl6ejhuZUFBUlczN3Q3aTlKZDBfVHpjRWplNU5aVGgtLTlUWjFudXpyenVsS1pwaWtjdEE="
      },
      "id": "d081a984-18a6-4ca6-8079-9896f63cf43f",
      "format": "prism/jwt"
    }
  ]
};

export const IssueCredential = convertDidcomm(issueCredentialJWTRaw);

const OfferCredentialJWTRaw = {
  "id": "2ab02064-e085-433d-8504-5ff8a7a45ad1",
  "typ": "application/didcomm-plain+json",
  "type": "https://didcomm.org/issue-credential/3.0/offer-credential",
  "body": {
    "comment": null,
    "credential_preview": {
      "body": {
        "attributes": [
          {
            "media_type": null,
            "name": "familyName",
            "value": "Demo"
          }
        ]
      },
      "schema_id": null,
      "type": "https://didcomm.org/issue-credential/3.0/credential-credential"
    },
    "goal_code": "Offer Credential",
    "multiple_available": null,
    "replacement_id": null
  },
  "from": "did:peer:2.Ez6LSqJHNXspKSEypt7qPSaifAzUAStLaG3sar8gbcNmN92vV.Vz6MkwGaRMGyXBWE5J5vsj9rE9fvXasixU9gZCnnY3jwBnDiR.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuMTA3OjgwMDAvZGlkY29tbSIsInIiOltdLCJhIjpbImRpZGNvbW0vdjIiXX19",
  "to": [
    "did:peer:2.Ez6LSjqGYh5yamStvyG8DLoghHGBkWmMPR6HNQjyMynNzeURN.Vz6MkhZpDwnkg7vstYKWuphSAR1fJqbJ1fEYsALRYryy97f9h.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJyIjpbXSwiYSI6W119fQ"
  ],
  "thid": "7266384c-c377-425b-ae89-22fbe3eed5f1",
  "created_time": 1718626986,
  "expires_time": 1718627986,
  "attachments": [
    {
      "data": {
        "json": {
          "options": {
            "challenge": "6764027c-fe32-4786-b847-c2bf71160746",
            "domain": "domain"
          },
          "presentation_definition": {
            "format": {
              "jwt": {
                "alg": [
                  "ES256K"
                ],
                "proof_type": []
              },
              "ldp": null
            },
            "id": "85175804-cf67-4ba7-822b-5fa2ae5b1035",
            "input_descriptors": [],
            "name": null,
            "purpose": null
          }
        }
      },
      "id": "bd648826-8ea0-47b8-9810-1028bf02602a",
      "format": "prism/jwt"
    }
  ]
};

export const OfferCredential = convertDidcomm(OfferCredentialJWTRaw);

const connectionResponseRaw = {
  "id": "b6ecb36c-19c5-4b57-a6d1-077fcdfc188b",
  "typ": "application/didcomm-plain+json",
  "type": "https://atalaprism.io/mercury/connections/1.0/response",
  "body": {
    "accept": [],
    "goal": null,
    "goal_code": null
  },
  "from": "did:peer:2.Ez6LSgknVs1cdhDAg7SVvMeGnbkRGZS7fcyzixAciueA28QvN.Vz6MkiEpwg2xmFEni4EGUvdqsjEeVrzqcNdUA68YokzYkAqo3.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuMTA3OjgwMDAvZGlkY29tbSIsInIiOltdLCJhIjpbImRpZGNvbW0vdjIiXX19",
  "to": [
    "did:peer:2.Ez6LScCstFk63bX4vYw33PevMJZF7Rxc8bVem7XshawE2Hgvk.Vz6MkgLpvYpCjbVLiHY3FiXMx6dfjhAMXGAnGe3LnJhYPs246.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQnpPaTh2YzJsMExYQnlhWE50TFcxbFpHbGhkRzl5TG1GMFlXeGhjSEpwYzIwdWFXOGlMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDE5LlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW5kemN6b3ZMM05wZEMxd2NtbHpiUzF0WldScFlYUnZjaTVoZEdGc1lYQnlhWE50TG1sdkwzZHpJaXdpWVNJNld5SmthV1JqYjIxdEwzWXlJbDE5ZlEiLCJyIjpbXSwiYSI6W119fQ"
  ],
  "thid": "71a62347-a338-4afc-b254-4aeecd187ffa",
  "created_time": 1718621260,
  "expires_time": 1718622260,
  "attachments": []
};

export const ConnectionResponse = convertDidcomm(connectionResponseRaw);

const pickupDeliveryRaw = {
  "id": "102aa46d-2630-43ec-8d21-129e2641cb0e",
  "typ": "application/didcomm-plain+json",
  "type": "https://didcomm.org/messagepickup/3.0/delivery",
  "body": {},
  "from": "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vc2l0LXByaXNtLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJhIjpbImRpZGNvbW0vdjIiXX19.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzczovL3NpdC1wcmlzbS1tZWRpYXRvci5hdGFsYXByaXNtLmlvL3dzIiwiYSI6WyJkaWRjb21tL3YyIl19fQ",
  "to": [
    "did:peer:2.Ez6LSrjn3NUEgFDY2wKnxbNfbXLozs8Em5RX6xWkTJn3kqpsL.Vz6MkuK1KvyssRGvzYuerJQQaTANA9hAe3dXt2X31d6Ef9xee.SW10"
  ],
  "thid": "907cbabd-477e-4332-b17c-2be3b3e621e0",
  "attachments": [
    {
      "data": {
        "base64": "eyJjaXBoZXJ0ZXh0IjoiZTF6VHlzaWUtMGFQWENta045a1hldDNRM21QYkNiUHowc1VLY0NCLVRWblh1Skgtd2dDUllaN3dBS2RibkxIR1F4ejFxcFRSdkpFQTEteEFBRXEwSm5FVnpaOGsxa3JRcjVocVROamhsVm5kZHpZMk9Bb0VKbHRmZHFDS0lfR2VQMWZFVVdkb3FVRVVSWU5HbHAtTHJpMm9ORHEzZFZqR3hGSGYwa1RGUHgyemhoU2I5c2dQMW00UllVSXl0a1NaWWx5dGlUa1hWeWpnYmxmVEZhUUozdkxDZGVhX0NWV1A3V29JQ0c0RGRyc3FRWmxhd1FkaHZFand5dVpuM01KMmlxNTUtVm5GaHZLVHJzN3pNbEktTkM1Sm1yM29jZ2hka1kzdDQ1NWhrZGRpWlRkdXZ1clpZaU1fajBseUJ5OTc2aEptelVLS2xzdmE0RXV2R0xOY3ZTRndza1ZpeUl1bGdfMUZhUEVrcGxpOGc0bnVtVF96cTNpU29PYWRTemhlVlRjel9ZazNuTnhFZ01nZUVCU2pIMWZIVE9hTVdobjBDWGRqOE56R2FjVXhoRElURlFzVTR3VU8zVWlnYW5qbVRqbU5nNmJHWGg3R0staXYxU0Z1UmNKQVJIX2kzR2lXX3pvWlpmTF9uVVh0QUx1UllPRFJ0V3NBdGFvOVpiek9kekhvMUxMWkkyMXZxb09jZ3hoczl0ZHZSbzhmLTZfQ1hPZWV4cTg4WHpMakVVb3Y5T0JLUjIzRVQxc2l2WDRtdXNtZUhqNHpkMG9DalYyS2xBMllDWm11d3hHV3N4VUk3bWt3S3BzNHBFV0lwaEJldnVxY3B0cGI5eWJFcTFMWXBrWFc1My1GTW8zTVhhaDJrX1A1S2h0VW9kSkZTVHI4T2h4RXlZUGtfNnF1dzR5WkF6MFByY2pOSTFaNkZvaU9GRGNIVXVjNGtiU1l0UlotU3BqazFVVmtYSENQaGhxSnFUNzFhZEE2MG01VlVxaW01RnROR1RqTDhRQ3pjY0Nhbl81TC1fa0hsdE5qNHRFM1pRVlZMZXZTWmk3V3QwbmlnZWxBRkExT2hmLWNLbEpUS0JTV1dIa0VXMEZMTl90ZVN6Y0pUNXk1dlhpd1NkYVRGS1BRU25TbE1DaWpEMDFwZWpyVVNIelhfNVo5T2NyM0pZOGxuWWxoNXpBc011T0xCZzladzF0SDIteXRiR1hIbVctaTdmVG1fd3FtSnhJM3JuLVlsVDRpcEc1SThfT19fQnZQWTh4UXpXVnNrcDNFWUpkaWlfcHVlb3JaSXc4SkdSR3F2eFpaUi1JdG01azNUUFpZempZYmh3YmsxWHVCTGtaWEUwc0UzQVZraGk2WUxCOTlrSzByekJDLVBxYmplMlVwVEdvbmw1R2dhdXVwcTBxX3NIWTdmeWZPSHlfTHM3SXBCaHhLSG1uRkVMQlp5d0lWcnJaZnZwQ0pfc0JCSHJuRFh1QjN6S2hfSTBCZjZPWXZQeTdzaXdQZnBkX0lQQVFHaGwxaTNfS29TbFZpWVhTOE0tMUVnanVtM241TmV0SGZtVkQtTHR3Yk9JaExPUjZ1R2FVamd5ZXdsajZwZjZFaENkREpHVDF5V1JOMW1hZjJEcFVpemUxUkYxNGQ5WXdYRVhZbEZWMFVlSndWenJ0UkdOcU9SQ3owRVVyS1NmNnh5dHVVZTZocDgxR2dGMjVTYXhBQnZOU09xQmtRX3pXamc0UUh1LU1Oc1BPWHRoeFFWdnBkaWVFSlVka3Z2YkhjTDNVSXRrMEJldG5ZUlBSRlMzemxidTFCSjBncFJzYnRmVzNBS3pEQWFNcFlyNnZJbWZRMDlsbUFXNThOdEl6QkFpZFExWGRZUUF3NW1ERlZqeUpJRkkyNF9MRmIyRVBXNnFlRy1vX1NUYjFOOFBKYjQzUjF5UjZFbDdLRUxlVHJtS05SMENtR2pJYjhBT1lKQWpxMVhIeHFOVi1nVTJSRDZyV0tjZFlwVVVfd01wcjNORTZSSmFYWHQyVlJNQjJwS2RmWExqRjFrYzFoS2pGR25SaHBKR3dhcGVqVURXNDFKLTZ2MnBUVmREcHVXOXhyeFBOVFBPZyIsInByb3RlY3RlZCI6ImV5SmxjR3NpT25zaWEzUjVJam9pVDB0UUlpd2lZM0oySWpvaVdESTFOVEU1SWl3aWVDSTZJblZJT1V0b1lUUnFjRXhIY0ZWV05pMTZZblZXUjNwTWMwaGtNVTFyZUdoNVZEWnlTMUUyWHpOeWFXTWlmU3dpWVhCMklqb2ljbVkxU2tkbVZtVjFVSFpvWkhCSk1FMDBObnBIUTNsTmMwOUthbTFNZEhKZlZXSmZVVkZ1TlZKeWJ5SXNJbk5yYVdRaU9pSmthV1E2Y0dWbGNqb3lMa1Y2Tmt4VFoydHVWbk14WTJSb1JFRm5OMU5XZGsxbFIyNWlhMUpIV2xNM1ptTjVlbWw0UVdOcGRXVkJNamhSZGs0dVZubzJUV3RwUlhCM1p6SjRiVVpGYm1rMFJVZFZkbVJ4YzJwRlpWWnllbkZqVG1SVlFUWTRXVzlyZWxsclFYRnZNeTVUWlhsS01FbHFiMmxhUnpCcFRFTktla2xxY0RkSmJsWjVZVk5KTmtsdGFEQmtTRUUyVEhrNGVFOVVTWFZOVkZrMFRHcEZkVTFVUVROUGFtZDNUVVJCZGxwSGJHdFpNamwwWWxOSmMwbHVTV2xQYkhSa1RFTkthRWxxY0dKSmJWSndXa2RPZG1KWE1IWmtha2xwV0ZneE9TTnJaWGt0TVNJc0ltRndkU0k2SWxwSGJHdFBia0pzV2xoSk5rMXBOVVpsYWxwTlZUSmtjbUpzV25wTlYwNXJZVVZTUWxwNlpGUldibHBPV2xWa2RWbHRkRk5TTVhCVVRqSmFhbVZZY0hCbFJVWnFZVmhXYkZGVVNUUlZXRnBQVEd4YU5rNXJNWEpoVlZaM1pESmplV1ZITVVkU1Z6VndUa1ZXU0ZaWVdtdGpXRTV4VWxkV1YyTnVjSGhaTURWclZsVkZNazlHYkhaaE0zQmFZVEJHZUdKNlRYVlZNbFkxVTJwQ1NtRnRPWEJYYTJOM1lWVjRSRk51Y0VwaGJrRXpVMWMxVjJWWFJsUlRWRnBLWWxkbmQxcEZhRUpPYTNnMVQwaG9VRlpGYkRGVVZsSmFUa1Y0Y1ZKWVZrNVdSVVY2VkRKd2JtUXdNVVZSV0ZwaFVqSjRjbGRVU1RWa1IwcFVVMWhPU21KcmJIQlVNbmd3V2tWNFJGTnRhRXBoYmtKcFUxY3hVMk5HY0VoVWJscHBWbnBDTWxwSGNFcGhWbWhaVFZScmFtRXlWalZNVkVVaUxDSjBlWEFpT2lKaGNIQnNhV05oZEdsdmJsd3ZaR2xrWTI5dGJTMWxibU55ZVhCMFpXUXJhbk52YmlJc0ltVnVZeUk2SWtFeU5UWkRRa010U0ZNMU1USWlMQ0poYkdjaU9pSkZRMFJJTFRGUVZTdEJNalUyUzFjaWZRIiwicmVjaXBpZW50cyI6W3siZW5jcnlwdGVkX2tleSI6InRpaWNBZ2RBNWh3d3M1ZE5OZkhzMi1KblhEU2RmZHA5UTExWHlkMloyem9MWlhSaGJxTnNIMEo1eDFqbFZCLWdEandzdm41azctdjM1dVk0eEVIQS1nWE1tZGRRYW5lcCIsImhlYWRlciI6eyJraWQiOiJkaWQ6cGVlcjoyLkV6NkxTY0NzdEZrNjNiWDR2WXczM1Bldk1KWkY3UnhjOGJWZW03WHNoYXdFMkhndmsuVno2TWtnTHB2WXBDamJWTGlIWTNGaVhNeDZkZmpoQU1YR0FuR2UzTG5KaFlQczI0Ni5TZXlKMElqb2laRzBpTENKeklqcDdJblZ5YVNJNkltUnBaRHB3WldWeU9qSXVSWG8yVEZObmFIZFRSVFF6TjNkdVJFVXhjSFF6V0Rab1ZrUlZVWHBUYW5OSWVtbHVjRmd6V0VaMlRXcFNRVzAzZVM1V2VqWk5hMmhvTVdVMVEwVlpXWEUyU2tKVlkxUmFOa053TW5KaGJrTlhVbkoyTjFsaGVETk1aVFJPTlRsU05tUmtMbE5sZVVvd1NXcHZhVnBITUdsTVEwcDZTV3B3TjBsdVZubGhVMGsyU1cxb01HUklRbnBQYVRoMll6SnNNRXhZUW5saFdFNTBURmN4YkZwSGJHaGtSemw1VEcxR01GbFhlR2hqU0Vwd1l6SXdkV0ZYT0dsTVEwcG9TV3B3WWtsdFVuQmFSMDUyWWxjd2RtUnFTV2xZV0RFNUxsTmxlVW93U1dwdmFWcEhNR2xNUTBwNlNXcHdOMGx1Vm5saFUwazJTVzVrZW1ONmIzWk1NMDV3WkVNeGQyTnRiSHBpVXpGMFdsZFNjRmxZVW5aamFUVm9aRWRHYzFsWVFubGhXRTUwVEcxc2Rrd3paSHBKYVhkcFdWTkpObGQ1U210aFYxSnFZakl4ZEV3eldYbEpiREU1WmxFaUxDSnlJanBiWFN3aVlTSTZXMTE5ZlEja2V5LTEifX1dLCJ0YWciOiJzSXh0ODdobm1wcWNvVW9YQ05IM3JZcDRkNzc1R2VvTE9Bb21Ic3VkeGc0IiwiaXYiOiJhS0ZOMS1fMDY1bzc5RHpvcTF2NUN3In0"
      },
      "id": "9ed59f08e31360f94bfc15241d2862262a5265b68473aa38d06d4d6230d69a00"
    }
  ]
};

export const PickupDelivery = convertDidcomm({
  ...pickupDeliveryRaw,
  attachments: pickupDeliveryRaw.attachments.map(x => ({
    ...x,
    data: { base64: msgToAttachment(ConnectionResponse) }
  }))
});

const pickupStatusRaw: any = {
  "id": "033642e4-9064-4da2-ac84-6be20b3ec8b8",
  "typ": "application/didcomm-plain+json",
  "type": "https://didcomm.org/messagepickup/3.0/status",
  "body": {
    "live_delivery": false,
    "message_count": 0
  },
  "from": "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vc2l0LXByaXNtLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJhIjpbImRpZGNvbW0vdjIiXX19.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzczovL3NpdC1wcmlzbS1tZWRpYXRvci5hdGFsYXByaXNtLmlvL3dzIiwiYSI6WyJkaWRjb21tL3YyIl19fQ",
  "to": [
    "did:peer:2.Ez6LSrjn3NUEgFDY2wKnxbNfbXLozs8Em5RX6xWkTJn3kqpsL.Vz6MkuK1KvyssRGvzYuerJQQaTANA9hAe3dXt2X31d6Ef9xee.SW10"
  ],
  "thid": "dcc4af0e-0a9c-4082-98d1-bbdc582002b7"
};

export const PickupStatus = convertDidcomm(pickupStatusRaw);


export const Reporting = convertDidcomm({
  "id": "033642e4-9064-4da2-ac84-6be20b3ec8b8",
  "typ": "application/didcomm-plain+json",
  "type": ProtocolType.ProblemReporting,
  "body": {
    "args": [
      'did:peer:2.Ez6LSmEZPCeaFeA1vwBTZeLvXi6F24ZdEQgmzJCqHaQQojBj8.Vz6MktyGjB1ogYgsu3nt9ncjzXM4mBBGJSU5cPrCScDcC2GrN.SW10'
    ],
    "comment": "The DID '{1}' is not enroled",
    "code": "e.p.req.not_enroll",
    "escalate_to": "email@email.com"
  },
  "from": "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vc2l0LXByaXNtLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJhIjpbImRpZGNvbW0vdjIiXX19.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzczovL3NpdC1wcmlzbS1tZWRpYXRvci5hdGFsYXByaXNtLmlvL3dzIiwiYSI6WyJkaWRjb21tL3YyIl19fQ",
  "to": [
    "did:peer:2.Ez6LSrjn3NUEgFDY2wKnxbNfbXLozs8Em5RX6xWkTJn3kqpsL.Vz6MkuK1KvyssRGvzYuerJQQaTANA9hAe3dXt2X31d6Ef9xee.SW10"
  ],
  "thid": "dcc4af0e-0a9c-4082-98d1-bbdc582002b7"
})