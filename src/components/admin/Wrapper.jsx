import DesktopMenu from "./DesktopMenu";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div>
      <div className="desktop-menu">
        <DesktopMenu />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Wrapper;
