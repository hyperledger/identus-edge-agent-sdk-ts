import { vi, describe, expect, test, beforeEach } from 'vitest';
import { JWT } from "../../src/pollux/utils/jwt/JWT";
import { Apollo, Castor, Domain } from "../../src";
import * as Fixtures from "../fixtures";
import { Task } from '../../src/utils';
import { JWTCredential, JWTCredentialPayload } from '../../src/pollux/models/JWTVerifiableCredential';
import { InvalidCredentialError } from '../../src/domain/models/errors/Pollux';

describe("JWTCredential", () => {
  let jwt: JWT;
  let apollo: Domain.Apollo;
  let castor: Domain.Castor;

  beforeEach(() => {
    apollo = new Apollo();
    castor = new Castor(apollo);
    const ctx = Task.Context.make({
      Apollo: apollo,
      Castor: castor,
    });
    jwt = new JWT().withContext(ctx) as JWT;
  });

  const createJWT = (payload: any) => {
    return jwt.signWithDID(Fixtures.DIDs.prismDIDDefault, payload, undefined, Fixtures.Keys.secp256K1.privateKey);
  };

  test("Should throw an error when nbf is not number in jwt credential", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      sub: undefined as any,
      nbf: false as any,
      exp: 2134564321,
      vc: {} as any
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid nbf in credential payload should be number");
  });

  test("Should throw an error when exp is not number in jwt credential", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      sub: undefined as any,
      exp: false as any,
      vc: {} as any
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid exp in credential payload should be number");
  });

  test("Should throw an error when sub is not string in jwt credential", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      sub: false as any,
      vc: {} as any
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid sub in credential payload should be string");
  });

  test("should throw an error when calling verifiableCredential on a presentation", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      vp: {} as any
    });

    const credential = JWTCredential.fromJWS(jwtString);

    expect(() => credential.verifiableCredential()).throws(InvalidCredentialError, "Invalid payload is not VC");
  });

  test("should throw an error when calling subject on a presentation", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      vp: {} as any
    });

    const credential = JWTCredential.fromJWS(jwtString);

    expect(() => credential.subject).throws(InvalidCredentialError, "Subject is only available in a VC");
  });

  test("should throw an error when calling presentation on a presentation", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      vp: {} as any
    });

    const credential = JWTCredential.fromJWS(jwtString);

    expect(() => credential.presentation()).throws(InvalidCredentialError, "Invalid payload is not VC");
  });

  test("Should throw an error when aud is not string in jwt presentation", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      aud: false as any,
      vp: {} as any
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid aud in presentation payload should be string");
  });

  test("Should throw an error when exp is not string in jwt presentation", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      exp: false as any,
      vp: {} as any
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid exp in presentation payload should be number");
  });

  test("Should throw an error when nbf is not string in jwt presentation", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      nbf: false as any,
      vp: {} as any
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid nbf in presentation payload should be number");
  });

  test("Should throw an error when vp is not object in jwt presentation", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      vp: false as any,
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid vp in presentation payload should be an object");
  });

  test("Should throw an error when nonce is not string in jwt presentation, not specifying is okey", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      nonce: false as any,
      vp: {} as any
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid nonce in presentation payload should be string");
  });

  test("Should throw an error when aud is not string in jwt credential", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      aud: false as any,
      vc: {} as any
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid aud in credential payload should be string");
  });

  test("Should throw an error when vc is not object in jwt credential", async () => {
    const jwtString = await createJWT({
      iss: Fixtures.DIDs.prismDIDDefault.toString(),
      vc: false as any
    });

    expect(() => JWTCredential.fromJWS(jwtString)).throws(InvalidCredentialError, "Invalid vc in credential payload should be an object");
  });
});
