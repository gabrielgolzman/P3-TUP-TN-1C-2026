import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthenticationContextProvider } from "./components/services/auth/AuthenticationContextProvider.jsx";
import { ThemeContextProvider } from "./components/services/theme/ThemeContextProvider.jsx";
import "./index.css";
import TranslationContextProvider from "./components/services/translation/TranslationContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <TranslationContextProvider>
    <ThemeContextProvider>
      <AuthenticationContextProvider>
        <App />
      </AuthenticationContextProvider>
    </ThemeContextProvider>
  </TranslationContextProvider>
  // </StrictMode>,
);
