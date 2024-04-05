import { AttachmentDescriptor, CredentialType, JWTCredentialPayload } from "../../../src/domain";
import { OfferCredential } from "../../../src/prism-agent/protocols/issueCredential/OfferCredential";
import { list } from "../dids";

// credential-offer
// credential-issue
// presentation-request
// ...

export const credentialOfferMessage = new OfferCredential(
  {
    "formats": [],
    "credential_preview": {
      "body": {
        "attributes": [
          {
            "media_type": null,
            "name": "familyName",
            "value": "JWT"
          },
          {
            "media_type": null,
            "name": "emailAddress",
            "value": "jwt@wonderland.com"
          }
        ]
      },
      "schema_id": null,
      "type": "https://didcomm.org/issue-credential/3.0/credential-credential"
    },
    "comment": null
  } as any,
  [
    new AttachmentDescriptor({
      data: JSON.stringify({
        "data": {
          "options": {
            "challenge": "fedac0c2-3250-4fb1-bfcb-b5e904058e1f",
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
            "id": "b8945a8a-c8e3-44af-9506-4a49c0096b31",
            "input_descriptors": [],
            "name": null,
            "purpose": null
          }
        }
      })
    },
      undefined,
      "321905d1-5f01-42b0-b0ba-39b09645eeaa",
      undefined,
      "prism/jwt"
    )
  ],
  list[2],
  list[3],
  "e0670d7d-933f-4408-9dfb-340cd6230584",
  "f8fe3752-710a-4d76-8d9b-87d7d045c85e"
);


export const credentialAgent = {
  credentialSubject: {
    additionalProp2: "Test3",
    id: "did:prism:beea5234af46804714d8ea8ec77b66cc7f3e815c68abb475f254cf9c30626763:CscBCsQBEmQKD2F1dGhlbnRpY2F0aW9uMBAEQk8KCXNlY3AyNTZrMRIgeSg-2OO1JdnpzUOBitzIicXdfzeAcTfWAN-YCeuCbyIaIJQ4GTI30taViwchT3e0nLXBS43B4j9jlslKo2ZldXzjElwKB21hc3RlcjAQAUJPCglzZWNwMjU2azESIHkoPtjjtSXZ6c1DgYrcyInF3X83gHE31gDfmAnrgm8iGiCUOBkyN9LWlYsHIU93tJy1wUuNweI_Y5bJSqNmZXV84w",
  },
  type: ["VerifiableCredential"],
  "@context": ["https://www.w3.org/2018/credentials/v1"],
};


export const credential = {
  id: "jwt123",
  credentialType: CredentialType.JWT,
  type: [CredentialType.JWT],
  aud: ["aud"],
  context: ["context"],
  credentialSubject: { whatever: "credSubject" },
  evidence: {
    id: "evidenceId",
    type: "evidenceType",
  },
  expirationDate: new Date().toISOString(),
  issuanceDate: new Date().toISOString(),
  // issuer: new DID(
  //   "did",
  //   "peer",
  //   "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
  // ),
  issuer: "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0",
  refreshService: {
    id: "refreshServiceId",
    type: "refreshServiceType",
  },
  termsOfUse: {
    id: "termsOfUseId",
    type: "termsOfUseType",
  },
  validFrom: {
    id: "validFromId",
    type: "validFromType",
  },
  validUntil: {
    id: "validUntilId",
    type: "validUntilType",
  },
  credentialSchema: {
    id: "credentialSchemaId",
    type: "credentialSchemaType",
  },
  credentialStatus: {
    id: "credentialStatusId",
    type: "credentialStatusType",
  },
  proof: "proof",
};


