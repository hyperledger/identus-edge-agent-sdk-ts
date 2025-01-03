import * as Domain from "../../domain";
import Apollo from "../../apollo";
import Castor from "../../castor";
import Pollux from "../../pollux";
import { OIDC } from "./types";
import { AuthorizationRequest } from "./protocols/AuthorizationRequest";
import { TokenResponse } from "./protocols/TokenResponse";
import { TokenRequest } from "./protocols/TokenRequest";
import { CredentialRequest } from "./protocols/CredentialRequest";
import { Startable } from "../../domain/protocols/Startable";
import { FetchApi } from "../helpers/FetchApi";
import { Task } from "../../utils/tasks";
import * as DIDfns from "../didFunctions";
import * as Tasks from "./tasks";
import * as Errors from "./errors";
import { JsonObj, expect, notNil } from "../../utils";

/**
 * https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html
 */

class Connection {
  constructor(
    public readonly clientId: string,
    public readonly issuerMeta: OIDC.IssuerMetadata,
    public readonly scopes: string[],
    public readonly tokenResponse: TokenResponse,
  ) {}
}

export class OIDCAgent extends Startable.Controller {
  private connections: Connection[] = [];
  public readonly pollux: Pollux;

  constructor(
    public readonly apollo: Domain.Apollo,
    public readonly castor: Domain.Castor,
    public readonly pluto: Domain.Pluto,
    public readonly seed?: Domain.Seed,
    public readonly api?: Domain.Api,
  ) {
    super();
    this.pollux = new Pollux(apollo, castor);
    this.seed = seed ?? apollo.createRandomSeed().seed;
    this.api = api ?? new FetchApi();
  }

  /**
   * Convenience initializer for Agent
   * allowing default instantiation, omitting all but the absolute necessary parameters
   * 
   * @param {Object} params - dependencies object
   * @param {Pluto} params.pluto - storage implementation
   * @param {Api} [params.api]
   * @param {Apollo} [params.apollo]
   * @param {Castor} [params.castor]
   * @param {Seed} [params.seed]
   * @returns {OIDCAgent}
   */
  static initialize(params: {
    pluto: Domain.Pluto;
    api?: Domain.Api;
    apollo?: Domain.Apollo;
    castor?: Domain.Castor;
    seed?: Domain.Seed;
  }): OIDCAgent {
    const pluto = params.pluto;
    const api = params.api ?? new FetchApi();
    const apollo = params.apollo ?? new Apollo();
    const castor = params.castor ?? new Castor(apollo);
    const seed = params.seed;
    const agent = new OIDCAgent(apollo, castor, pluto, seed, api);

    return agent;
  }

  protected async _start() {
    await this.pluto.start();
    await this.pollux.start();
  }

  protected async _stop() {
    await this.pollux.stop();

    if (notNil(this.pluto.stop)) {
      await this.pluto.stop();
    }
  }

  private runTask<T>(task: Task<T>): Promise<T> {
    const ctx = new Task.Context({
      Api: this.api,
      Apollo: this.apollo,
      Castor: this.castor,
      Pluto: this.pluto,
      Pollux: this.pollux,
      Seed: this.seed,
    });

    return ctx.run(task);
  }

  /**
   * 
   * @param credential 
   * @returns 
   */
  isCredentialRevoked(credential: Domain.Credential) {
    return this.pollux.isCredentialRevoked(credential);
  }

  /**
   * This method can be used by holders in order to disclose the value of a Credential
   * JWT are just encoded plainText
   * Anoncreds will really need to be disclosed as the fields are encoded.
   *
   * @param {Credential} credential
   * @returns {AttributeType}
   */
  revealCredentialFields(credential: Domain.Credential, fields: string[], linkSecret: string) {
    return this.pollux.revealCredentialFields(credential, fields, linkSecret);
  }

  /**
   * Asyncronously get all verifiable credentials
   *
   * @returns {Promise<Credential[]>}
   */
  verifiableCredentials(): Promise<Domain.Credential[]> {
    return this.pluto.getAllCredentials();
  }

  /**
   * Asyncronously create a new PrismDID
   *
   * @async
   * @param {string} alias
   * @param {DIDDocumentService[]} [services=[]]
   * @param {?number} [keyPathIndex]
   * @returns {Promise<DID>}
   */
  createNewPrismDID(
    alias: string,
    services: Domain.Service[] = [],
    keyPathIndex?: number
  ): Promise<Domain.DID> {
    const task = new DIDfns.CreatePrismDID({ alias, services, keyPathIndex });
    return this.runTask(task);
  }

  /**
   * Asyncronously sign a message with a DID
   *
   * @async
   * @param {DID} did
   * @param {Uint8Array} message
   * @returns {Promise<Signature>}
   */
  signWith(did: Domain.DID, message: Uint8Array): Promise<Domain.Signature> {
    const task = new DIDfns.SignWithDID({ did, message });
    return this.runTask(task);
  }


  // prepareRequestCredentialWithIssuer - its the correct function but currently coupled to didcomm, returning a RequestCredential instance
  // processIssuedCredentialMessage - same as above ^

  //=== specifc fns ===

  /**
   * handle sending the given request and return the appropriate response
   * 
   * @param request 
   */
  send(request: CredentialRequest): Promise<Domain.Credential>;
  send(request: TokenRequest): Promise<TokenResponse>;
  async send(request: unknown) {
    if (request instanceof CredentialRequest) {
      const task = new Tasks.HandleCredentialRequest({ request });
      return this.runTask(task);
    }

    if (request instanceof TokenRequest) {
      const task = new Tasks.HandleTokenRequest({ request });
      return this.runTask(task);
    }

    throw new Errors.InvalidRequest();
  }

