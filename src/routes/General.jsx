import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "../components/general/Login";
import Cancelled from "../components/Announcement/Cancelled";

const General = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cancelled" element={<Cancelled />} />
    </Routes>
  );
};

export default General;
