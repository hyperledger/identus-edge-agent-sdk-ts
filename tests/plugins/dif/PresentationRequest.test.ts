import { vi, describe, expect, test, beforeEach } from 'vitest';
import { PresentationRequest } from '../../../src/plugins/internal/dif/PresentationRequest';
import { DIF } from '../../../src/plugins/internal/dif/types';
import { Task } from '../../../src/utils';
import { Apollo, Castor, JWTCredential, SDJWTCredential } from '../../../src';
import { JWT, SDJWT } from "../../../src/pollux/utils/jwt";
import * as Fixtures from "../../fixtures";
import { mockPluto } from "../../fixtures/inmemory/factory";

describe("Plugins - DIF", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    const pluto = mockPluto();
    ctx = Task.Context.make<any>({
      Apollo: apollo,
      Castor: castor,
      Pluto: pluto,
      JWT: new JWT(),
      SDJWT: new SDJWT(),
    });

    vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([
      Fixtures.Keys.secp256K1.privateKey
    ]);
  });

  describe("PresentationRequest", () => {
    describe("JWT", () => {
      const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
      const presentationRequest: DIF.Presentation.Request = {
        // options: {
        //   challenge: "11c91493-01b3-4c4d-ac36-b336bab5bddf",
        //   domain: "http://localhost:8000/prism-agent"
        // },
        presentation_definition: {
          id: "b2a49475-f8ba-4952-a719-a28e909858fa",
          format: {},
          input_descriptors: [],
        }
      };

      test("returns Payload", async () => {
        const sut = new PresentationRequest({ credential, presentationRequest });
        const result = await ctx.run(sut);

        expect(result.pid).toBe(DIF.PRESENTATION);
        expect(result.data).toEqual(expect.objectContaining({}));
      });

      test("Payload.data is EmbedTarget", async () => {
        const sut = new PresentationRequest({ credential, presentationRequest });
        const result = await ctx.run(sut);

        expect(result.data).toEqual({
          verifiablePresentation: expect.arrayContaining([expect.stringMatching("")]),
          presentation_submission: {
            id: expect.stringMatching(""),
            definition_id: presentationRequest.presentation_definition.id,
            descriptor_map: [],
          },
        });
      });

      test("presentation_definition.input_descriptors map to descriptor_map", async () => {
        const inputDescriptor: DIF.Presentation.Definition.InputDescriptor = {
          id: "abc123",
          constraints: { fields: [], limit_disclosure: "preferred" }
        };
        const presentationRequest: DIF.Presentation.Request = {
          presentation_definition: {
            id: "b2a49475-f8ba-4952-a719-a28e909858fa",
            format: {},
            input_descriptors: [inputDescriptor],
          }
        };

        const sut = new PresentationRequest({ credential, presentationRequest });
        const result = await ctx.run(sut);

        const descriptorMap = result.data.presentation_submission.descriptor_map;
        expect(descriptorMap).toHaveLength(1);
        expect(descriptorMap[0]).toEqual({
          id: inputDescriptor.id,
          format: "jwt_vp",
          path: "$.verifiablePresentation[0]",
          path_nested: {
            id: inputDescriptor.id,
            format: 'jwt_vc',
            path: "$.vp.verifiableCredential[0]",
          }
        });
      });
    });
  });

  describe("SDJWT", () => {
    const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
    const presentationRequest: DIF.Presentation.Request = {
      presentation_definition: {
        id: "b2a49475-f8ba-4952-a719-a28e909858fa",
        format: {},
        input_descriptors: [],
      }
    };

    test("returns Payload", async () => {
      const sut = new PresentationRequest({ credential, presentationRequest });
      const result = await ctx.run(sut);

      expect(result.pid).toBe(DIF.PRESENTATION);
      expect(result.data).toEqual(expect.objectContaining({}));
    });

    test("Payload.data is EmbedTarget", async () => {
      const sut = new PresentationRequest({ credential, presentationRequest });
      const result = await ctx.run(sut);

      expect(result.data).toEqual({
        verifiablePresentation: expect.arrayContaining([expect.stringMatching("")]),
        presentation_submission: {
          id: expect.stringMatching(""),
          definition_id: presentationRequest.presentation_definition.id,
          descriptor_map: [],
        },
      });
    });

    test("presentation_definition.input_descriptors map to descriptor_map", async () => {
      const inputDescriptor: DIF.Presentation.Definition.InputDescriptor = {
        id: "abc123",
        constraints: { fields: [], limit_disclosure: "preferred" }
      };
      const presentationRequest: DIF.Presentation.Request = {
        presentation_definition: {
          id: "b2a49475-f8ba-4952-a719-a28e909858fa",
          format: {},
          input_descriptors: [inputDescriptor],
        }
      };

      const sut = new PresentationRequest({ credential, presentationRequest });
      const result = await ctx.run(sut);

      const descriptorMap = result.data.presentation_submission.descriptor_map;
      expect(descriptorMap).toHaveLength(1);
      expect(descriptorMap[0]).toEqual({
        id: inputDescriptor.id,
        format: "sd_jwt",
        path: "$.verifiablePresentation[0]",
      });
    });
  });
});
