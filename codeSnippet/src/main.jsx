import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/user/ContextProvider";
import ComponentProvider from "./context/component/ComponentProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <ComponentProvider>
          <App />
        </ComponentProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
