import { Plugin } from "../../../plugins";
import module from "./Plugin";

/**
 * Extract any Context extensions from Plugin
 */
type IModule = Plugin.ExtractExtension<typeof module>;

/**
 * Declaration Merge to make TS aware
 */
declare module "../../../utils/tasks" {
  interface Extension extends IModule {}
}

export default module;
