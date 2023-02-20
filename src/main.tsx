import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// import "../bootstrap/dist/css/bootstrap.min.css";
// import "../bootstrap/dist/js/bootstrap.min.js";

import AppContext from "./context/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