export const credentialPayloadEncoded = "eyJhbGciOiJFUzI1NksifQ.eyJpc3MiOiJkaWQ6cHJpc206MjU3MTlhOTZiMTUxMjA3MTY5ODFhODQzMGFkMGNiOTY4ZGQ1MzQwNzM1OTNjOGNkM2YxZDI3YTY4MDRlYzUwZTpDcG9DQ3BjQ0Vsb0tCV3RsZVMweEVBSkNUd29KYzJWamNESTFObXN4RWlBRW9TQ241dHlEYTZZNnItSW1TcXBKOFkxbWo3SkMzX29VekUwTnl5RWlDQm9nc2dOYWVSZGNDUkdQbGU4MlZ2OXRKZk53bDZyZzZWY2hSM09xaGlWYlRhOFNXd29HWVhWMGFDMHhFQVJDVHdvSmMyVmpjREkxTm1zeEVpRE1rQmQ2RnRpb0prM1hPRnUtX2N5NVhtUi00dFVRMk5MR2lXOGFJU29ta1JvZzZTZGU5UHduRzBRMFNCVG1GU1REYlNLQnZJVjZDVExYcmpJSnR0ZUdJbUFTWEFvSGJXRnpkR1Z5TUJBQlFrOEtDWE5sWTNBeU5UWnJNUklnTzcxMG10MVdfaXhEeVFNM3hJczdUcGpMQ05PRFF4Z1ZoeDVzaGZLTlgxb2FJSFdQcnc3SVVLbGZpYlF0eDZKazRUU2pnY1dOT2ZjT3RVOUQ5UHVaN1Q5dCIsInN1YiI6ImRpZDpwcmlzbTpiZWVhNTIzNGFmNDY4MDQ3MTRkOGVhOGVjNzdiNjZjYzdmM2U4MTVjNjhhYmI0NzVmMjU0Y2Y5YzMwNjI2NzYzOkNzY0JDc1FCRW1RS0QyRjFkR2hsYm5ScFkyRjBhVzl1TUJBRVFrOEtDWE5sWTNBeU5UWnJNUklnZVNnLTJPTzFKZG5welVPQml0eklpY1hkZnplQWNUZldBTi1ZQ2V1Q2J5SWFJSlE0R1RJMzB0YVZpd2NoVDNlMG5MWEJTNDNCNGo5amxzbEtvMlpsZFh6akVsd0tCMjFoYzNSbGNqQVFBVUpQQ2dselpXTndNalUyYXpFU0lIa29QdGpqdFNYWjZjMURnWXJjeUluRjNYODNnSEUzMWdEZm1BbnJnbThpR2lDVU9Ca3lOOUxXbFlzSElVOTN0Snkxd1V1TndlSV9ZNWJKU3FObVpYVjg0dyIsIm5iZiI6MTY4NTYzMTk5NSwiZXhwIjoxNjg1NjM1NTk1LCJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJhZGRpdGlvbmFsUHJvcDIiOiJUZXN0MyIsImlkIjoiZGlkOnByaXNtOmJlZWE1MjM0YWY0NjgwNDcxNGQ4ZWE4ZWM3N2I2NmNjN2YzZTgxNWM2OGFiYjQ3NWYyNTRjZjljMzA2MjY3NjM6Q3NjQkNzUUJFbVFLRDJGMWRHaGxiblJwWTJGMGFXOXVNQkFFUWs4S0NYTmxZM0F5TlRack1SSWdlU2ctMk9PMUpkbnB6VU9CaXR6SWljWGRmemVBY1RmV0FOLVlDZXVDYnlJYUlKUTRHVEkzMHRhVml3Y2hUM2UwbkxYQlM0M0I0ajlqbHNsS28yWmxkWHpqRWx3S0IyMWhjM1JsY2pBUUFVSlBDZ2x6WldOd01qVTJhekVTSUhrb1B0amp0U1haNmMxRGdZcmN5SW5GM1g4M2dIRTMxZ0RmbUFucmdtOGlHaUNVT0JreU45TFdsWXNISVU5M3RKeTF3VXVOd2VJX1k1YkpTcU5tWlhWODR3In0sInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiXSwiQGNvbnRleHQiOlsiaHR0cHM6XC9cL3d3dy53My5vcmdcLzIwMThcL2NyZWRlbnRpYWxzXC92MSJdfX0.x0SF17Y0VCDmt7HceOdTxfHlofsZmY18Rn6VQb0-r-k_Bm3hTi1-k2vkdjB25hdxyTCvxam-AkAP-Ag3Ahn5Ng";


// decoded payload value of real credential from the agent
export const credentialPayload: JWTCredentialPayload = {
  iss: "did:prism:25719a96b15120716981a8430ad0cb968dd534073593c8cd3f1d27a6804ec50e:CpoCCpcCEloKBWtleS0xEAJCTwoJc2VjcDI1NmsxEiAEoSCn5tyDa6Y6r-ImSqpJ8Y1mj7JC3_oUzE0NyyEiCBogsgNaeRdcCRGPle82Vv9tJfNwl6rg6VchR3OqhiVbTa8SWwoGYXV0aC0xEARCTwoJc2VjcDI1NmsxEiDMkBd6FtioJk3XOFu-_cy5XmR-4tUQ2NLGiW8aISomkRog6Sde9PwnG0Q0SBTmFSTDbSKBvIV6CTLXrjIJtteGImASXAoHbWFzdGVyMBABQk8KCXNlY3AyNTZrMRIgO710mt1W_ixDyQM3xIs7TpjLCNODQxgVhx5shfKNX1oaIHWPrw7IUKlfibQtx6Jk4TSjgcWNOfcOtU9D9PuZ7T9t",
  sub: "did:prism:beea5234af46804714d8ea8ec77b66cc7f3e815c68abb475f254cf9c30626763:CscBCsQBEmQKD2F1dGhlbnRpY2F0aW9uMBAEQk8KCXNlY3AyNTZrMRIgeSg-2OO1JdnpzUOBitzIicXdfzeAcTfWAN-YCeuCbyIaIJQ4GTI30taViwchT3e0nLXBS43B4j9jlslKo2ZldXzjElwKB21hc3RlcjAQAUJPCglzZWNwMjU2azESIHkoPtjjtSXZ6c1DgYrcyInF3X83gHE31gDfmAnrgm8iGiCUOBkyN9LWlYsHIU93tJy1wUuNweI_Y5bJSqNmZXV84w",
  nbf: 1685631995,
  exp: 1685635595,
  vc: credential,
  type: CredentialType.JWT,
  vp: undefined,
  jti: credentialPayloadEncoded,
  aud: ['did:prism:1234'],
  revoked: false
};



export const presentationRequest = {
  "options": {
    "challenge": "11c91493-01b3-4c4d-ac36-b336bab5bddf",
    "domain": "http://localhost:8000/prism-agent"
  },
  "presentation_definition": {
    "format": null,
    "id": "b2a49475-f8ba-4952-a719-a28e909858fa",
    "input_descriptors": [],
    "name": null,
    "purpose": null
  }
};
