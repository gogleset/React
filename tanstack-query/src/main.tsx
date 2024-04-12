import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MyQueryClientProvider from "./setting/MyQueryClientProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyQueryClientProvider>
      <App />
    </MyQueryClientProvider>
  </React.StrictMode>
);
