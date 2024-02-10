import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Landing = () => {
  return (
    <div>
      <div className="fixed-top">
        <Header />
      </div>
      <div className="d-flex flex-column vh-100">
        <div className="flex-grow-1">
          <div className="landing-page">
            <div className="landing-page-overlay">
              <div className="landing-page-content">
                <h1 className="mx-2">Empowering Voices, Amplifying Reach</h1>
                <Link to="/create">
                  <button className="btn btn-danger text-white btn-lg">
                    Send Announcment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
