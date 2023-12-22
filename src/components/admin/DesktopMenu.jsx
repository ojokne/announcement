import { NavLink } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <div>
      <h2 className="p-1">Kakebe</h2>

      <ul>
        <li className="mb-3">
          <NavLink
            end
            to="/admin"
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

        <li className="mb-3">
          <NavLink
            to="/admin/radios"
            style={({ isActive }) => {
              return isActive ? { color: "#FFFC81" } : { color: "#fff" };
            }}
          >
            <div className="d-flex align-items-center">
              <span>
                <i className="bi bi-boombox"></i>
              </span>

              <span className="ms-2">Radios</span>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/announcements"
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
      </ul>
    </div>
  );
};

export default DesktopMenu;
