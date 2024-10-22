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
   * 
   */
  export interface Controller {
    /**
     * current status of the entity
     */
    state: State;

    /**
     * handle startup if entity is in STOPPED state
     * 
     * 
     * @returns {Promise<State>}
     */
    start(): Promise<State>;

    /**
     * handle teardown if entity is in RUNNING state
     * 
     * @returns {Promise<State>}
     */
    stop(): Promise<State>;
  }

  /**
   * handle the startup of a Controller
   * updating state lifecycle around running the delegate
   * 
   * @param obj 
   * @param delegate 
   * @returns 
   */
  export const start = async (obj: Pick<Controller, "state">, delegate: () => Promise<void>): Promise<State> => {
    if (obj.state === Startable.State.STOPPED) {
      obj.state = Startable.State.STARTING;
      await delegate();
      obj.state = Startable.State.RUNNING;
    }

    return obj.state;
  };

  /**
   * handle the teardown of a Controller
   * updating state lifecycle around running the delegate
   * 
   * @param obj 
   * @param delegate 
   * @returns 
   */
  export const stop = async (obj: Pick<Controller, "state">, delegate: () => Promise<void>): Promise<State> => {
    if (obj.state === Startable.State.RUNNING) {
      obj.state = Startable.State.STOPPING;
      await delegate();
      obj.state = Startable.State.STOPPED;
    }

    return obj.state;
  };

}
