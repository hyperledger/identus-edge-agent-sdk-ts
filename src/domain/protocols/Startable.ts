/**
 * Define controls for managing entity lifecycle.
 */
export namespace Startable {
  /**
   * states for a Startable entity
   */
  export enum State {
    STOPPED = "stopped",
    STARTING = "starting",
    RUNNING = "running",
    STOPPING = "stopping",
  }

  /**
   * define the structure of a Startable entity
   */
  export interface IController {
    /**
     * current status of the entity
     */
    state: State;
    /**
     * handle the startup of an entity
     * 
     * updates `state` according to lifecycle
     * 
     * @returns {Promise<State>}
     */
    start(): Promise<State>;
    /**
     * handle the teardown of an entity
     * 
     * updates `state` according to lifecycle
     * 
     * @returns {Promise<State>}
     */
    stop(): Promise<State>;
  }

  export abstract class Controller implements IController {
    public state = State.STOPPED;

    /**
     * internal method to define specific startup routine
     * 
     * used by `start()` internally
     * 
     * implement with `protected` to keep hidden from class interface
     */
    protected abstract _start(): Promise<void>;

    /**
     * internal method to define teardown routine
     * 
     * used by `stop()` internally
     * 
     * implement with `protected` to keep hidden from class interface
     */
    protected abstract _stop(): Promise<void>;

    async start(): Promise<State> {
      if (this.state === Startable.State.STOPPED) {
        this.state = Startable.State.STARTING;
        await this._start();
        this.state = Startable.State.RUNNING;
      }

      return this.state;
    }

    async stop(): Promise<State> {
      if (this.state === Startable.State.RUNNING) {
        this.state = Startable.State.STOPPING;
        await this._stop();
        this.state = Startable.State.STOPPED;
      }

      return this.state;
    }
  }
}
