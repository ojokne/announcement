import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="announcementWrapper mt-4">
      <Outlet />
    </div>
  );
};

export default Wrapper;
