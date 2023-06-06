import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router-dom";
import ClientApp from "./apps/ClientApp";
import { ClientProvider } from "./context/client/ClientProvider";
import RadioApp from "./apps/RadioApp";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#6c757d",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />

        <ClientProvider>
          <ClientApp />
        </ClientProvider>
        <RadioApp />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
