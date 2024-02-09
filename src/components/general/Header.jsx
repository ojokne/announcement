import { Link } from "react-router-dom";
import logo from "../../assets/kakebe-logo.png";

const Header = () => {
  return (
    <div className="bg-dark p-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={logo}
              className="rounded-circle"
              alt="Kakebe logo"
              width={40}
            />

            <h1 className="lead ms-2 text-white">Kakebe</h1>
          </div>
          <div>
            <Link to="/login" className="px-3 text-white">
              Login
            </Link>
            <Link to="/about" className="px-3 text-white">
              About
            </Link>
            <Link to="/contact" className="px-3 text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
