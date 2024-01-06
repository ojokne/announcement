import { NavLink } from "react-router-dom";

const DesktopMenu = () => {
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
      </ul>
    </div>
  );
};

export default DesktopMenu;
