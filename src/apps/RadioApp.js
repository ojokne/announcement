import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Radio/Dashboard";
import MenuAppBar from "../components/Radio/MenuAppBar";
import { Box } from "@mui/material";
import Death from "../components/Radio/Death";
import Corporate from "../components/Radio/Corporate";
import Business from "../components/Radio/Business";

function RadioApp() {
  return (
    <Box component="div">
      <MenuAppBar />
      <Routes>
        <Route path="/radio" element={<Dashboard />} />
        <Route path="/radio/death" element={<Death />} />
        <Route path="/radio/business" element={<Business />} />
        <Route path="/radio/corporate" element={<Corporate />} />
      </Routes>
    </Box>
  );
}

export default RadioApp;
