import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "../components/radio/Dashboard";

const Radio = () => {
  return (
    <Routes>
      <Route path="/radio">
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Radio;
