import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PropsProvider, PropsContext } from "./providers/context.jsx";
import { PostProvider } from "./providers/PostContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PropsProvider>
        <App />
      </PropsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
