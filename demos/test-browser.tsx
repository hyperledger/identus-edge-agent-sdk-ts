import React from "react";
import ReactDOM from "react-dom/client";
import App from "./browser/App";

console.log("Something from here");

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (module.hot) {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  module.hot.accept('./browser/App', () => {
    try {
      // Any code that triggers a HMR update
    } catch (error) {
      console.error('Error in the hot update:', error);
    }
  });
}
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <App/>
);

// import * as SDK from "..";
// import { createTestScenario } from "./createTestScenario";

// (async () => {
//   const body = document.querySelector("body");
//   const Fabio = SDK.Domain.DID.fromString(
//     "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9hbGljZS5kaWQuZm1ncC5hcHAvIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ"
//   );
//   const mediatorDID = SDK.Domain.DID.fromString(
//     "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
//   );

//   const { seed, agent } = createTestScenario(
//     mediatorDID,
//     `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0`
//   );

//   agent.onMessage((messages) => {
//     console.log(messages);
//   });

//   await agent.start();

//   if (body) {
//     body.innerHTML = `<h1>Welcome to AtalaPrism</h1><p>Agent ${
//       agent.state
//     } correctly.</p><p>Your mnemonics are <b>${seed.mnemonics.join(
//       ", "
//     )}</b></p>`;
//   }
// })();
