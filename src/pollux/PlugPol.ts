import * as Domain from "../domain";
import { expect, isObject, JsonObj } from "../utils";
import { Task } from "../utils/tasks";
import { Pollux } from "./types";
import { PresentationRequest } from "./models/PresentationRequest";
import { Plugin as ACPlugin } from "./plugins/anoncreds/Plugin";
import { Plugin as JWTPlugin } from "./plugins/oea/jwt/Plugin";
import { Plugin as SDJWTlugin } from "./plugins/oea/sdjwt/Plugin";

export class PlugPol implements Domain.Pollux {
  private readonly plugins: Pollux.Plugin[] = [
    ACPlugin,
    JWTPlugin,
    SDJWTlugin,
  ];

  constructor(
    private readonly dependencies: Task.Context.Deps
  ) {}

  async start() {}

  register(plugin: Pollux.Plugin) {
    this.plugins.push(plugin);
  }

  async run(
    type: Domain.CredentialType,
    taskName: string,
    args: JsonObj,
    version?: string,
  ) {
    const plugins = this.plugins.filter(x => x.type === type);
    // ? find best version
    const plugin = plugins.at(0);
    const ctxCtor = plugin?.context ?? Task.Context;
    const taskCtor = expect(
      plugin?.tasks.find(x => x.name === taskName),
      `${taskName} not found`
    );

    const ctx = new ctxCtor(this.dependencies);
    // ctx.with(plugin?.contextProps);
    const task = new taskCtor(args);
    const result = await ctx.run(task);
    return result;
  }

  async createPresentationProof(presentationRequest: PresentationRequest<any, any>, credential: Domain.Credential): Promise<string> {
    const args = { credential, presentationRequest };
    const result = await this.run(credential.credentialType, "CreatePresentationProof", args);
    return result;
  }

  // ? no such thing as PresentationDefinitionRequest - it's a PresentationRequest...
  async createPresentationDefinitionRequest<T extends Domain.CredentialType>(type: T, claims: Domain.PresentationClaims<T>): Promise<Domain.PresentationDefinitionRequest<T>> {
    const args = { claims };
    const result = await this.run(type, "CreatePresentationRequest", args);
    return result;
  }
  // async createPresentationRequest(type: Domain.CredentialType, claims: Domain.PresentationClaims): Promise<Domain.PresentationDefinitionRequest<T>> {
  //   const args = { claims };
  //   const result = await this.run(type, "CreatePresentationRequest", args);
  //   return result;
  // }

  // TODO return types again
  async createPresentationSubmission(
    presentationDefinition: unknown,
    credential: Domain.Credential,
    privateKey: unknown
  ): Promise<any> {
    const args = { presentationDefinition, credential, privateKey };
    const result = await this.run(credential.credentialType, "CreatePresentationSubmission", args);
    return result;
  }

  async isCredentialRevoked(credential: Domain.Credential): Promise<boolean> {
    const args: Pollux.IsCredentialRevoked.Args = { credential };
    const result = await this.run(credential.credentialType, "IsCredentialRevoked", args);
    return result;
  }

  // TODO need to change to have `type: CredentialType` parameter
  async parseCredential(value: Uint8Array, options: JsonObj = {}): Promise<Domain.Credential> {
    const args = { value, ...options };
    const type = options.type ?? Domain.CredentialType.JWT;
    const result = await this.run(type, "ParseCredential", args);
    return result;
  }

  // TODO return type is custom to Protocol/Credential type
  async processCredentialOffer(offer: unknown, options: JsonObj): Promise<any> {
    const args = { offer, ...options };
    const type = options?.type ?? Domain.CredentialType.JWT;
    const result = await this.run(type, "ProcessCredentialOffer", args);
    return result;
  }

  async revealCredentialFields(credential: Domain.Credential, fields: string[]): Promise<JsonObj> {
    const args: Pollux.RevealCredentialFields.Args = { credential, fields };
    const result = await this.run(credential.credentialType, "RevealCredentialFields", args);

    if (isObject(result)) {
      return result;
    }

    throw new Error();
  }

  // verifyPresentationSubmission(presentationSubmission: Domain.PresentationSubmission<Domain.CredentialType.JWT>, options?: Domain.Pollux.verifyPresentationSubmission.options.JWT): Promise<boolean>;
  // verifyPresentationSubmission(presentationSubmission: Domain.PresentationSubmission<Domain.CredentialType.AnonCreds>, options?: Domain.Pollux.verifyPresentationSubmission.options.Anoncreds): Promise<boolean>;
  // verifyPresentationSubmission(presentationSubmission: Domain.PresentationSubmission, options?: Domain.Pollux.verifyPresentationSubmission.options.JWT | Domain.Pollux.verifyPresentationSubmission.options.Anoncreds): Promise<boolean>;
  verifyPresentationSubmission(presentationSubmission: unknown, options?: unknown): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

