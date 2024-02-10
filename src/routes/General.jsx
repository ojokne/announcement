import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "../components/general/Login";
import Cancelled from "../components/Announcement/Cancelled";
import Success from "../components/Announcement/Success";
import About from "../components/general/About";
import Contact from "../components/general/Contact";
import Landing from "../components/general/Landing";

const General = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cancelled" element={<Cancelled />} />
      <Route path="/success" element={<Success />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default General;
