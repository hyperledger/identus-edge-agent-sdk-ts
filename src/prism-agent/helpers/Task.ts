type Task<T> = () => Promise<T>;

export class CancellableTask<T> {
  private period?: number;
  private controller: AbortController;
  private cancellationToken: Promise<T>;
  private timer?: NodeJS.Timeout;

  constructor(task: Task<T>, repeatEvery?: number) {
    this.controller = new AbortController();
    this.cancellationToken = new Promise<T>((resolve, reject) => {
      this.controller.signal.addEventListener("abort", () => {
        reject(new Error("Task was cancelled"));
      });
      if (repeatEvery !== undefined) {
        this.period = Math.max(repeatEvery, 10);
        this.loopOnTaskEvery(task, reject);
      } else {
        task().then(resolve).catch(reject);
      }
    });
  }

  private clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }

  private loopOnTaskEvery(task: Task<T>, reject: (reason?: Error) => void) {
    task()
      .then(() => {
        this.clearTimer();
        this.timer = setTimeout(() => {
          this.loopOnTaskEvery(task, reject);
        }, this.period);
      })
      .catch(reject);
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
