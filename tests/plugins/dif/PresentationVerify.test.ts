import { vi, describe, expect, test, beforeEach } from 'vitest';
import { DIF } from '../../../src/plugins/internal/dif/types';
import { Task } from '../../../src/utils';
import { Apollo, Castor } from '../../../src';
import { JWT, SDJWT } from "../../../src/pollux/utils/jwt";
import { PresentationVerify } from '../../../src/plugins/internal/dif/PresentationVerify';

describe("Plugins - DIF", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    ctx = Task.Context.make<any>({
      Apollo: apollo,
      Castor: castor,
      JWT: new JWT(),
      SDJWT: new SDJWT(),
    });
  });

  describe("PresentationVerify", () => {
    describe("JWT", () => {
      const issuerDID = "did:prism:0858c30daf6d0cc3e0b1ae31b7cb212f4446a6e0f47a5926b3ba7dc64986157b:CmEKXxJdCghtYXN0ZXItMBABQk8KCXNlY3AyNTZrMRIgM3HxlER-HNHG59NAGoJJ7OdA5XlQAbOU5JqPGmnkZiQaIFYj9QUSo_xiemYiLHlBBkwHjZZKR1FjSA2OlgKI9iC9";
      const issuerPK = {
        curve: "Secp256k1",
        hex: "ad29fa414bdc84737fba87743e7b9f876e278a18d0036ab782042e0c6e7a4672"
      };
      const holderDID = "did:prism:38e78e4dd9711c49a1fb533b0247c5a26516e38e99a259cd21ff5b84097533d6:CmEKXxJdCghtYXN0ZXItMBABQk8KCXNlY3AyNTZrMRIgp6Bi0cCJRnOQQxeL5RXjW7v1zKJrJQ7Wcoxy5OGV3HkaID3gsu86_sFD09sWeR7O8aQCVeludTW5aYSPoPiQEgBi";
      const holderPK = {
        curve: "Secp256k1",
        hex: "e7e232848313a57c5161a9d6e1813db133ae9f1baffb3c5e82dba220746bf18a"
      };
      const jwt = "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3MzY1MTEzNzcsImV4cCI6MTczOTE4OTc3NzYyNiwiaXNzIjoiZGlkOnByaXNtOjA4NThjMzBkYWY2ZDBjYzNlMGIxYWUzMWI3Y2IyMTJmNDQ0NmE2ZTBmNDdhNTkyNmIzYmE3ZGM2NDk4NjE1N2I6Q21FS1h4SmRDZ2h0WVhOMFpYSXRNQkFCUWs4S0NYTmxZM0F5TlRack1SSWdNM0h4bEVSLUhOSEc1OU5BR29KSjdPZEE1WGxRQWJPVTVKcVBHbW5rWmlRYUlGWWo5UVVTb194aWVtWWlMSGxCQmt3SGpaWktSMUZqU0EyT2xnS0k5aUM5IiwibmJmIjoxNzM2NTExMzc3NjI2LCJzdWIiOiJkaWQ6cHJpc206MzhlNzhlNGRkOTcxMWM0OWExZmI1MzNiMDI0N2M1YTI2NTE2ZTM4ZTk5YTI1OWNkMjFmZjViODQwOTc1MzNkNjpDbUVLWHhKZENnaHRZWE4wWlhJdE1CQUJRazhLQ1hObFkzQXlOVFpyTVJJZ3A2QmkwY0NKUm5PUVF4ZUw1UlhqVzd2MXpLSnJKUTdXY294eTVPR1YzSGthSUQzZ3N1ODZfc0ZEMDlzV2VSN084YVFDVmVsdWRUVzVhWVNQb1BpUUVnQmkiLCJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImlzc3VlciI6ImRpZDpwcmlzbTowODU4YzMwZGFmNmQwY2MzZTBiMWFlMzFiN2NiMjEyZjQ0NDZhNmUwZjQ3YTU5MjZiM2JhN2RjNjQ5ODYxNTdiOkNtRUtYeEpkQ2dodFlYTjBaWEl0TUJBQlFrOEtDWE5sWTNBeU5UWnJNUklnTTNIeGxFUi1ITkhHNTlOQUdvSko3T2RBNVhsUUFiT1U1SnFQR21ua1ppUWFJRllqOVFVU29feGllbVlpTEhsQkJrd0hqWlpLUjFGalNBMk9sZ0tJOWlDOSIsImlzc3VhbmNlRGF0ZSI6IjIwMjUtMDEtMTBUMTI6MTY6MTcuNjI2WiIsImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImNvdXJzZSI6IklkZW50dXMgVHJhaW5pbmcgY291cnNlIENlcnRpZmljYXRpb24gMjAyNCJ9fX0.SGpkR7YG-yYyNxZ4w_UF1yueu2gf73R-BktKX_mPZth2s4pOdr5NFuz3M6faFBZKTbD5ydGHFE4bbWLk09vB2g";
      const payload = {
        iss: issuerDID,
        nbf: 1736511377626,
        exp: 1739189777626,
        sub: holderDID,
        vc: {
          "@context": ["https://www.w3.org/2018/credentials/v1"],
          type: ["VerifiableCredential"],
          issuer: issuerDID,
          issuanceDate: "2025-01-10T12:16:17.626Z",
          credentialSubject: {
            course: "Identus Training course Certification 2024",
          },
        },
      };

      const presentation: DIF.EmbedTarget = {
        presentation_submission: {
          id: "0b17b996-7d52-4b2a-81fd-e6ffcd6dd188",
          definition_id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
          descriptor_map: [{
            id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
            format: "jwt_vp",
            path: "$.verifiablePresentation[0]",
            path_nested: {
              id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
              format: "jwt_vc",
              path: "$.vp.verifiableCredential[0]",
            },
          },
          ],
        },
        verifiablePresentation: [
          "eyJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6cHJpc206MzhlNzhlNGRkOTcxMWM0OWExZmI1MzNiMDI0N2M1YTI2NTE2ZTM4ZTk5YTI1OWNkMjFmZjViODQwOTc1MzNkNjpDbUVLWHhKZENnaHRZWE4wWlhJdE1CQUJRazhLQ1hObFkzQXlOVFpyTVJJZ3A2QmkwY0NKUm5PUVF4ZUw1UlhqVzd2MXpLSnJKUTdXY294eTVPR1YzSGthSUQzZ3N1ODZfc0ZEMDlzV2VSN084YVFDVmVsdWRUVzVhWVNQb1BpUUVnQmkjbWFzdGVyLTAiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3MzY1MTEzNzcsImlzcyI6ImRpZDpwcmlzbTozOGU3OGU0ZGQ5NzExYzQ5YTFmYjUzM2IwMjQ3YzVhMjY1MTZlMzhlOTlhMjU5Y2QyMWZmNWI4NDA5NzUzM2Q2OkNtRUtYeEpkQ2dodFlYTjBaWEl0TUJBQlFrOEtDWE5sWTNBeU5UWnJNUklncDZCaTBjQ0pSbk9RUXhlTDVSWGpXN3YxektKckpRN1djb3h5NU9HVjNIa2FJRDNnc3U4Nl9zRkQwOXNXZVI3TzhhUUNWZWx1ZFRXNWFZU1BvUGlRRWdCaSIsIm5iZiI6MTczNjUxMTM3NzY0MywidnAiOnsiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlUHJlc2VudGF0aW9uIl0sInZlcmlmaWFibGVDcmVkZW50aWFsIjpbImV5SmhiR2NpT2lKRlV6STFOa3NpTENKMGVYQWlPaUpLVjFRaWZRLmV5SnBZWFFpT2pFM016WTFNVEV6Tnpjc0ltVjRjQ0k2TVRjek9URTRPVGMzTnpZeU5pd2lhWE56SWpvaVpHbGtPbkJ5YVhOdE9qQTROVGhqTXpCa1lXWTJaREJqWXpObE1HSXhZV1V6TVdJM1kySXlNVEptTkRRME5tRTJaVEJtTkRkaE5Ua3lObUl6WW1FM1pHTTJORGs0TmpFMU4ySTZRMjFGUzFoNFNtUkRaMmgwV1ZoT01GcFlTWFJOUWtGQ1VXczRTME5ZVG14Wk0wRjVUbFJhY2sxU1NXZE5NMGg0YkVWU0xVaE9TRWMxT1U1QlIyOUtTamRQWkVFMVdHeFJRV0pQVlRWS2NWQkhiVzVyV21sUllVbEdXV281VVZWVGIxOTRhV1Z0V1dsTVNHeENRbXQzU0dwYVdrdFNNVVpxVTBFeVQyeG5TMGs1YVVNNUlpd2libUptSWpveE56TTJOVEV4TXpjM05qSTJMQ0p6ZFdJaU9pSmthV1E2Y0hKcGMyMDZNemhsTnpobE5HUmtPVGN4TVdNME9XRXhabUkxTXpOaU1ESTBOMk0xWVRJMk5URTJaVE00WlRrNVlUSTFPV05rTWpGbVpqVmlPRFF3T1RjMU16TmtOanBEYlVWTFdIaEtaRU5uYUhSWldFNHdXbGhKZEUxQ1FVSlJhemhMUTFoT2JGa3pRWGxPVkZweVRWSkpaM0EyUW1rd1kwTktVbTVQVVZGNFpVdzFVbGhxVnpkMk1YcExTbkpLVVRkWFkyOTRlVFZQUjFZelNHdGhTVVF6WjNOMU9EWmZjMFpFTURselYyVlNOMDg0WVZGRFZtVnNkV1JVVnpWaFdWTlFiMUJwVVVWblFta2lMQ0oyWXlJNmV5SkFZMjl1ZEdWNGRDSTZXeUpvZEhSd2N6b3ZMM2QzZHk1M015NXZjbWN2TWpBeE9DOWpjbVZrWlc1MGFXRnNjeTkyTVNKZExDSjBlWEJsSWpwYklsWmxjbWxtYVdGaWJHVkRjbVZrWlc1MGFXRnNJbDBzSW1semMzVmxjaUk2SW1ScFpEcHdjbWx6YlRvd09EVTRZek13WkdGbU5tUXdZMk16WlRCaU1XRmxNekZpTjJOaU1qRXlaalEwTkRaaE5tVXdaalEzWVRVNU1qWmlNMkpoTjJSak5qUTVPRFl4TlRkaU9rTnRSVXRZZUVwa1EyZG9kRmxZVGpCYVdFbDBUVUpCUWxGck9FdERXRTVzV1ROQmVVNVVXbkpOVWtsblRUTkllR3hGVWkxSVRraEhOVGxPUVVkdlNrbzNUMlJCTlZoc1VVRmlUMVUxU25GUVIyMXVhMXBwVVdGSlJsbHFPVkZWVTI5ZmVHbGxiVmxwVEVoc1FrSnJkMGhxV2xwTFVqRkdhbE5CTWs5c1owdEpPV2xET1NJc0ltbHpjM1ZoYm1ObFJHRjBaU0k2SWpJd01qVXRNREV0TVRCVU1USTZNVFk2TVRjdU5qSTJXaUlzSW1OeVpXUmxiblJwWVd4VGRXSnFaV04wSWpwN0ltTnZkWEp6WlNJNklrbGtaVzUwZFhNZ1ZISmhhVzVwYm1jZ1kyOTFjbk5sSUVObGNuUnBabWxqWVhScGIyNGdNakF5TkNKOWZYMC5TR3BrUjdZRy15WXlOeFo0d19VRjF5dWV1MmdmNzNSLUJrdEtYX21QWnRoMnM0cE9kcjVORnV6M002ZmFGQlpLVGJENXlkR0hGRTRiYldMazA5dkIyZyJdfX0.pt8bSbXa6AhZ_dMuDZ_iXW4F6R9EmS-BGZ7ETb9kuOdxWfsN0yjKkc-cNSMvXUha2NlJ2Q34Yrms53xo4eNLlQ",
        ],
      };

      const presentationRequest: DIF.Presentation.Request = {
        presentation_definition: {
          id: "ba7814d4-4bdf-42a5-a3f9-a2e86419e6c4",
          input_descriptors: [
            {
              id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
              name: "Presentation",
              purpose: "Verifying Credentials",
              constraints: {
                fields: [
                  {
                    path: [
                      "$.vc.credentialSubject.course",
                      "$.credentialSubject.course",
                      "$.course",
                    ],
                    id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
                    optional: false,
                    filter: {
                      type: "string",
                      pattern: "Identus Training course Certification 2024",
                    },
                    name: "course",
                  },
                  {
                    path: [
                      "$.vc.issuer",
                      "$.issuer",
                      "$.iss",
                      "$.vc.iss",
                    ],
                    id: "6a6fa378-d701-43e7-81d5-ee1cd80c585e",
                    optional: false,
                    name: "issuer",
                    filter: {
                      type: "string",
                      pattern: "did:prism:0858c30daf6d0cc3e0b1ae31b7cb212f4446a6e0f47a5926b3ba7dc64986157b:CmEKXxJdCghtYXN0ZXItMBABQk8KCXNlY3AyNTZrMRIgM3HxlER-HNHG59NAGoJJ7OdA5XlQAbOU5JqPGmnkZiQaIFYj9QUSo_xiemYiLHlBBkwHjZZKR1FjSA2OlgKI9iC9",
                    },
                  },
                ],
                limit_disclosure: "required",
              },
              format: {
                jwt: {
                  alg: [
                    "ES256K",
                  ],
                },
              },
            },
          ],
          format: {
            jwt: {
              alg: [
                "ES256K",
              ],
            },
          },
        },
        options: {
          challenge: "sign this",
          domain: "N/A",
        },
      };

      test("returns Payload ('valid', true) - when the presentation and request are valid", async () => {
        const sut = new PresentationVerify({ presentation, presentationRequest });
        const result = await ctx.run(sut);

        expect(result.pid).toBe("valid");
        expect(result.data).toBe(true);
      });

      describe("validation", () => {
        test("Should Verify false when the Credential subject does not provide required field", async () => {
          const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));
          failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
            path: [
              "$.vc.credentialSubject.not_a_course",
              "$.credentialSubject.not_a_course",
              "$.not_a_course",
            ],
            id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
            optional: false,
            filter: {
              type: "string",
              pattern: "Identus Training course Certification 2024",
            },
            name: "not_a_course",
          }];
          const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow("Verification failed for credential (eyJhbGciOi...): reason -> Invalid Claim: Expected one of the paths $.vc.credentialSubject.not_a_course, $.credentialSubject.not_a_course, $.not_a_course to exist.");
        });

        test("Should Verify false when the Credential subject does not match given pattern", async () => {
          const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));
          failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
            path: [
              "$.vc.credentialSubject.course",
              "$.credentialSubject.course",
              "$.course",
            ],
            id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
            optional: false,
            filter: {
              type: "string",
              pattern: "not the expected pattern",
            },
            name: "course",
          }];
          const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow('Verification failed for credential (eyJhbGciOi...): reason -> Invalid Claim: Expected the $.vc.credentialSubject.course field to be "not the expected pattern" but got "Identus Training course Certification 2024"');
        });

        test("invalid presentation - not an object - returns false", async () => {
          const presentation = "fail" as any;
          const sut = new PresentationVerify({ presentation, presentationRequest });
          const result = await ctx.run(sut);

          expect(result.data).toBe(false);
        });

        test("invalid presentation - missing presentation_submission - returns false", async () => {
          const invalid = { ...presentation, presentation_submission: undefined } as any;
          const sut = new PresentationVerify({ presentation: invalid, presentationRequest });
          const result = await ctx.run(sut);

          expect(result.data).toBe(false);
        });

        test("invalid presentation - no matching format - returns false", async () => {
          const invalid: DIF.EmbedTarget = {
            ...presentation,
            presentation_submission: {
              ...presentation.presentation_submission,
              descriptor_map: [{
                format: "invalid" as any,
                id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                path: "$.verifiablePresentation[0]",
                path_nested: {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.vp.verifiableCredential[0]",
                },
              }],
            },
          };

          const sut = new PresentationVerify({ presentation: invalid, presentationRequest });
          const result = await ctx.run(sut);

          expect(result.data).toBe(false);
        });

        test("invalid presentationRequest - not an object - returns false", async () => {
          const sut = new PresentationVerify({ presentation, presentationRequest: "fail" as any });
          const result = await ctx.run(sut);

          expect(result.data).toBe(false);
        });
      });
    });
  });

  describe("SDJWT", () => {
    const presentation: DIF.EmbedTarget = {
      presentation_submission: {
        id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
        definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
        descriptor_map: [
          {
            id: "c3fd00a4-129d-49dc-a640-d84ad32826d9",
            format: "sdjwt" as any,
            path: "$.verifiablePresentation[0]",
          },
        ],
      },
      verifiablePresentation: [
        "eyJ0eXAiOiJ2YytzZC1qd3QiLCJraWQiOiJkaWQ6cHJpc206YjNiOTNhOGYzODI0YmMzOTMzZDAyMmFmNjhhNTU4NWM2MmE1ZjRhNmQ1MzlkZmU0YjQxYzA5NTZkYzAwMWUxNzpDajBLT3hJNUNnaHRZWE4wWlhJdE1CQUJTaXNLQjBWa01qVTFNVGtTSUhQNC0ycGF1dzRRX2RPc2tXZHdYLUZNdHBEMFFLcUVhcWxJTnNQbDJ4bk4jbWFzdGVyLTAiLCJhbGciOiJlZGRzYSJ9.eyJpc3MiOiJkaWQ6cHJpc206YjNiOTNhOGYzODI0YmMzOTMzZDAyMmFmNjhhNTU4NWM2MmE1ZjRhNmQ1MzlkZmU0YjQxYzA5NTZkYzAwMWUxNzpDajBLT3hJNUNnaHRZWE4wWlhJdE1CQUJTaXNLQjBWa01qVTFNVGtTSUhQNC0ycGF1dzRRX2RPc2tXZHdYLUZNdHBEMFFLcUVhcWxJTnNQbDJ4bk4iLCJuYmYiOjE3MzY1MTQ4OTk3OTQsImV4cCI6MTczOTE5MzI5OTc5NCwic3ViIjoiZGlkOnByaXNtOjIyZWRlZDQ3MDYyNzRkZGQwYzIzNmNkZjNiNTY1YjBkODQ3MzFkM2I4MGQ3M2JiYzJhMTI1ZTQzMGQ2NjJhZmY6Q2owS094STVDZ2h0WVhOMFpYSXRNQkFCU2lzS0IwVmtNalUxTVRrU0lQX1JFaWF2cHp6WXlydVJYZVdHdFhJcTdMR2QxaEgxeHJUalRHRGRUdWlvIiwidmN0IjoiZGlkOnByaXNtOmIzYjkzYThmMzgyNGJjMzkzM2QwMjJhZjY4YTU1ODVjNjJhNWY0YTZkNTM5ZGZlNGI0MWMwOTU2ZGMwMDFlMTc6Q2owS094STVDZ2h0WVhOMFpYSXRNQkFCU2lzS0IwVmtNalUxTVRrU0lIUDQtMnBhdXc0UV9kT3NrV2R3WC1GTXRwRDBRS3FFYXFsSU5zUGwyeG5OIiwiX3NkIjpbIk1FZHljRFg0UlFyTGRxdlcxcmFCck1DRFZxZDJLUEhkZWRqbEFuLW1kZ2MiXSwiX3NkX2FsZyI6InNoYTI1NiJ9.Y9y1hoRxZLxuBMEhSCr0Jp37DNX7ebUIDjCxys_DS_x21Ka2w1N-c7kIPZhfM7p1ptfJOmYMpJkbuP6FotXPAA~WyI1NjJkNmE2MTg2NGYwMTZhIiwidmMiLHsiX3NkIjpbIkJaUy1hN2RPM3FKdUE5V2lsdEduUFpWd0xXdUhjNjhhSFNpWWc4WDFsdkEiLCJCdllZTzhtWFRubnZJYTVEc2ZybjA0UHR3V1pnS1d4bkFQQWdDLWNWb3lJIiwiU0Y1VTRlYm0ySzhhQ2pLS0JfRkg3N09sQ1VSeTFQY0JqNEJDZ2t5M3Y5SSIsIlVxVzlFVS1tVWpFMjZDd290VW51aG5iQ19EdkNYYkxmZFQzM05rek5lWEEiLCJubkZlRVFQUEJNQW12WkNVbVU4MkU5X0Z3YWx1aUg2aTRPRkx3VndxaFVrIl19XQ~WyIzZjA2OTU1YzBjZGU4NWY2IiwiY3JlZGVudGlhbFN1YmplY3QiLHsiX3NkIjpbIkY1N1JVdGpLZkRvZFZlUnF0RlQtdnZNZVdhVENmZG1wM1FYODZfQ3p2aGsiLCJRN0tWVnBEZ28zNHhNVXBfZXdyeVptaWJJdzdBb2ZlNWNTV2g3X0U0ZFJJIl19XQ~WyJmNjdkNDA4NmIwNGQ3NmI3IiwiZmlyc3RuYW1lIiwiaG9sYSJd~",
      ],
    };

    const presentationRequest: DIF.Presentation.Request = {
      presentation_definition: {
        id: "acd86273-5017-4980-a9be-dab6c725c811",
        input_descriptors: [
          {
            id: "c3fd00a4-129d-49dc-a640-d84ad32826d9",
            name: "Presentation",
            purpose: "Verifying Credentials",
            constraints: {
              fields: [
                {
                  path: [
                    "$.vc.credentialSubject.firstname",
                    "$.credentialSubject.firstname",
                    "$.firstname",
                  ],
                  id: "2c46f1ee-ac0a-4ba0-9e8d-84dd63f5b407",
                  optional: false,
                  filter: {
                    type: "string",
                    pattern: "hola",
                  },
                  name: "firstname",
                },
              ],
              limit_disclosure: "required",
            },
            format: {
              sdjwt: {
                alg: [
                  "EdDSA",
                ],
              },
            },
          },
        ],
        format: {
          sdjwt: {
            alg: [
              "EdDSA",
            ],
          },
        },
      },
      options: {},
    };

    test("returns Payload ('valid', true)", async () => {
      const sut = new PresentationVerify({ presentation, presentationRequest });
      const result = await ctx.run(sut);

      expect(result.pid).toBe("valid");
      expect(result.data).toBe(true);
    });

    test("Should Verify false when the Credential subject does not provide required field", async () => {
      const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));
      failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
        path: [
          "$.vc.credentialSubject.not_a_course",
          "$.credentialSubject.not_a_course",
          "$.not_a_course",
        ],
        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
        optional: false,
        filter: {
          type: "string",
          pattern: "Identus Training course Certification 2024",
        },
        name: "not_a_course",
      }];
      const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
      const result = ctx.run(sut);

      await expect(result).rejects.toThrow("Verification failed for credential (eyJ0eXAiOi...): reason -> Invalid Claim: Expected one of the paths $.vc.credentialSubject.not_a_course, $.credentialSubject.not_a_course, $.not_a_course to exist.");
    });

    test("Should Verify false when the Credential subject does not match given pattern", async () => {
      const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));
      failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
        path: [
          "$.vc.credentialSubject.course",
          "$.credentialSubject.course",
          "$.course",
        ],
        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
        optional: false,
        filter: {
          type: "string",
          pattern: "not the expected pattern",
        },
        name: "course",
      }];
      const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
      const result = ctx.run(sut);

      await expect(result).rejects.toThrow("Verification failed for credential (eyJ0eXAiOi...): reason -> Invalid Claim: Expected one of the paths $.vc.credentialSubject.course, $.credentialSubject.course, $.course to exist.");
    });

    // for use with PresentationFrame feature [https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/362]
    // test("Should Verify false when the verifier asks for a field that was not disclosed by the user", async () => {
    /*
      //At the presentation level the holder chooses which fields it wants to disclose to verifier
      // presentationFrame: {
      //   vc: {
      //     credentialSubject: {
      //       firstname: true,
      //       email: false
      //     }
      //   }
      // },
      // const presentationSubmissionJSON = await pollux.createPresentationSubmission<CredentialType.SDJWT>(
      //   presentationDefinition,
      //   jwtCredential,
      //   holderPrv,
      //   { presentationFrame }
      // );
      //   jws = await this.SDJWT.createPresentationFor<any>({
      //     jws: credential.id,
      //     privateKey,
      //     presentationFrame
      //   });

      // requiredClaims: ['vc.credentialSubject.email']
    //*/
    //   const sut = ctx.run(new PresentationVerify({ presentation, presentationRequest }));

    //   // Fails despite the verifier asked for the email, the holder rejected disclosing it
    //   expect(sut).to.eventually.be.rejectedWith(
    //     "Invalid Claim: Expected one of the paths $.vc.credentialSubject.email, $.credentialSubject.email, $.email to exist."
    //   );
    // });
  });
});
