import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the App component with ThemeProvider */}
    <ThemeProvider>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
