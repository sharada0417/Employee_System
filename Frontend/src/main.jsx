import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; 
import { Provider } from "react-redux";                  // Added: Import Provider from react-redux
import App from "./App.jsx";
import Homepage from "./pages/home.page";
import RootLayout from "./Layout/root-layout.layout";
import MainLayout from "./Layout/main.layout";
import View from "./pages/View.page";
import Add from "./pages/Add.page";
import "./index.css";
import { store } from "./redux/store";                   // Added: Import your Redux store

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>                           {/* Added: Wrap your App with Provider */}
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/view" element={<View />} />
              <Route path="/add" element={<Add />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
