import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./CVForm.css";
// import App from "./App.jsx";
import CVForm from "./components/CVForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CVForm />
  </StrictMode>
);
