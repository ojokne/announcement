import { Routes, Route } from "react-router-dom";
import Wrapper from "../components/admin/Wrapper";
import Radios from "../components/admin/Radios";
import AddRadio from "../components/admin/AddRadio";
import Users from "../components/admin/Users";
import AddUser from "../components/admin/AddUser";
import AnnouncementsWrapper from "../components/general/AnnouncementsWrapper";
import AnnouncementDetails from "../components/general/AnnouncementDetails";

const Admin = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Wrapper />}>
        <Route path="radios" element={<Radios />} />
        <Route path="add_radio" element={<AddRadio />} />
        <Route path="users" element={<Users />} />
        <Route path="add_user" element={<AddUser />} />
        <Route path="announcements" element={<AnnouncementsWrapper />} />
        <Route path="announcements/:id" element={<AnnouncementDetails />} />
      </Route>
    </Routes>
  );
};

export default Admin;
