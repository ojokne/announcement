import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Radio/Dashboard";
import Death from "../components/Radio/Death";
import Corporate from "../components/Radio/Corporate";
import Business from "../components/Radio/Business";
import DeathPending from "../components/Radio/DeathPending";
import AnnouncementDetails from "../components/Radio/AnnouncementDetails";
import DeathComplete from "../components/Radio/DeathComplete";
import BusinessPending from "../components/Radio/BusinessPending";
import BusinessComplete from "../components/Radio/BusinessComplete";

function RadioApp() {
  return (
    <Routes>
      <Route path="/radio" element={<Dashboard />} />
      <Route path="/radio/death" element={<Death />} />
      <Route path="/radio/death/pending" element={<DeathPending />} />
      <Route path="/radio/death/complete" element={<DeathComplete />} />
      <Route path="/radio/business" element={<Business />} />
      <Route path="/radio/business/pending" element={<BusinessPending />} />
      <Route path="/radio/business/complete" element={<BusinessComplete />} />
      <Route path="/radio/corporate" element={<Corporate />} />

      {/* route for announcement details */}
      <Route path="/radio/announcement/:id" element={<AnnouncementDetails />} />
    </Routes>
  );
}

export default RadioApp;
