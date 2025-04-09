import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router"; 
import App from "./App.jsx";
import Homepage from "./pages/home.page";
import RootLayout from "./Layout/root-layout.layout";
import MainLayout from "./Layout/main.layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<RootLayout />}>
      <Route element={<MainLayout />}>
         <Route path="/" element={<Homepage />} />
      </Route>
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
