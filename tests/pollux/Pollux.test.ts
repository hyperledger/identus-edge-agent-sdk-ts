import { expect } from "chai";
import { CredentialType, DID, VerifiableCredential } from "../../src/domain";
import Castor from "../../src/castor/Castor";
import Apollo from "../../src/domain/buildingBlocks/Apollo";
import { InvalidJWTString } from "../../src/domain/models/errors/Pollux";
import Pollux from "../../src/pollux/Pollux";
import {
  cloudAgentCredentialJwt,
  cloudAgentCredentialPayload,
} from "./test-vectors";

const jwtParts = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6Imp3dCJ9",
  "18bn-r7uRWAG4FCFBjxemKvFYPCAoJTOHaHthuXh5nM",
];
const jwtString = jwtParts.join(".");

describe("Pollux", () => {
  let pollux: Pollux;

  beforeEach(() => {
    const apollo = {} as Apollo;
    const castor = new Castor(apollo);
    pollux = new Pollux(castor);
  });

  describe("parseVerifiableCredential", () => {
    describe("Invalid JWT string", () => {
      ["", `${jwtParts[0]}`, `${jwtParts[0]}.${jwtParts[1]}`].forEach(
        (value) => {
          it(`should error when too few parts [${
            value.split(".").length
          }]`, () => {
            expect(() => pollux.parseVerifiableCredential(value)).throws(
              InvalidJWTString
            );
          });
        }
      );

      [
        `${jwtString}.${jwtParts[0]}`,
        `${jwtString}.${jwtParts[0]}.${jwtParts[1]}`,
      ].forEach((value) => {
        it(`should error when too many parts [${
          value.split(".").length
        }]`, () => {
          expect(() => pollux.parseVerifiableCredential(value)).throws(
            InvalidJWTString
          );
        });
      });

      it("should error when not encoded JSON", () => {
        const encoded = Buffer.from("a").toString("base64");
        const value = `${jwtParts[0]}.${encoded}.${jwtParts[2]}`;

        expect(() => pollux.parseVerifiableCredential(value)).throws();
      });
    });

    const encodeCredential = (cred: object): string => {
      const json = JSON.stringify(cred);
      const encoded = Buffer.from(json).toString("base64");
      return `${jwtParts[0]}.${encoded}.${jwtParts[2]}`;
    };

    describe("Valid Credential", () => {
      it(`should return JWTVerifiableCredential`, () => {
        const jwtPayload = createPayload("jwtid", "proof", CredentialType.JWT);
        const encoded = encodeCredential(jwtPayload);
        const result = pollux.parseVerifiableCredential(encoded);

        expect(result).to.not.be.undefined;
        expect(result.id).to.equal(encoded);
        validateCredential(result, jwtPayload);
      });

      // currently not handled
      it.skip(`should return W3CVerifiableCredential`, () => {
        const jwtPayload = createPayload(
          "w3cid",
          "proofW3c",
          CredentialType.W3C
        );
        const encoded = encodeCredential(jwtPayload);
        const result = pollux.parseVerifiableCredential(encoded);

        expect(result).to.not.be.undefined;
        expect(result.id).to.equal(encoded);
        validateCredential(result, jwtPayload.vc);
      });
    });
  });

  it("should parse JWT dates (NumericDate) correctly", () => {
    // NumericDate in JWT represents number of SECONDS from 1970-01-01T00:00:00Z UTC
    // NOT milliseconds as in JS!
    const result = pollux.parseVerifiableCredential(cloudAgentCredentialJwt);

    expect(result.issuanceDate).to.equal(
      new Date(cloudAgentCredentialPayload.nbf * 1000).toISOString()
    );
    expect(result.expirationDate).to.equal(
      new Date(cloudAgentCredentialPayload.exp * 1000).toISOString()
    );
  });

  function createPayload(
    id: string,
    proof: string,
    credentialType: CredentialType
  ) {
    const cred: VerifiableCredential = {
      id,
      credentialType: credentialType,
      type: [credentialType],
      aud: ["aud"],
      context: ["context"],
      credentialSubject: { whatever: "credSubject" },
      evidence: {
        id: "evidenceId",
        type: "evidenceType",
      },
      expirationDate: new Date().toISOString(),
      issuanceDate: new Date().toISOString(),
      issuer: new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      ),
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
      proof: proof,
    };

    const jwtPayload: any = {
      id: "123",
      iss: "did:peer:2.issuer",
      nbf: 1680615608,
      sub: "did:peer:2.sub",
      exp: 1680615608,
      aud: ["aud-json"],
      vc: cred,
    };
    return jwtPayload;
  }
  function validateCredential(result: VerifiableCredential, jwtPayload: any) {
    const credential = jwtPayload.vc;

    expect(result.aud).to.be.deep.equal(jwtPayload.aud);
    expect(result.context).to.be.deep.equal(credential.context);
    expect(result.credentialSubject).to.be.deep.equal(
      credential.credentialSubject
    );
    expect(result.credentialType).to.be.equal(credential.credentialType);

    expect(result.expirationDate).to.be.equal(
      new Date(jwtPayload.exp * 1000).toISOString()
    );
    expect(result.issuanceDate).to.be.equal(
      new Date(jwtPayload.nbf * 1000).toISOString()
    );

    expect(result.type).to.be.deep.equal(credential.type);

    // expect(result.proof).to.be.equal(cred.proof);

    expect(result.issuer).to.be.an.instanceOf(DID);
    expect(result.issuer.toString()).to.be.equal(jwtPayload.iss);
    expect(result.evidence).to.be.deep.equal(credential.evidence);
    expect(result.refreshService).to.deep.equal(credential.refreshService);
    expect(result.termsOfUse).to.deep.equal(credential.termsOfUse);

    // expect(result.validFrom).to.be.deep.equal(credential.validFrom);
    // expect(result.validUntil).to.be.deep.equal(credential.validUntil);

    expect(result.credentialSchema).to.be.deep.equal(
      credential.credentialSchema
    );
    expect(result.credentialStatus).to.be.deep.equal(
      credential.credentialStatus
    );
  }
});
