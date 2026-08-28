import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { WebsiteProvider } from "./context/WebsiteContext";

// ==================== INITIALIZATION ====================
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <WebsiteProvider>
        <App />
      </WebsiteProvider>
    </BrowserRouter>
  </React.StrictMode>
);