import { vi, describe, it, beforeEach, expect } from 'vitest';
import { base64 } from "multiformats/bases/base64";
import { Task } from '../../../src/utils';
import * as Fixtures from "../../fixtures";
import { Apollo, JWTCredential, SDJWTCredential } from '../../../src';
import { IsCredentialRevoked } from '../../../src/plugins/internal/dif/IsCredentialRevoked';
import { Api, ApiResponse, Curve, KeyTypes } from '../../../src/domain';
import { VerificationKeyType } from '../../../src/castor/types';
import { JWT_VC_PROPS } from '../../../src/pollux/models/JWTVerifiableCredential';


describe("Plugins - DIF", () => {
  describe("IsCredentialRevoked", () => {
    let ctx: Task.Context;
    let api: Api;
    let apollo: Apollo;
    const revocableJWTCredential = `eyJhbGciOiJFUzI1NksifQ.eyJpc3MiOiJkaWQ6cHJpc206YmM5ZGFhZWFmMGFkNjczZjVkNTViM2I2NjEyYTE2NTNiYzcyYWMxNjU5Y2VmYTgxYzZlZWY0NWMxZjcyMTYzOTpDcmtCQ3JZQkVqb0tCbUYxZEdndE1SQUVTaTRLQ1hObFkzQXlOVFpyTVJJaEFqRDNnM3ctcHNnRXZQcUJxUDJmVjhPQXAwQ0l3WjVYU3FhMU9OWU1HOGRQRWpzS0IybHpjM1ZsTFRFUUFrb3VDZ2x6WldOd01qVTJhekVTSVFQRGNPbm9BV25YODBhZnA2aVVEZUl6ZUViMXMySFVPUEo5TEpRRTd1RzdYeEk3Q2dkdFlYTjBaWEl3RUFGS0xnb0pjMlZqY0RJMU5tc3hFaUVDc3luYTRsbkw3anhfSnctTXUtUjd3UUppSnhCNGpnMWUwODN1Q252amNhSSIsInN1YiI6ImRpZDpwcmlzbTozZjBiNDQ5NjI3NmI3NGEzMTU3ZmRiOTEwODU5MDExYjhjZWQwNjU1ZGYyNWU3ZjgwNTAyZjE0OGU2NmM1NGU4OkN0OEJDdHdCRW5RS0gyRjFkR2hsYm5ScFkyRjBhVzl1WVhWMGFHVnVkR2xqWVhScGIyNUxaWGtRQkVKUENnbHpaV053TWpVMmF6RVNJS0ZpZjRlcnNMOFF2SFF2VmxXUEFNaHFPNmwzbXZSbUp5ZlRFRTYzZzI2MEdpRG9PNS1KRzR3Z1JkZk1LcXlqZnp2ek9sSXRsNDNsdDQ0Z21TMWxtaFpKZUJKa0NnOXRZWE4wWlhKdFlYTjBaWEpMWlhrUUFVSlBDZ2x6WldOd01qVTJhekVTSUtGaWY0ZXJzTDhRdkhRdlZsV1BBTWhxTzZsM212Um1KeWZURUU2M2cyNjBHaURvTzUtSkc0d2dSZGZNS3F5amZ6dnpPbEl0bDQzbHQ0NGdtUzFsbWhaSmVBIiwibmJmIjoxNzE1MDA2OTY4LCJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJlbWFpbEFkZHJlc3MiOiJjb3Jwb3JhdGVAZG9tYWluLmNvbSIsImRyaXZpbmdDbGFzcyI6MSwiZHJpdmluZ0xpY2Vuc2VJRCI6IkVTLTEyMzQ1Njc4OTAiLCJpZCI6ImRpZDpwcmlzbTozZjBiNDQ5NjI3NmI3NGEzMTU3ZmRiOTEwODU5MDExYjhjZWQwNjU1ZGYyNWU3ZjgwNTAyZjE0OGU2NmM1NGU4OkN0OEJDdHdCRW5RS0gyRjFkR2hsYm5ScFkyRjBhVzl1WVhWMGFHVnVkR2xqWVhScGIyNUxaWGtRQkVKUENnbHpaV053TWpVMmF6RVNJS0ZpZjRlcnNMOFF2SFF2VmxXUEFNaHFPNmwzbXZSbUp5ZlRFRTYzZzI2MEdpRG9PNS1KRzR3Z1JkZk1LcXlqZnp2ek9sSXRsNDNsdDQ0Z21TMWxtaFpKZUJKa0NnOXRZWE4wWlhKdFlYTjBaWEpMWlhrUUFVSlBDZ2x6WldOd01qVTJhekVTSUtGaWY0ZXJzTDhRdkhRdlZsV1BBTWhxTzZsM212Um1KeWZURUU2M2cyNjBHaURvTzUtSkc0d2dSZGZNS3F5amZ6dnpPbEl0bDQzbHQ0NGdtUzFsbWhaSmVBIiwiZGF0ZU9mSXNzdWFuY2UiOiIyMDIzLTAxLTAxVDAyOjAyOjAyWiJ9LCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sIkBjb250ZXh0IjpbImh0dHBzOlwvXC93d3cudzMub3JnXC8yMDE4XC9jcmVkZW50aWFsc1wvdjEiXSwiY3JlZGVudGlhbFN0YXR1cyI6eyJzdGF0dXNQdXJwb3NlIjoiUmV2b2NhdGlvbiIsInN0YXR1c0xpc3RJbmRleCI6MSwiaWQiOiJodHRwOlwvXC8xOTIuMTY4LjE1NC4yMDU6ODAwMFwvcHJpc20tYWdlbnRcL2NyZWRlbnRpYWwtc3RhdHVzXC8xYzE1Yjk2My1kYzRkLTQ3NjUtYjc1Mi01M2EzZmQxZjE4MzMjMSIsInR5cGUiOiJTdGF0dXNMaXN0MjAyMUVudHJ5Iiwic3RhdHVzTGlzdENyZWRlbnRpYWwiOiJodHRwOlwvXC8xOTIuMTY4LjE1NC4yMDU6ODAwMFwvcHJpc20tYWdlbnRcL2NyZWRlbnRpYWwtc3RhdHVzXC8xYzE1Yjk2My1kYzRkLTQ3NjUtYjc1Mi01M2EzZmQxZjE4MzMifX19.NxuJoiEgSnGs7suM5cxDq3tZ6ZYVDAscnKBuAXghW0KD9MhSr1vBUo9F6y0YkjhHBY4Y_gTGnIMBwgLYjcNVKw`;

    beforeEach(() => {
      api = {
        request: async () => new ApiResponse<any>(new Uint8Array(), 200),
      };
      apollo = new Apollo();
      ctx = Task.Context.make({
        Api: api,
        Apollo: apollo,
      });
    });


    it("Should correctly determine that a Credential is revoked when calling the credentialStatus [EcdsaSecp256k1Signature2019] list endpoints", async () => {
      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": "data:application/json;base64,eyJAY29udGV4dCI6WyJodHRwczovL3czaWQub3JnL3NlY3VyaXR5L3YxIl0sInR5cGUiOiJFY2RzYVNlY3AyNTZrMVZlcmlmaWNhdGlvbktleTIwMTkiLCJwdWJsaWNLZXlKd2siOnsiY3J2Ijoic2VjcDI1NmsxIiwia2V5X29wcyI6WyJ2ZXJpZnkiXSwia3R5IjoiRUMiLCJ4IjoiQ1hJRmwyUjE4YW1lTEQteWtTT0dLUW9DQlZiRk01b3Vsa2MydklySnRTND0iLCJ5IjoiRDJRWU5pNi1BOXoxbHhwUmpLYm9jS1NUdk5BSXNOVnNsQmpsemVnWXlVQT0ifX0=",
          "created": "2024-07-25T22:49:59.091957Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..FJLUBsZhGB1o_G1UwsVaoL-8agvcpoelJtAr2GlNOOqCSOd-WNEj5-FOgv0m0QcdKMokl2TxibJMg3Y-MJq4-A"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/01def9a2-2bcb-4bb3-8a36-6834066431d0",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1721947798,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BIQEAAAACIKf6f4UzLEADAAAAAAAAAAAAAAAAAAAAvA3PduITAEAAAA=="
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const credential2 = JWTCredential.fromJWS(revocableJWTCredential);
      const credential3 = JWTCredential.fromJWS(revocableJWTCredential);

      const vc = credential.properties.get(JWT_VC_PROPS.vc);
      vc.credentialStatus.statusListIndex = 1;
      credential.properties.set(JWT_VC_PROPS.vc, vc);

      const vc2 = credential2.properties.get(JWT_VC_PROPS.vc);
      vc2.credentialStatus.statusListIndex = 2;
      credential2.properties.set(JWT_VC_PROPS.vc, vc2);

      const vc3 = credential3.properties.get(JWT_VC_PROPS.vc);
      vc3.credentialStatus.statusListIndex = 3;
      credential3.properties.set(JWT_VC_PROPS.vc, vc3);


      const revoked = await ctx.run(new IsCredentialRevoked({ credential }));
      const revoked2 = await ctx.run(new IsCredentialRevoked({ credential: credential2 }));
      const revoked3 = await ctx.run(new IsCredentialRevoked({ credential: credential3 }));

      expect(revoked.data).to.eq(true);
      expect(revoked2.data).to.eq(true);
      expect(revoked3.data).to.eq(false);

    });

    it("Should throw an error if we try to use a SDJWT credential ", async () => {
      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": "data:application/json;base64,eyJAY29udGV4dCI6WyJodHRwczovL3czaWQub3JnL3NlY3VyaXR5L3YxIl0sInR5cGUiOiJFY2RzYVNlY3AyNTZrMVZlcmlmaWNhdGlvbktleTIwMTkiLCJwdWJsaWNLZXlKd2siOnsiY3J2Ijoic2VjcDI1NmsxIiwia2V5X29wcyI6WyJ2ZXJpZnkiXSwia3R5IjoiRUMiLCJ4IjoiVFlCZ21sM1RpUWRSX1lRRDFoSXVOTzhiUnluU0otcmxQcWFVd3JXa3EtRT0iLCJ5IjoiVjBnVFlBM0xhbFd3Q3hPZHlqb2ZoR2JkYVFEd3EwQXdCblNodFJLXzNYZz0ifX0=",
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2024",
          "statusPurpose": "Revocation",
          //Credential index [0] has a value of 2
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));
      const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.SDJWT.credentialPayloadEncoded);
      const sut = ctx.run(new IsCredentialRevoked({ credential: credential as any }));

      expect(sut).rejects.toThrowError(`Only JWT Credential are supported`);
    });
    //*

    it("Should throw an error if we try to use a credential which an unsupported type ", async () => {
      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": "data:application/json;base64,eyJAY29udGV4dCI6WyJodHRwczovL3czaWQub3JnL3NlY3VyaXR5L3YxIl0sInR5cGUiOiJFY2RzYVNlY3AyNTZrMVZlcmlmaWNhdGlvbktleTIwMTkiLCJwdWJsaWNLZXlKd2siOnsiY3J2Ijoic2VjcDI1NmsxIiwia2V5X29wcyI6WyJ2ZXJpZnkiXSwia3R5IjoiRUMiLCJ4IjoiVFlCZ21sM1RpUWRSX1lRRDFoSXVOTzhiUnluU0otcmxQcWFVd3JXa3EtRT0iLCJ5IjoiVjBnVFlBM0xhbFd3Q3hPZHlqb2ZoR2JkYVFEd3EwQXdCblNodFJLXzNYZz0ifX0=",
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2024",
          "statusPurpose": "Revocation",
          //Credential index [0] has a value of 2
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));
      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const vc = credential.properties.get(JWT_VC_PROPS.vc);
      vc.credentialStatus.statusListIndex = 0;
      vc.credentialStatus.type = "Wrong";
      credential.properties.set(JWT_VC_PROPS.vc, vc);

      const sut = ctx.run(new IsCredentialRevoked({ credential: credential as any }));

      expect(sut).rejects.toThrowError(`CredentialStatus revocation type not supported`);
    });

    it("Should throw an error if the credential status proof contains an invalid verificationMethod", async () => {
      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": "data:application/json;base64",
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const sut = ctx.run(new IsCredentialRevoked({ credential }));

      await expect(sut).rejects.toThrowError(`CredentialStatus proof invalid verificationMethod`);

    });

    it("should throw an error if no jwk is provided", async () => {
      const encoded = base64.baseEncode(Buffer.from(JSON.stringify({ noJWK: true })));
      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": `data:application/json;base64,${encoded}`,
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const sut = ctx.run(new IsCredentialRevoked({ credential }));

      await expect(sut).rejects.toThrowError("No public jwk provided");
    });

    it("should throw an eror if a wrong verificationMethod type is used", async () => {
      const encoded2 = base64.baseEncode(Buffer.from(JSON.stringify({ publicKeyJwk: { x: "423", y: "123" } })));
      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": `data:application/json;base64,${encoded2}`,
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const sut = ctx.run(new IsCredentialRevoked({ credential }));

      await expect(sut).rejects.toThrowError("Err Only EcdsaSecp256k1VerificationKey2019 is supported");
    });

    it("Should throw an error if a wrong key type is used", async () => {
      const encoded3 = base64.baseEncode(Buffer.from(JSON.stringify({ type: VerificationKeyType.EcdsaSecp256k1VerificationKey2019, publicKeyJwk: { x: "423", y: "123" } })));
      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": `data:application/json;base64,${encoded3}`,
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const sut = ctx.run(new IsCredentialRevoked({ credential }));

      await expect(sut).rejects.toThrowError("Err Invalid JWK kty: undefined, should be EC");

    });

    it("Should throw an error if a wrong key curve is used", async () => {
      const encoded4 = base64.baseEncode(Buffer.from(JSON.stringify({ type: VerificationKeyType.EcdsaSecp256k1VerificationKey2019, publicKeyJwk: { x: "423", y: "123", kty: KeyTypes.EC } })));
      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": `data:application/json;base64,${encoded4}`,
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const sut = ctx.run(new IsCredentialRevoked({ credential }));

      await expect(sut).rejects.toThrowError("Err Invalid JWK crv: undefined, should be secp256k1");
    });

    it("Should throw an eror if an invalid verificationKey is used", async () => {
      const encoded5 = base64.baseEncode(Buffer.from(JSON.stringify({ type: VerificationKeyType.EcdsaSecp256k1VerificationKey2019, publicKeyJwk: { x: 'TYBgml3TiQdR_YQD1hIuNO8bRynSJ-rlPqaUwrWkq-E=', y: 'V0gTYA3LalWwCxOdyjofhGbdaQDwq0AwBnShtRK_3Xg=', kty: KeyTypes.EC, crv: Curve.SECP256K1.toLocaleLowerCase() } })));

      // return privateKey so .canVerify() returns false
      vi.spyOn(apollo, "createPublicKey").mockReturnValue(Fixtures.Keys.ed25519.privateKey);

      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": `data:application/json;base64,${encoded5}`,
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const sut = ctx.run(new IsCredentialRevoked({ credential }));

      await expect(sut).rejects.toThrowError("CredentialStatus proof invalid verifying key");
    });

    it("Should throw an error if the status jwt is invalid", async () => {
      const encoded6 = base64.baseEncode(Buffer.from(JSON.stringify({ type: VerificationKeyType.EcdsaSecp256k1VerificationKey2019, publicKeyJwk: { x: 'TYBgml3TiQdR_YQD1hIuNO8bRynSJ-rlPqaUwrWkq-E=', y: 'V0gTYA3LalWwCxOdyjofhGbdaQDwq0AwBnShtRK_3Xg=', kty: KeyTypes.EC, crv: Curve.SECP256K1.toLocaleLowerCase() } })));

      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": `data:application/json;base64,${encoded6}`,
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ."
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const sut = ctx.run(new IsCredentialRevoked({ credential }));

      await expect(sut).rejects.toThrowError("Credential status jwt is invalid");
    });

    it("should throw an error if wrong signature is used", async () => {
      const encoded8 = base64.baseEncode(
        Buffer.from(
          JSON.stringify({
            type: VerificationKeyType.EcdsaSecp256k1VerificationKey2019,
            publicKeyJwk: {
              x: 'TYBgml3TiQdR_YQD1hIuNO8bRynSJ-rlPqaUwrWkq-E=',
              y: 'V0gTYA3LalWwCxOdyjofhGbdaQDwq0AwBnShtRK_3Xg=',
              kty: KeyTypes.EC,
              crv: Curve.SECP256K1.toLocaleLowerCase()
            }
          }
          )
        )
      );

      vi.spyOn(apollo, "createPublicKey").mockReturnValue(Fixtures.Keys.ed25519.publicKey);

      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2019",
          "proofPurpose": "assertionMethod",
          "verificationMethod": `data:application/json;base64,${encoded8}`,
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const sut = ctx.run(new IsCredentialRevoked({ credential }));

      await expect(sut).rejects.toThrowError("CredentialStatus invalid signature");
    });

    /*
        it("Should throw an error if we cannot decode the revocation registry correctly ", async () => {
    
    
          (pollux as any)._pako = {
            ungzip: vi.fn(() => {
              throw new Error('whatever');
            }),
          };
    
          const fetchRevocationRegistryStub = vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
            "proof": {
              "type": "EcdsaSecp256k1Signature2019",
              "proofPurpose": "assertionMethod",
              "verificationMethod": "data:application/json;base64,eyJAY29udGV4dCI6WyJodHRwczovL3czaWQub3JnL3NlY3VyaXR5L3YxIl0sInR5cGUiOiJFY2RzYVNlY3AyNTZrMVZlcmlmaWNhdGlvbktleTIwMTkiLCJwdWJsaWNLZXlKd2siOnsiY3J2Ijoic2VjcDI1NmsxIiwia2V5X29wcyI6WyJ2ZXJpZnkiXSwia3R5IjoiRUMiLCJ4IjoiVFlCZ21sM1RpUWRSX1lRRDFoSXVOTzhiUnluU0otcmxQcWFVd3JXa3EtRT0iLCJ5IjoiVjBnVFlBM0xhbFd3Q3hPZHlqb2ZoR2JkYVFEd3EwQXdCblNodFJLXzNYZz0ifX0=",
              "created": "2024-06-14T10:56:59.948091Z",
              "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..Q1mj3jMf5DWK83E55r6vNUPpsYYgclgwYoNFBSYBzA5x6fI_2cPHJsXECnQlG1XMj2ifldngpJXegTpwe3Fgwg"
            },
            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://w3id.org/vc/status-list/2021/v1"
            ],
            "type": [
              "VerifiableCredential",
              "StatusList2021Credential"
            ],
            "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
            "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
            "issuanceDate": 1717714047,
            "credentialSubject": {
              "type": "StatusList2021",
              "statusPurpose": "Revocation",
              "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
            }
          }, 200));
    
          await expect(pollux.isCredentialRevoked(JWTCredential.fromJWS(revocableJWTCredential)))
            .rejects.toThrowError(`Couldn't ungzip base64 encoded list, err: whatever`);
    
          fetchRevocationRegistryStub.mockRestore();
        });
    //*/
    it("Should throw an error if the status proof type is invalid", async () => {
      const encoded6 = base64.baseEncode(Buffer.from(JSON.stringify({
        type: VerificationKeyType.EcdsaSecp256k1VerificationKey2019,
        publicKeyJwk: { x: 'TYBgml3TiQdR_YQD1hIuNO8bRynSJ-rlPqaUwrWkq-E=', y: 'V0gTYA3LalWwCxOdyjofhGbdaQDwq0AwBnShtRK_3Xg=', kty: KeyTypes.EC, crv: Curve.SECP256K1.toLocaleLowerCase() }
      })));
      vi.spyOn(api, "request").mockResolvedValue(new ApiResponse({
        "proof": {
          "type": "EcdsaSecp256k1Signature2024",
          "proofPurpose": "assertionMethod",
          "verificationMethod": `data:application/json;base64,${encoded6}`,
          "created": "2024-06-14T10:56:59.948091Z",
          "jws": "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ."
        },
        "@context": [
          "https://www.w3.org/2018/credentials/v1",
          "https://w3id.org/vc/status-list/2021/v1"
        ],
        "type": [
          "VerifiableCredential",
          "StatusList2021Credential"
        ],
        "id": "http://localhost:8085/credential-status/575092c2-7eb0-40ae-8f41-3b499f45f3dc",
        "issuer": "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",
        "issuanceDate": 1717714047,
        "credentialSubject": {
          "type": "StatusList2021",
          "statusPurpose": "Revocation",
          "encodedList": "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"
        }
      }, 200));

      const credential = JWTCredential.fromJWS(revocableJWTCredential);
      const sut = ctx.run(new IsCredentialRevoked({ credential }));

      await expect(sut).rejects.toThrowError("CredentialStatus proof type not supported");
    });
    //*/
  });
});
