import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/index.scss";
import Admin from "./apps/Admin.jsx";
import Announcement from "./apps/Announcement.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Admin />
      <Announcement />
    </BrowserRouter>
  </React.StrictMode>
);
