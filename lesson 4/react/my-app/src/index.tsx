import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorizarion from "./components/authorization/Authorizarion";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Authorizarion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
