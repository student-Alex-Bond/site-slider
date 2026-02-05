import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SlideNumberProvider } from "./context/slide-number-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SlideNumberProvider>
      <App />
    </SlideNumberProvider>
  </StrictMode>
);
