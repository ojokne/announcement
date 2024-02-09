import { Outlet } from "react-router-dom";
import Header from "../general/Header";
import Footer from "../general/Footer";

const Wrapper = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="flex-grow-1">
        <Header />
        <div className="announcementWrapper mt-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
