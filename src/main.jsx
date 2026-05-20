import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthenticationContextProvider } from "./components/services/auth/AuthenticationContextProvider.jsx";
import { ThemeContextProvider } from "./components/services/theme/ThemeContextProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ThemeContextProvider>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </ThemeContextProvider>
  // </StrictMode>,
);
