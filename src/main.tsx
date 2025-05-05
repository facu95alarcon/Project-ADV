import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { CssVarsProvider } from "@mui/joy";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CssVarsProvider theme={theme} defaultMode="dark">
      <App />
      </CssVarsProvider>
  </BrowserRouter>
);
