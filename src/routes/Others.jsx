import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "../components/Login";

const Others = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Others;
