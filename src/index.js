import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalCtxProvider } from "./GlobalCtx";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <GlobalCtxProvider>
      <App />
    </GlobalCtxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
