type Task<T> = (signal: AbortSignal) => Promise<T>;

export class CancellableTask<T> {
  private period?: number;
  private controller: AbortController;
  private cancellationToken: Promise<T>;
  private timer?: NodeJS.Timeout;

  constructor(task: Task<T>, repeatEvery?: number) {
    this.controller = new AbortController();
    this.cancellationToken = new Promise<T>((resolve, reject) => {
      const onAbort = () => {
        this.controller.signal.removeEventListener("abort", onAbort);
        reject(new Error("Task was cancelled"));
      };
      this.controller.signal.addEventListener("abort", onAbort);
      if (repeatEvery !== undefined) {
        this.period = Math.max(repeatEvery, 10);
        this.loopOnTaskEvery(task, reject, this.controller.signal);
      } else {
        task(this.controller.signal).then(resolve).catch(reject);
      }
    });
  }

  private clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }

  private loopOnTaskEvery(task: Task<T>, reject: (reason?: Error) => void, signal: AbortSignal) {
    if (!this.controller.signal.aborted) {
      task(signal)
        .then(() => {
          this.clearTimer();
          this.timer = setTimeout(() => {
            this.loopOnTaskEvery(task, reject, signal);
          }, this.period);
        })
        .catch(reject);
    }
  }

  cancel() {
    this.clearTimer();
    this.controller.abort();
  }

  async then(): Promise<T> {
    return this.cancellationToken;
  }

  callback(fn: (response: T) => void) {
    if (this.period) {
      throw new Error("Can't call callback on non periodic cancellable task");
    }
    return this.cancellationToken.then((value) => fn(value));
  }
}
