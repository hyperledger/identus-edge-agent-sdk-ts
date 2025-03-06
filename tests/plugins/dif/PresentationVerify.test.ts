import { describe, expect, test, beforeEach } from 'vitest';
import type { DisclosureFrame, PresentationFrame, } from '@sd-jwt/types';

import { DIF } from '../../../src/plugins/internal/dif/types';
import { Task } from '../../../src/utils';
import { Apollo, Castor } from '../../../src';
import { JWT, SDJWT } from "../../../src/pollux/utils/jwt";
import { PresentationVerify } from '../../../src/plugins/internal/dif/PresentationVerify';
import { Curve, KeyTypes } from '../../../src/domain';
import { CreateSDJWT } from '../../../src/pollux/utils/jwt/CreateSDJWT';
import { DIFModule } from '../../../src/plugins/internal/dif/module';
import { JWTCredentialPayload, JWTPresentationPayload } from '../../../src/pollux/models/JWTVerifiableCredential';

describe("Plugins - DIF", () => {
  let ctx: Task.Context<{
    SDJWT: SDJWT,
    JWT: JWT,
    Apollo: Apollo,
    Castor: Castor,
    DIF: DIFModule
  }>;

  beforeEach(() => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    ctx = Task.Context.make<any>({
      Apollo: apollo,
      Castor: castor,
      JWT: new JWT(),
      SDJWT: new SDJWT(),
      DIF: new DIFModule(),
    });
  });

  describe("PresentationVerify", () => {
    describe("JWT", () => {
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

        test("Should verify false when presentation is valid using jwt_vc and jwt_vp with nested paths but presentation signature is invalid", async () => {
          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(issuerSeed.value).toString("hex"),
          });
          const issuerAuthenticationSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: Buffer.from(issuerSeed.value).toString("hex"),
          });

          const holderMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(holderSeed.value).toString("hex"),
          });
          const holderAuthenticationSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: Buffer.from(holderSeed.value).toString("hex"),
          });

          const issuerDID = await ctx.Castor.createPrismDID(
            issuerMasterSK.publicKey(),
            [],
            [
              issuerAuthenticationSK.publicKey()
            ]
          );

          const holderDID = await ctx.Castor.createPrismDID(
            holderMasterSK.publicKey(),
            [],
            [
              holderAuthenticationSK.publicKey()
            ]
          );

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = currentDate.getTime();
          const expirationDate = nextMonthDate.getTime();

          const vcPayload: JWTCredentialPayload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: holderDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, vcPayload, undefined, issuerAuthenticationSK);

          const vpPayload: JWTPresentationPayload = {
            iss: holderDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            vp: {
              "@context": ["https://www.w3.org/2018/presentations/v1"],
              type: ["VerifiablePresentation"],
              verifiableCredential: [
                jwt
              ]
            }
          };
          const presentationJWT = await ctx.JWT.signWithDID(holderDID, vpPayload, undefined, issuerAuthenticationSK)


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
              presentationJWT
            ]
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





          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow(
            `Verification failed for credential (eyJhbGciOi...): reason -> Invalid Verifiable Presentation JWS Signature`
          );
        })



        test("Should verify false when presentation is valid using jwt_vc and jwt_vp with nested paths but credential signature is invalid", async () => {
          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(issuerSeed.value).toString("hex"),
          });
          const issuerAuthenticationSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: Buffer.from(issuerSeed.value).toString("hex"),
          });

          const holderMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(holderSeed.value).toString("hex"),
          });
          const holderAuthenticationSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: Buffer.from(holderSeed.value).toString("hex"),
          });

          const issuerDID = await ctx.Castor.createPrismDID(
            issuerMasterSK.publicKey(),
            [],
            [
              issuerAuthenticationSK.publicKey()
            ]
          );

          const holderDID = await ctx.Castor.createPrismDID(
            holderMasterSK.publicKey(),
            [],
            [
              holderAuthenticationSK.publicKey()
            ]
          );

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = currentDate.getTime();
          const expirationDate = nextMonthDate.getTime();

          const vcPayload: JWTCredentialPayload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: holderDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, vcPayload, undefined, holderAuthenticationSK);

          const vpPayload: JWTPresentationPayload = {
            iss: holderDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            vp: {
              "@context": ["https://www.w3.org/2018/presentations/v1"],
              type: ["VerifiablePresentation"],
              verifiableCredential: [
                jwt
              ]
            }
          };
          const presentationJWT = await ctx.JWT.signWithDID(holderDID, vpPayload, undefined, holderMasterSK)


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
              presentationJWT
            ]
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

          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow(
            `Verification failed for credential (eyJhbGciOi...): reason -> Invalid Verifiable Credential JWS Signature`
          );
        })

        test("Should verify true when presentation is valid using jwt_vc and jwt_vp with nested paths", async () => {
          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = await ctx.run(sut);

          expect(result.data).toBe(true);
        })

        test("Should verify true when the presentation is valid,using jwt_vc only", async () => {

          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(issuerSeed.value).toString("hex"),
          });
          const issuerAuthenticationSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: Buffer.from(issuerSeed.value).toString("hex"),
          });

          const holderMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(holderSeed.value).toString("hex"),
          });
          const holderAuthenticationSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: Buffer.from(holderSeed.value).toString("hex"),
          });

          const issuerDID = await ctx.Castor.createPrismDID(
            issuerMasterSK.publicKey(),
            [],
            [
              issuerAuthenticationSK.publicKey()
            ]
          );

          const holderDID = await ctx.Castor.createPrismDID(
            holderMasterSK.publicKey(),
            [],
            [
              holderAuthenticationSK.publicKey()
            ]
          );

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
                          pattern: issuerDID.toString(),
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

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = currentDate.getTime();
          const expirationDate = nextMonthDate.getTime();

          const payload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: holderDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, payload, undefined, issuerAuthenticationSK);

          const presentation: DIF.EmbedTarget<'verifiableCredential'> = {
            presentation_submission: {
              id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
              definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
              descriptor_map: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.verifiableCredential[0]",
                },
              ],
            },
            verifiableCredential: [
              jwt,
            ],
          };


          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = await ctx.run(sut);

          expect(result.data).toBe(true);
        });

        test("Should verify false when the presentation is invalid, wrong signature,using jwt_vc only", async () => {

          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(issuerSeed.value).toString("hex"),
          });


          const holderMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(holderSeed.value).toString("hex"),
          });

          const issuerDID = await ctx.Castor.createPrismDID(issuerMasterSK.publicKey(), [], []);
          const holderDID = await ctx.Castor.createPrismDID(holderMasterSK.publicKey(), [], []);

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
                          pattern: issuerDID.toString(),
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

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = currentDate.getTime();
          const expirationDate = nextMonthDate.getTime();

          const payload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: issuerDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, payload, undefined, holderMasterSK);

          const presentation: DIF.EmbedTarget<'verifiableCredential'> = {
            presentation_submission: {
              id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
              definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
              descriptor_map: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.verifiableCredential[0]",
                },
              ],
            },
            verifiableCredential: [
              jwt,
            ],
          };


          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow(
            `Verification failed for credential (eyJhbGciOi...): reason -> Invalid Verifiable Credential JWS Signature`
          );

        });

        test("Should verify false when the presentation is invalid wrong issuer did,using jwt_vc only", async () => {

          const issuerSeed = ctx.Apollo.createRandomSeed().seed;
          const holderSeed = ctx.Apollo.createRandomSeed().seed;

          const issuerMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(issuerSeed.value).toString("hex"),
          });
          const issuerAuthenticationSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: Buffer.from(issuerSeed.value).toString("hex"),
          });

          const holderMasterSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.SECP256K1,
            seed: Buffer.from(holderSeed.value).toString("hex"),
          });
          const holderAuthenticationSK = ctx.Apollo.createPrivateKey({
            type: KeyTypes.EC,
            curve: Curve.ED25519,
            seed: Buffer.from(holderSeed.value).toString("hex"),
          });

          const issuerDID = await ctx.Castor.createPrismDID(
            issuerMasterSK.publicKey(),
            [],
            [
              issuerAuthenticationSK.publicKey()
            ]
          );

          const holderDID = await ctx.Castor.createPrismDID(
            holderMasterSK.publicKey(),
            [],
            [
              holderAuthenticationSK.publicKey()
            ]
          );

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
                          pattern: holderDID.toString(),
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

          const currentDate = new Date();
          const nextMonthDate = new Date(currentDate);
          nextMonthDate.setMonth(currentDate.getMonth() + 1);
          const issuanceDate = currentDate.getTime();
          const expirationDate = nextMonthDate.getTime();

          const payload = {
            iss: issuerDID.toString(),
            nbf: issuanceDate,
            exp: expirationDate,
            sub: holderDID.toString(),
            vc: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential"],
              issuer: issuerDID.toString(),
              issuanceDate: new Date(issuanceDate).toISOString(),
              credentialSubject: {
                firstname: "John Doe",
                email: 'demo@email.com',
                course: "Identus Training course Certification 2024",
              },
            },
          };

          const jwt = await ctx.JWT.signWithDID(issuerDID, payload, undefined, issuerAuthenticationSK);

          const presentation: DIF.EmbedTarget<'verifiableCredential'> = {
            presentation_submission: {
              id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
              definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
              descriptor_map: [
                {
                  id: "9e50eb6b-e7fc-46a8-bd91-7d53ac4adc53",
                  format: "jwt_vc",
                  path: "$.verifiableCredential[0]",
                },
              ],
            },
            verifiableCredential: [
              jwt,
            ],
          };


          const sut = new PresentationVerify({ presentation, presentationRequest, });
          const result = ctx.run(sut);

          await expect(result).rejects.toThrow(
            `Verification failed for credential (eyJraWQiOi...): reason -> Invalid Claim: Expected the $.vc.issuer field to be "${holderDID.toString()}" but got "${issuerDID.toString()}"`
          );

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
            format: "sd_jwt",
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

    test("Should Verify false when at least one of the input_descriptors does not match the presentation", async () => {
      const failRequest: DIF.Presentation.Request = JSON.parse(JSON.stringify(presentationRequest));

      //Valid input descriptor
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
          pattern: "Identus Training course Certification 2024",
        },
        name: "course",
      }];

      //Invalid input descriptor 
      failRequest.presentation_definition.input_descriptors[0].constraints.fields = [{
        path: [
          "$.vc.credentialSubject.firstname",
          "$.credentialSubject.firstname",
          "$.firstname",
        ],
        id: "c9c60d68-a25d-4ab0-8968-8d270ad95590",
        optional: false,
        filter: {
          type: "string",
          pattern: "not hola",
        },
        name: "firstname",
      }];
      const sut = new PresentationVerify({ presentation, presentationRequest: failRequest });
      const result = ctx.run(sut);

      await expect(result).rejects.toThrow('Verification failed for credential (eyJ0eXAiOi...): reason -> Invalid Claim: Expected the $.vc.credentialSubject.firstname field to be "not hola" but got "hola"');
    });

    test("Should Verify false when the verifier asks for a field that was not disclosed by the user", async () => {
      const issuerSeed = ctx.Apollo.createRandomSeed().seed;
      const holderSeed = ctx.Apollo.createRandomSeed().seed;

      const issuerMasterSK = ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(issuerSeed.value).toString("hex"),
      });
      const issuerAuthenticationSK = ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.ED25519,
        seed: Buffer.from(issuerSeed.value).toString("hex"),
      });

      const holderMasterSK = ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(holderSeed.value).toString("hex"),
      });
      const holderAuthenticationSK = ctx.Apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.ED25519,
        seed: Buffer.from(holderSeed.value).toString("hex"),
      });

      const issuerDID = await ctx.Castor.createPrismDID(
        issuerMasterSK.publicKey(),
        [],
        [
          issuerAuthenticationSK.publicKey()
        ]
      );

      const holderDID = await ctx.Castor.createPrismDID(
        holderMasterSK.publicKey(),
        [],
        [
          holderAuthenticationSK.publicKey()
        ]
      );

      const currentDate = new Date();
      const nextMonthDate = new Date(currentDate);
      nextMonthDate.setMonth(currentDate.getMonth() + 1);
      const issuanceDate = currentDate.getTime();
      const expirationDate = nextMonthDate.getTime();

      const payload = {
        iss: issuerDID.toString(),
        nbf: issuanceDate,
        exp: expirationDate,
        sub: holderDID.toString(),
        vc: {
          "@context": ["https://www.w3.org/2018/credentials/v1"],
          type: ["VerifiableCredential"],
          issuer: issuerDID.toString(),
          issuanceDate: new Date(issuanceDate).toISOString(),
          credentialSubject: {
            firstname: "hola",
            email: 'secret@email.com'
          },
        },
        vct: issuerDID.toString()
      };

      const claims = {
        firstname: {
          type: 'string',
          pattern: 'hola'
        },
        email: {
          type: 'string',
          pattern: '*'
        }
      }

      const presentationFrame: PresentationFrame<typeof payload> = {
        vc: {
          credentialSubject: {
            firstname: true,
            email: false
          }
        }
      }

      const disclosureFrame: DisclosureFrame<typeof payload> = {
        _sd: ["vc"],
        vc: {
          _sd: [
            "@context",
            "credentialSubject",
            "issuanceDate",
            "issuer",
            "type"
          ],
          credentialSubject: {
            _sd: ['email', 'firstname']
          }
        }
      }

      const createSDJWT = new CreateSDJWT<typeof payload>({
        did: issuerDID,
        payload,
        privateKey: issuerAuthenticationSK,
        disclosureFrame
      });

      const jwt = await ctx.run(createSDJWT);

      const presentationDefinition = await ctx.DIF.createPresentationDefinition(claims, {
        issuer: issuerDID.toString()
      });

      const presentationSubmissionJWS = await ctx.SDJWT.createPresentationFor<typeof payload>({
        jws: jwt,
        privateKey: issuerAuthenticationSK,
        presentationFrame
      });

      const [descriptor] = presentationDefinition.presentation_definition.input_descriptors;
      const presentation: DIF.EmbedTarget = {
        presentation_submission: {
          id: "f28b346e-c20e-4651-8c24-7f41a576cf26",
          definition_id: "acd86273-5017-4980-a9be-dab6c725c811",
          descriptor_map: [
            {
              id: descriptor.id,
              format: "sd_jwt",
              path: "$.verifiablePresentation[0]",
            },
          ],
        },
        verifiablePresentation: [
          presentationSubmissionJWS
        ],
      };

      const sut = ctx.run(new PresentationVerify({
        presentation,
        presentationRequest: presentationDefinition
      }));

      await expect(sut).rejects.toThrow('Verification failed for credential (eyJ0eXAiOi...): reason -> Invalid Claim: Expected one of the paths $.vc.credentialSubject.email, $.credentialSubject.email, $.email to exist.');

    })
  });
});
