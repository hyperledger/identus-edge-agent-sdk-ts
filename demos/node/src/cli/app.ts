import { Prompt } from ".";
import { rootMenu } from "./routing";
import { State } from "./state";

/**
 * demo app
 * handle the running of the app
 * routing, result handling, exiting, etc
 */
export class App {
  public route: Prompt[] = [];
  public state: State = {
    notifications: {},
    components: {},
  };

  async start() {
    let running = true;

    while (running) {
      running = await this.run();
    }

    // teardown
    await this.state.AgentDC?.stop();
  }

  private async run(): Promise<boolean> {
    let label = this.route
      .reduce<string[]>((acc, x) => acc.concat(x.label(this.state)), [])
      .join("/ ");

    if (this.state.AgentDC !== undefined) {
      const notify = Object.entries(this.state.notifications)
        .map(([key, value]) => value ? `New ${key}` : null)
        .filter(x => typeof x === "string");

      label = `${label}  ${notify.join(" | ")}`;
    }

    const config = { label };
    const control = this.route.at(-1) ?? rootMenu;
    const result = await control.run(this.state, config);

    if (result.next instanceof Prompt) {
      this.route.push(result.next);
    }

    if (result.back) {
      this.route.pop();
    }

    if (result.error) {
      this.route.pop();
      console.error("ERROR:");
      console.error(result.error.message);
      console.error(result.error.stack ?? "");
    }

    // handle exit teardown
    return !result.exit;
  }
}
