import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

if (process.env.NODE_ENV === "development") {
  import("mocks").then(({ initMockServer }) => initMockServer());
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
