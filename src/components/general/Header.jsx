import { Link } from "react-router-dom";
import logo from "../../assets/kakebe-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [style, setStyle] = useState("d-none");

  // function to show the menu
  const showMenu = () => {
    setStyle("showSmallMenuItems");
  };

  // function to hide the menu
  const hideMenu = () => {
    setStyle("hideSmallMenuItems");
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-black p-2">
      {/* header large screens */}
      <div className="d-none d-lg-block container">
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="d-flex align-items-center hover"
            onClick={() => navigateHome()}
          >
            <img
              src={logo}
              className="rounded-circle"
              alt="Kakebe logo"
              width={40}
            />

            <h1 className="lead ms-2 text-white">Kakebe Technologies</h1>
          </div>
          <div>
            <Link
              to="/login"
              className="px-3 text-white menu-item px-3 py-2 rounded"
            >
              Login
            </Link>
            <Link
              to="/create"
              className="px-3 text-white menu-item px-3 py-2 rounded"
            >
              Send Announcement
            </Link>
            <Link
              to="/about"
              className="px-3 text-white menu-item px-3 py-2 rounded"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 text-white menu-item px-3 py-2 rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* header for small screesn */}
      <div className="d-lg-none py-2">
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="d-flex align-items-center hover"
            onClick={() => navigateHome()}
          >
            <img
              src={logo}
              className="rounded-circle"
              alt="Kakebe logo"
              width={40}
            />

            <h1 className="lead ms-2 text-white">Kakebe Technologies</h1>
          </div>

          <div onClick={() => showMenu()}>
            <span>
              <i className="bi bi-list text-white fs-1"></i>
            </span>
          </div>

          {/* small screen menu items */}
          <div
            className={`d-flex flex-column  bg-black p-3 smallMenuItems ${style}`}
          >
            <div className="d-flex justify-content-between">
              <div
                className="d-flex align-items-center"
                onClick={() => navigateHome()}
              >
                <img
                  src={logo}
                  className="rounded-circle"
                  alt="Kakebe logo"
                  width={40}
                />

                <h1 className="lead ms-2 text-white">Kakebe Technologies</h1>
              </div>
              <span onClick={() => hideMenu()}>
                <i className="bi bi-x-lg fs-1 text-white"></i>
              </span>
            </div>
            <div className="d-flex flex-column mt-4">
              <Link
                to="/login"
                className="p-3 text-white menu-item px-3 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="/create"
                className="px-3 text-white menu-item px-3 py-2 rounded"
              >
                Send Announcement
              </Link>
              <Link
                to="/about"
                className="p-3 text-white menu-item px-3 py-2 rounded"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="p-3 text-white menu-item px-3 py-2 rounded"
              >
                Contact
              </Link>

              <span className="text-white px-3 fixed-bottom m-3">
                &copy; Kakebe Technologies {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