  /**
   * validates the offer is correctly formed OIDC Credential Offer
   * returns the offer Typed as such
   * 
   * @param offer - json object
   * @returns {OIDC.CredentialOffer}
   */
  parseCredentialOffer(offer: string | JsonObj): Promise<OIDC.CredentialOffer> {
    const task = new Tasks.ParseCredentialOffer({ value: offer });
    return this.runTask(task);
  }

  /**
   * try to retrieve Issuer Metadata from the given URI
   * `/.well-known/openid-credential-issuer` will be appended to the uri
   * 
   * @link https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html#name-credential-issuer-metadata
   * 
   * @param uri
   * @returns {Promise<OIDC.IssuerMetadata>}
   */
  async fetchIssuerMetadata(uri: string): Promise<OIDC.IssuerMetadata> {
    const task = new Tasks.FetchIssuerMetadata({ uri });
    return this.runTask(task);
  }

  /**
   * try to retrieve Authorization Server Metadata from the give URI
   * `/.well-known/openid-configuration` will be appended to the URI
   * 
   * @param uri 
   * @returns {Promise<OIDC.AuthServerMetadata>}
   */
  async fetchAuthorizationServerMetadata(uri: string | URL): Promise<OIDC.AuthServerMetadata> {
    const task = new Tasks.FetchAuthServerMeta({ serverUri: uri, algorithm: "oidc" });
    const response = await this.runTask(task);
    return response.body;
  }

  /**
   * manage the creation of an Authorization Request
   * 
   * @param {OIDC.CredentialOffer} offer 
   * @param {OIDC.IssuerMetadata} issuerMeta 
   * @param {OIDC.AuthServerMetadata} authServerMeta 
   * @param clientId 
   * @param redirectUri 
   * @param scopes 
   * @returns {AuthorizationRequest}
   */
  createAuthorizationRequest(
    issuerMeta: OIDC.IssuerMetadata,
    authServerMeta: OIDC.AuthServerMetadata,
    clientId: string,
    redirectUri: string,
    opts?: {
      offer?: OIDC.CredentialOffer,
      scopes?: string[],
    }
  ): Promise<AuthorizationRequest> {
    const task = new Tasks.CreateAuthorizationRequest({
      clientId,
      issuerMeta,
      authServerMeta,
      redirectUri,
      offer: opts?.offer,
      scopes: opts?.scopes,
    });

    return this.runTask(task);
  }

  /**
   * manage fetching an Token from the Authorization Server
   * establishing a connection for future use
   * 
   * @param authorizationRequest 
   * @param callbackUrl 
   * @returns 
   */
  async handleTokenRequest(
    authorizationRequest: AuthorizationRequest,
    callbackUrl?: string | URL,
  ): Promise<TokenResponse> {
    const clientId = expect(authorizationRequest.params.get("client_id"), Errors.MissingClientId);
    const scope = expect(authorizationRequest.params.get("scope"), Errors.MissingScope);

    const tokenResponse = await this.runTask(
      new Tasks.ResolveTokenRequest({ authorizationRequest, callbackUrl })
    );

    this.connections.push(
      new Connection(
        clientId,
        authorizationRequest.issuerMeta,
        scope.split(" "),
        tokenResponse
      )
    );

    return tokenResponse;
  }

  /**
   * create a CredentialRequest for the given offer
   * a connection with the relevant Issuer must have already been established
   * 
   * @param offer 
   * @param issuerMeta 
   * @param clientId 
   * @returns 
   */
  createCredentialRequest(
    offer: OIDC.CredentialOffer,
    clientId: string,
  ) {
    const maybeConnection = this.connections.find(x =>
      x.clientId === clientId && x.issuerMeta.credential_issuer === offer.credential_issuer
    );
    const connection = expect(maybeConnection);

    const task = new Tasks.CreateCredentialRequest({
      clientId,
      offer,
      issuerMeta: connection.issuerMeta,
      tokenResponse: connection.tokenResponse,
    });
    return this.runTask(task);
  }

  /**
   * Convenience function 1 of 2
   * for Credential Issuance flow 
   * from Credential Offer to Authorization Request
   * 
   * steps
   *   - fetchIssuerMetadata
   *   - fetchAuthorizationServerMetadata
   *   - createAuthorizationRequest
   * 
   * @param offer 
   * @returns 
   */
  resolveCredentialOffer(
    offer: OIDC.CredentialOffer,
    clientId: string,
    redirectUri: string,
  ): Promise<AuthorizationRequest> {
    const task = new Tasks.ResolveCredentialOffer({ offer, clientId, redirectUri });
    return this.runTask(task);
  }

  /**
   * Convenience function 2 of 2 
   * for Credential Issuance flow 
   * from callbackUrl to Credential issuance
   * 
   * steps
   *   - handleTokenRequest
   *   - createCredentialRequest
   *   - storeCredential
   * 
   * @param authorizationRequest
   * @param callbackUrl 
   * @returns 
   */
  async resolveCredentialRequest(
    offer: OIDC.CredentialOffer,
    authorizationRequest: AuthorizationRequest,
    opts?: {
      callbackUrl?: string | URL;
      clientId?: string;
    }
  ) {
    const clientId = expect(
      opts?.clientId ?? authorizationRequest.params.get("client_id"),
      Errors.MissingClientId
    );

    await this.handleTokenRequest(authorizationRequest, opts?.callbackUrl);
    const credentialRequest = await this.createCredentialRequest(offer, clientId);
    const credential = await this.send(credentialRequest);
    await this.pluto.storeCredential(credential);

    return credential;
  }
}
