import { expect } from "chai";
import { DID } from "../../domain";
import Castor from "../../castor/Castor";
import Apollo from "../../domain/buildingBlocks/Apollo";
import {
  InvalidCredentialError,
  InvalidJWTString,
} from "../../domain/models/errors/Pollux";
import {
  CredentialType,
  VerifiableCredential,
} from "../../domain/models/VerifiableCredential";
import Pollux from "../../pollux/Pollux";

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
      const value = `${jwtParts[0]}.${encoded}.${jwtParts[2]}`;
      return value;
    };

    const makeCredentialForType = (type: string[]): string => {
      const cred: Pick<VerifiableCredential, "type"> = { type };
      return encodeCredential(cred);
    };

    describe("Invalid Credential", () => {
      [
        [], // undefined
        [""], // empty string
        ["abc"], // not CredentialType
      ].forEach((type: string[]) => {
        it(`should error with incorrect Credential.type [${type}]`, () => {
          const value = makeCredentialForType(type);
          expect(() => pollux.parseVerifiableCredential(value)).throws(
            InvalidCredentialError
          );
        });
      });

      it(`should error with incorrect case Credential.type [JWT]`, () => {
        const value = makeCredentialForType(["JWT"]);
        expect(() => pollux.parseVerifiableCredential(value)).throws(
          InvalidCredentialError
        );
      });

      it(`should error with incorrect case Credential.type [W3C]`, () => {
        const value = makeCredentialForType(["W3C"]);
        expect(() => pollux.parseVerifiableCredential(value)).throws(
          InvalidCredentialError
        );
      });
    });

    describe("Valid Credential", () => {
      it(`should return JWTVerifiableCredential`, () => {
        const cred: VerifiableCredential = {
          id: "jwtid",
          credentialType: CredentialType.JWT,
          type: [CredentialType.JWT],
          aud: ["aud"],
          context: ["context"],
          credentialSubject: { whatever: "credSubject" },
          evidence: {
            id: "evidenceId",
            type: "evidenceType",
          },
          expirationDate: 1324567,
          issuanceDate: 2345678,
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
          proof: "proof",
        };

        const encoded = encodeCredential(cred);
        const result = pollux.parseVerifiableCredential(encoded);

        expect(result).to.not.be.undefined;
        expect(result.id).to.equal(encoded);
        expect(result.aud).to.eql(cred.aud);
        expect(result.context).to.eql(cred.context);
        expect(result.credentialSubject).to.equal(cred.credentialSubject);
        expect(result.credentialType).to.equal(cred.credentialType);
        expect(result.expirationDate).to.equal(cred.expirationDate);
        expect(result.issuanceDate).to.equal(cred.issuanceDate);
        expect(result.type).to.eql(cred.type);
        expect(result.proof).to.equal(cred.proof);

        expect(result.issuer).to.be.an.instanceOf(DID);
        expect(result.issuer).to.eql(cred.issuer);

        expect(result.evidence).to.be.deep.equal(cred.evidence);
        expect(result.evidence).to.eql(cred.evidence);

        expect(result.refreshService).to.deep.equal(cred.refreshService);
        expect(result.refreshService).to.eql(cred.refreshService);

        expect(result.termsOfUse).to.deep.equal(cred.termsOfUse);
        expect(result.termsOfUse).to.eql(cred.termsOfUse);

        expect(result.validFrom).to.deep.equal(cred.validFrom);
        expect(result.validFrom).to.eql(cred.validFrom);

        expect(result.validUntil).to.deep.equal(cred.validFrom);
        expect(result.validUntil).to.eql(cred.validUntil);

        expect(result.credentialSchema).to.deep.equal(cred.validUntil);
        expect(result.credentialSchema).to.eql(cred.credentialSchema);

        expect(result.credentialStatus).to.deep.equal(cred.credentialStatus);
        expect(result.credentialStatus).to.eql(cred.credentialStatus);
      });

      it(`should return W3CVerifiableCredential`, () => {
        const cred: VerifiableCredential = {
          id: "w3cid",
          credentialType: CredentialType.W3C,
          type: [CredentialType.W3C],
          aud: ["aud"],
          context: ["context"],
          credentialSubject: { whatever: "credSubject" },
          evidence: {
            id: "evidenceId",
            type: "evidenceType",
          },
          expirationDate: 1324567,
          issuanceDate: 2345678,
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
          proof: "proofW3c",
        };

        const encoded = encodeCredential(cred);
        const result = pollux.parseVerifiableCredential(encoded);

        expect(result).to.not.be.undefined;
        expect(result.id).to.equal(cred.id);
        expect(result.aud).to.eql(cred.aud);
        expect(result.context).to.eql(cred.context);
        expect(result.credentialSubject).to.equal(cred.credentialSubject);
        expect(result.credentialType).to.equal(cred.credentialType);
        expect(result.expirationDate).to.equal(cred.expirationDate);
        expect(result.issuanceDate).to.equal(cred.issuanceDate);
        expect(result.type).to.eql(cred.type);
        expect(result.proof).to.equal(cred.proof);

        expect(result.issuer).to.be.an.instanceOf(DID);
        expect(result.issuer).to.eql(cred.issuer);

        expect(result.evidence).to.be.deep.equal(cred.evidence);
        expect(result.evidence).to.eql(cred.evidence);

        expect(result.refreshService).to.deep.equal(cred.refreshService);
        expect(result.refreshService).to.eql(cred.refreshService);

        expect(result.termsOfUse).to.deep.equal(cred.termsOfUse);
        expect(result.termsOfUse).to.eql(cred.termsOfUse);

        expect(result.validFrom).to.deep.equal(cred.validFrom);
        expect(result.validFrom).to.eql(cred.validFrom);

        expect(result.validUntil).to.deep.equal(cred.validFrom);
        expect(result.validUntil).to.eql(cred.validUntil);

        expect(result.credentialSchema).to.deep.equal(cred.validUntil);
        expect(result.credentialSchema).to.eql(cred.credentialSchema);

        expect(result.credentialStatus).to.deep.equal(cred.credentialStatus);
        expect(result.credentialStatus).to.eql(cred.credentialStatus);
      });
    });
  });
});
