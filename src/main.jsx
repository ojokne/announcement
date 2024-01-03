import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/index.scss";
import Admin from "./routes/Admin.jsx";
import Announcement from "./routes/Announcement.jsx";
import Others from "./routes/Others.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Admin />
      <Announcement />
      <Others />
    </BrowserRouter>
  </React.StrictMode>
);
