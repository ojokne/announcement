import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "../components/general/Login";
import Cancelled from "../components/Announcement/Cancelled";
import Success from "../components/Announcement/Success";

const General = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cancelled" element={<Cancelled />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default General;
