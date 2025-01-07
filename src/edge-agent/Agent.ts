import * as Domain from "../domain";
import Apollo from "../apollo";
import Castor from "../castor";
import Pollux from "../pollux";
import { Startable } from "../domain/protocols/Startable";
import { AgentBackup } from "./Agent.Backup";
import { SignWithDID } from "./didFunctions/Sign";
import { CreatePrismDID } from "./didFunctions/CreatePrismDID";
import { FetchApi } from "./helpers/FetchApi";
import { Task } from "../utils/tasks";
import { notNil } from "../utils";

/**
 * Edge agent implementation
 *
 * @export
 * @class Agent
 * @typedef {Agent}
 */
export default class Agent extends Startable.Controller {
  public backup: AgentBackup;
  public readonly pollux: Pollux;

  /**
   * Creates an instance of Agent.
   *
   * @constructor
   * @param {Apollo} apollo
   * @param {Castor} castor
   * @param {Pluto} pluto
   * @param {Seed} [seed=apollo.createRandomSeed().seed]
   * @param {Api} [api=new FetchApi()]
   */
  constructor(
    public readonly apollo: Domain.Apollo,
    public readonly castor: Domain.Castor,
    public readonly pluto: Domain.Pluto,
    public readonly seed: Domain.Seed = apollo.createRandomSeed().seed,
    public readonly api: Domain.Api = new FetchApi(),
  ) {
    super();
    this.pollux = new Pollux(apollo, castor);
    this.backup = new AgentBackup(this);
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
   * @returns {Agent}
   */
  static initialize(params: {
    pluto: Domain.Pluto;
    api?: Domain.Api;
    apollo?: Domain.Apollo;
    castor?: Domain.Castor;
    seed?: Domain.Seed;
  }): Agent {
    const pluto = params.pluto;
    const api = params.api ?? new FetchApi();
    const apollo = params.apollo ?? new Apollo();
    const castor = params.castor ?? new Castor(apollo);
    const seed = params.seed ?? apollo.createRandomSeed().seed;
    const agent = new Agent(apollo, castor, pluto, seed, api);

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

  /**
   * This method can be used by holders in order to disclose the value of a Credential
   * JWT are just encoded plainText
   * Anoncreds will really need to be disclosed as the fields are encoded.
   *
   * @param {Credential} credential
   * @returns {AttributeType}
   */
  async revealCredentialFields(credential: Domain.Credential, fields: string[], linkSecret: string) {
    return this.pollux.revealCredentialFields(credential, fields, linkSecret);
  }

  isCredentialRevoked(credential: Domain.Credential) {
    return this.pollux.isCredentialRevoked(credential);
  }

  private runTask<T>(task: Task<T>) {
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
   * Asyncronously create a new PrismDID
   *
   * @async
   * @param {string} alias
   * @param {DIDDocumentService[]} [services=[]]
   * @param {?number} [keyPathIndex]
   * @returns {Promise<DID>}
   */
  async createNewPrismDID(
    alias: string,
    services: Domain.Service[] = [],
    keyPathIndex?: number
  ): Promise<Domain.DID> {
    const task = new CreatePrismDID({ alias, services, keyPathIndex });
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
  async signWith(did: Domain.DID, message: Uint8Array): Promise<Domain.Signature> {
    const task = new SignWithDID({ did, message });
    return this.runTask(task);
  }

  /**
   * Asyncronously get all verifiable credentials
   *
   * @returns {Promise<Credential[]>}
   */
  verifiableCredentials(): Promise<Domain.Credential[]> {
    return this.pluto.getAllCredentials();
  }
}
