import { CancellableTask } from "../helpers/Task";

export class JobManager {
  /**
   * An array with cancellable tasks, mainly used to store one or multiple didcomm
   * connections in storage implementation at the same time. All of them can be cancelled
   * despite they run asyncronously when the Edge agent stops
   *
   * @public
   * @type {CancellableTask<any>[]}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public cancellables: CancellableTask<any>[] = [];
  /**
   * Cancellable task used to listen for new messages, stopping the Agent should also stop this
   *  from running and destroy the instance of the task until agent is started again
   *
   * @public
   * @type {?CancellableTask<void>}
   */
  public fetchMessages?: CancellableTask<void>;


  /**
   * Stops all jobs
   */
  stop(): void {
    this.fetchMessages?.cancel();
    this.fetchMessages = undefined;

    while (this.cancellables.length > 0) {
      const [task] = this.cancellables.splice(0, 1);
      if (task) {
        task.cancel();
      }
    }
  }
}
