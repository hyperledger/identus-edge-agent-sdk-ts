import { OfferCredential } from "../../../src";
import { AttachmentDescriptor, CredentialType, JWT_ALG } from "../../../src/domain";

import { list } from "../dids";


export const credentialPayloadEncoded = "eyJ0eXAiOiJ2YytzZC1qd3QiLCJhbGciOiJFZERTQSJ9.eyJpc3MiOiJkaWQ6cHJpc206NzE2OGEwN2I5NGQxMzAyNjg5MDU2ZTkyN2I0ZGVmOTNjNDIzYjk1NTNmNzcxZTQ4NmM4ZDkxODg4M2UyNTZmMTpDcTBCQ3FvQkVsc0tIMkYxZEdobGJuUnBZMkYwYVc5dVlYVjBhR1Z1ZEdsallYUnBiMjVMWlhrUUJFSTJDZ2RGWkRJMU5URTVFaXRrYlRWbU1rZGtValZDWVVod1VuaENPR0pVUld4MlJWOHdaMGxETW5BME1EUk5jM2c1YzNkS09URTBFa3NLRDIxaGMzUmxjbTFoYzNSbGNrdGxlUkFCUWpZS0IwVmtNalUxTVRrU0syUnROV1l5UjJSU05VSmhTSEJTZUVJNFlsUkZiSFpGWHpCblNVTXljRFF3TkUxemVEbHpkMG81TVRRIiwiaWF0IjoxNzE3Nzc2MTY3NTg5LCJ2Y3QiOiJodHRwOi8vZXhhbXBsZS5jb20iLCJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJEb2UiLCJzc24iOiIxMjMtNDUtNjc4OSIsImlkIjoiMTIzNCIsIl9zZF9hbGciOiJzaGEtMjU2In0.RThFQjlENjJDN0Y5NjlCOEM0NERFNkU3RDg4MDg5RkRBQjg0RTUzNzUyNTZFRUI5NUQyQTUwQ0U1MTdDNzQ2NjU5REExOTM4Njc0RjhFMkQ2QjFCNzNFNEZCRDZBNkQ4NjIzNDFEQkFERjY0MTBERUJCRENDRkVBRjhCMkMwMDU~";

export const credentialOfferMessage = new OfferCredential(
  {
    // "formats": [
    //   {
    //     attach_id: "321905d1-5f01-42b0-b0ba-39b09645eeaa",
    //     format: CredentialType.SDJWT
    //   }
    // ],
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
        "options": {
          "challenge": "fedac0c2-3250-4fb1-bfcb-b5e904058e1f",
          "domain": "domain"
        }
      })
    },
      undefined,
      "321905d1-5f01-42b0-b0ba-39b09645eeaa",
      undefined,
      CredentialType.SDJWT
    )
  ],
  list[2],
  list[3],
  "e0670d7d-933f-4408-9dfb-340cd6230584",
  "f8fe3752-710a-4d76-8d9b-87d7d045c85e"
);

export const presentationRequest = {
  "claims": {
    firstname: {}
  }
};
