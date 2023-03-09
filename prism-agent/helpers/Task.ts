type Task<T> = () => Promise<T>;

export class CancellableTask<T> {
  private controller: AbortController;
  private cancellationToken: Promise<T>;

  constructor(task: Task<T>) {
    this.controller = new AbortController();
    // eslint-disable-next-line no-async-promise-executor
    this.cancellationToken = new Promise<T>(async (resolve, reject) => {
      this.controller.signal.addEventListener("abort", () => {
        reject(new Error("Task was cancelled"));
      });
      task().then(resolve).catch(reject);
    });
  }

  cancel() {
    this.controller.abort();
  }

  async then(): Promise<T> {
    return this.cancellationToken;
  }
}
