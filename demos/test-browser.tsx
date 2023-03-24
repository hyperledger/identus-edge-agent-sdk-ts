import React from "react";
import ReactDOM from "react-dom/client";
import App from "./browser/App";

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