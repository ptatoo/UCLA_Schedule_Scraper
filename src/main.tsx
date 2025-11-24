import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="454930251106-d7a2pe23cnivc8aehsehh4bkjbbvgna1.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
