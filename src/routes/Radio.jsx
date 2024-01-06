import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "../components/radio/Dashboard";
import Wrapper from "../components/radio/Wrapper";
import Users from "../components/radio/Users";
import AddUser from "../components/radio/AddUser";

const Radio = () => {
  return (
    <Routes>
      <Route path="/radio" element={<Wrapper />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="add_user" element={<AddUser />} />
      </Route>
    </Routes>
  );
};

export default Radio;
