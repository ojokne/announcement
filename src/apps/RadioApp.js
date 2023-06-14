import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Radio/Dashboard";
import Death from "../components/Radio/Death";
import Corporate from "../components/Radio/Corporate";
import Business from "../components/Radio/Business";

function RadioApp() {
  return (
    <Routes>
      <Route path="/radio" element={<Dashboard />} />
      <Route path="/radio/death" element={<Death />} />
      <Route path="/radio/business" element={<Business />} />
      <Route path="/radio/corporate" element={<Corporate />} />
    </Routes>
  );
}

export default RadioApp;
