import { select } from "@inquirer/prompts";
import { $ExitSignal, Config, Prompt } from "./basePrompt";
import { State } from "./state";

interface Choice {
  value: number;
  name: string;
}

/**
 * Prompt the user to select from a list of options
 * each of which is itself a Prompt
 */
export class SelectPrompt extends Prompt {
  public readonly _options: Prompt[] = [];
  public readonly config: { showExit?: true; } = {};

  constructor(
    public readonly _label: string | { (state: State): string; },
    private readonly optionsGetter?: (state: State) => Promise<Prompt[]>,
  ) {
    super();
  }

  async getOptions(state: State) {
    const gotten = await this.optionsGetter?.(state) ?? [];
    return this._options.concat(gotten);
  }

  async prompt(state: State, config: Config) {
    const options = await this.getOptions(state);
    const choices = options.map<Choice>((x, i) => ({ name: x.label(state), value: i }));

    if (this.config?.showExit) {
      choices.push({ name: "exit", value: -2 });
    }
    else {
      choices.push({ name: "back", value: -1 });
    }

    const value = await select({ choices, message: config.label });

    if (value === -2) {
      return $ExitSignal;
    }
    if (value === -1) {
      return null;
    }

    const handler = options[value];
    return handler;
    // return handler instanceof Controller ? handler : handler(app);
  }

  addOption(handler: Prompt) {
    this._options.push(handler);
    return this;
  }

  showExit() {
    this.config.showExit = true;
    return this;
  }
}
