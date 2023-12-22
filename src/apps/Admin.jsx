import { Routes, Route } from "react-router-dom";
import Wrapper from "../components/admin/Wrapper";
import Radios from "../components/admin/Radios";
const Admin = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Wrapper />}>
        <Route path="radios" element={<Radios />} />
      </Route>
    </Routes>
  );
};

export default Admin;
