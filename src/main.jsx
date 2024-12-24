import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Hash from "./Hash.jsx";
import Speed from "./Internet_Speed.jsx";
import App from "./App.jsx";
import Component from "./meter.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/meter" element={<Component />} />
        <Route path="/hash" element={<Hash />} />
        <Route path="/speed" element={<Speed />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
