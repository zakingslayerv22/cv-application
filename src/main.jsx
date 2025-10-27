import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./CVForm.css";
import "./CVDisplay.css";
import CVForm from "./components/CVForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CVForm />
  </StrictMode>
);
