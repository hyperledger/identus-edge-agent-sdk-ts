import * as figlet from "figlet";
import { App } from "./cli/app";

(async () => {
  const welcome = figlet.textSync("Node Demo");
  console.log(welcome);
  const app = new App();
  await app.start();
})();
