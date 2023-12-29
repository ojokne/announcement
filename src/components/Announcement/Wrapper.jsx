import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="announcementWrapper">
      <Outlet />
    </div>
  );
};

export default Wrapper;
