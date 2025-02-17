import { vi, describe, expect, test, beforeEach } from 'vitest';
import { Task } from '../../../src/utils';
import { Apollo, Castor } from '../../../src';
import { JWT, SDJWT } from "../../../src/pollux/utils/jwt";
import { CreatePresentationDefinition } from '../../../src/plugins/internal/dif/module/CreatePresentationDefinition';

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

  describe("CreatePresentationDefinition", () => {
    test("Should be able to create a presentationDefinitionRequest for a JWT Credential", async () => {
      const result = await ctx.run(new CreatePresentationDefinition({
        issuer: "did:prism:12345",
        claims: {
          name: {
            type: 'string',
            pattern: 'identus'
          }
        }
      }));

      const presentation_definition = result.data.presentation_definition;
      expect(presentation_definition).haveOwnProperty("id");
      expect(presentation_definition).haveOwnProperty("format");
      expect(presentation_definition).haveOwnProperty("input_descriptors");
      expect(presentation_definition.format).haveOwnProperty("jwt");
      expect(Array.isArray(presentation_definition.input_descriptors)).to.eq(true);
      expect(presentation_definition.input_descriptors.length).to.eq(1);
      expect(presentation_definition.input_descriptors.at(0)).haveOwnProperty('constraints');
      expect(presentation_definition.input_descriptors.at(0)?.constraints.fields.length).to.eq(2);
      expect(presentation_definition.input_descriptors.at(0)?.constraints.fields[0].path.at(0)).to.eq('$.vc.credentialSubject.name');
      expect(presentation_definition.input_descriptors.at(0)?.constraints.fields[1].path.at(0)).to.eq('$.vc.issuer');
    });
  });
});
