import { Plugin } from "../../../plugins";
import { JWT } from "./JWT";
import { SDJWT } from "./SDJWT";

declare module "../../../utils/tasks" {
  interface Extension extends IModule {}
}

type IModule = Plugin.ExtractExtension<typeof module>;

const module = new Plugin()
  .extend("JWT", new JWT())
  .extend("SDJWT", new SDJWT());

export default module;
