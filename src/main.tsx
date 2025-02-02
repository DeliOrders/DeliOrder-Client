import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./renderer/Components/App";
import "./main.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
);
