import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./hooks/useLanguage";
import "./styles/globals.css";

const redirectPath = window.sessionStorage.getItem("cb_spa_redirect");

if (redirectPath) {
  window.sessionStorage.removeItem("cb_spa_redirect");
  window.history.replaceState(null, "", redirectPath);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
