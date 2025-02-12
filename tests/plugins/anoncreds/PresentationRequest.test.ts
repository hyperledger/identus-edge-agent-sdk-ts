import { vi, describe, expect, test, beforeEach } from 'vitest';
import { Task } from '../../../src/utils';
import { AnonCredsCredential, JWTCredential, Pluto } from '../../../src';
import { PresentationRequest } from '../../../src/plugins/internal/anoncreds/PresentationRequest';
import * as FetchCredModule from "../../../src/plugins/internal/anoncreds/FetchCredentialDefinition";
import * as FetchSchemaModule from "../../../src/plugins/internal/anoncreds/FetchSchema";
import * as Fixtures from "../../fixtures";
import { mockPluto } from '../../fixtures/inmemory/factory';
import { AnoncredsLoader } from '../../../src/plugins/internal/anoncreds/module/AnoncredsLoader';
import * as Anoncreds from "../../../src/plugins/internal/anoncreds/types";

describe("Plugins - Anoncreds", () => {
  let ctx: Task.Context;
  let pluto: Pluto;

  beforeEach(() => {
    pluto = mockPluto();
    ctx = Task.Context.make({
      Pluto: pluto,
      Anoncreds: new AnoncredsLoader(),
    });

    vi.spyOn(pluto, "getLinkSecret").mockResolvedValue(Fixtures.Credentials.Anoncreds.linkSecret);
    vi.spyOn(FetchCredModule, "FetchCredentialDefinition").mockReturnValue({
      run: () => Promise.resolve(Fixtures.Credentials.Anoncreds.credentialDefinition),
      log: () => ({}),
    } as any);
    vi.spyOn(FetchSchemaModule, "fetchSchema").mockReturnValue({
      run: () => Promise.resolve(Fixtures.Credentials.Anoncreds.schema),
      log: () => ({}),
    } as any);
  });

  describe("PresentationRequest", () => {
    test("returns a Payload ", async () => {

      const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
      const presentationRequest = {
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
            // restrictions: []
          },
        },
      };

      const result = await ctx.run(new PresentationRequest({ credential, presentationRequest }));

      expect(result.pid).toBe(Anoncreds.PRESENTATION);
      expect(result.data).toEqual({
        proof: {
          proofs: [{
            primary_proof: {
              eq_proof: {
                revealed_attrs: {
                  name: expect.stringMatching(/\d/),
                },
                a_prime: expect.stringMatching(/\d/),
                e: expect.stringMatching(/\d/),
                v: expect.stringMatching(/\d/),
                m: {
                  age: expect.stringMatching(/\d/),
                  master_secret: expect.stringMatching(/\d/),
                },
                m2: expect.stringMatching(/\d/),
              },
              ge_proofs: [
                {
                  u: {
                    "0": expect.stringMatching(/\d/),
                    "1": expect.stringMatching(/\d/),
                    "2": expect.stringMatching(/\d/),
                    "3": expect.stringMatching(/\d/),
                  },
                  r: {
                    "0": expect.stringMatching(/\d/),
                    "1": expect.stringMatching(/\d/),
                    "2": expect.stringMatching(/\d/),
                    "3": expect.stringMatching(/\d/),
                    DELTA: expect.stringMatching(/\d/),
                  },
                  mj: expect.stringMatching(/\d/),
                  alpha: expect.stringMatching(/\d/),
                  t: {
                    "0": expect.stringMatching(/\d/),
                    "1": expect.stringMatching(/\d/),
                    "2": expect.stringMatching(/\d/),
                    "3": expect.stringMatching(/\d/),
                    DELTA: expect.stringMatching(/\d/),
                  },
                  predicate: {
                    attr_name: "age",
                    p_type: "GE",
                    value: 18,
                  },
                },
              ],
            },
          },
          ],
          aggregated_proof: {
            c_hash: expect.stringMatching(/\d/),
            c_list: [
              expect.arrayContaining([]),
              expect.arrayContaining([]),
              expect.arrayContaining([]),
              expect.arrayContaining([]),
              expect.arrayContaining([]),
              expect.arrayContaining([]),
            ],
          },
        },
        requested_proof: {
          revealed_attrs: {
            attr1_referent: {
              sub_proof_index: 0,
              raw: "test",
              encoded: expect.stringMatching(/\d/),
            },
          },
          self_attested_attrs: {},
          unrevealed_attrs: {},
          predicates: {
            predicate1_referent: {
              sub_proof_index: 0,
            },
          },
        },
        identifiers: [{
          cred_def_id: Fixtures.Credentials.Anoncreds.credDefId,
          schema_id: Fixtures.Credentials.Anoncreds.schemaId,
        }],
      });
    });

    test("Should Reject Creating a Presentation with a Credential that doesn't have the requested field 'email'", async () => {
      const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
      const presentationRequest = {
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
          attr2_referent: {
            name: "email",
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
            // restrictions: []
          },
        },
      };

      const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

      await expect(sut).rejects.toThrowError('AnoncredsError Credential value not found for attribute "email"');
    });

    test("Should Reject Creating a Presentation with a Credential that doesn't have predicates", async () => {
      const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
      const presentationRequest = {
        nonce: "742809673342769044929402",
        name: "example_presentation_request",
        version: "0.1",
        requested_attributes: {
          // attr1_referent: {
          //   name: "name",
          //   restrictions: {
          //     cred_def_id: "did:web:xyz/resource/cred-def",
          //   },
          // },
        },
        requested_predicates: {},
      };

      const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

      await expect(sut).rejects.toThrowError("AnoncredsError No credential mapping or self-attested attributes presented");
    });

    test("Should Reject Creating a Presentation with a Credential that doesn't have valid predicates", async () => {
      const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
      const presentationRequest = {
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
            p_value: 50,
          },
        },
      };

      const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

      expect(sut).rejects.toThrowError("AnoncredsError Error: Invalid structure\nCaused by: Predicate is not satisfied\n");
    });

    test("Should Reject Creating an Anoncreds Presentation Submission using an invalid presentationDefinition", async () => {
      const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);

      const sut = ctx.run(new PresentationRequest({ credential, presentationRequest: null as any }));

      expect(sut).rejects.toThrowError('Invalid Presentation definition error');
    });

    test("Should Reject Creating an Anoncreds Presentation Submission using a wrong JWT Credential", async () => {
      const credential = new JWTCredential(Fixtures.Credentials.JWT.credentialPayload) as any;
      const presentationRequest = {
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
          attr2_referent: {
            name: "email",
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
          },
        },
      };

      const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

      expect(sut).rejects.toThrowError('Required a valid Anoncreds Credential for Anoncreds Presentation submission');
    });
  });
});
