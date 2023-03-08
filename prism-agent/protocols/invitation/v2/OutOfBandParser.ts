import { base64 } from "multiformats/bases/base64";
import { AgentError } from "../../../../domain/models/Errors";

export class OutOfBandParser {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static parseMessage(url: URL): string {
    const components = new URLSearchParams(url.search);
    if (!components) {
      throw new AgentError.InvalidURLError();
    }

    const message = components.get("_oob");
    if (!message) {
      throw new AgentError.InvalidURLError();
    }

    try {
      const dataJson = Buffer.from(base64.baseDecode(message)).toString();
      return dataJson;
    } catch (err) {
      throw new AgentError.InvalidURLError();
    }
  }
}
