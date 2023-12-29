import { Routes, Route } from "react-router-dom";
import Wrapper from "../components/admin/Wrapper";
import Radios from "../components/admin/Radios";
import AddRadio from "../components/admin/AddRadio";
import Users from "../components/admin/Users";
import AddUser from "../components/admin/AddUser";
const Admin = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Wrapper />}>
        <Route path="radios" element={<Radios />} />
        <Route path="add_radio" element={<AddRadio />} />
        <Route path="users" element={<Users />} />
        <Route path="add_user" element={<AddUser />} />
      </Route>
    </Routes>
  );
};

export default Admin;
