import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../utils/logout";

const DesktopMenu = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let unsubcribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => {
      if (unsubcribeFromAuth) {
        unsubcribeFromAuth();
      }
    };
  }, []);

  return (
    <div>
      <h2 className="p-1">{sessionStorage.getItem("radioName")}</h2>

      <ul>
        <li className="mb-3">
          <NavLink
            end
            to="/radio"
            style={({ isActive }) => {
              return isActive ? { color: "#FFFC81" } : { color: "#fff" };
            }}
          >
            <div className="d-flex align-items-center">
              <span>
                <i className="bi bi-ui-radios-grid"></i>
              </span>

              <span className="ms-2">Dashboard</span>
            </div>
          </NavLink>
        </li>

        {/* announcements */}
        <li className="mb-3">
          <NavLink
            to="/radio/announcements"
            style={({ isActive }) => {
              return isActive ? { color: "#FFFC81" } : { color: "#fff" };
            }}
          >
            <div className="d-flex align-items-center liMenu">
              <span>
                <i className="bi bi-broadcast"></i>
              </span>

              <span className="ms-2">Announcements</span>
            </div>
          </NavLink>
        </li>

        {/* users */}
        <li className="mb-3">
          <NavLink
            to="/radio/users"
            style={({ isActive }) => {
              return isActive ? { color: "#FFFC81" } : { color: "#fff" };
            }}
          >
            <div className="d-flex align-items-center">
              <span>
                <i className="bi bi-person"></i>
              </span>

              <span className="ms-2">Users</span>
            </div>
          </NavLink>
        </li>
        <li className="mt-3 hover" onClick={(e) => handleLogout(e)}>
          <span>
            <i className="bi bi-box-arrow-left"></i>
          </span>
          <span className="ms-2">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
