export const AnoncredsAttachment: any = {
  "id": "e72a95df-137d-46f9-b8be-a1815a260f1a",
  "format": "anoncreds/proof-request@v1.0",
  "data": {
    "data": {
      nonce: "742809673342769044929402",
      name: "example_presentation_request",
      version: "0.1",
      requested_attributes: {
        attr1_referent: {
          name: "name",
          restrictions: {
            cred_def_id: "did:web:xyz/resource/cred-def",
          },
        },
      },
      requested_predicates: {
        predicate1_referent: {
          name: "age",
          p_type: ">=",
          p_value: 18,
          restrictions: []
        },
      },
    }
  }
};


export const JWTAttachment: any = {
  "id": "e72a95df-137d-46f9-b8be-a1815a260f1a",
  "format": "prism/jwt",
  "data": {
    "data": {
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
    }
  },
};
