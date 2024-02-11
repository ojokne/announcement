import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import problemPNG from "../../assets/family-think-svgrepo-com.png";
import solutionPNG from "../../assets/idea-svgrepo-com.png";

const Landing = () => {
  return (
    <div>
      <div className="fixed-top">
        <Header />
      </div>
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

      {/* problem statement */}
      <div className="container">
        <div className="d-flex justify-content-center m-4">
          <h2 className="border-bottom border-danger px-2 py-2">The Problem</h2>
        </div>
        <div className="problem-flex shadow-sm rounded bg-white">
          <div>
            <img src={problemPNG} alt="" />
          </div>
          <div className="d-flex flex-column">
            <ul>
              <li>
                <span>
                  The traditional method of announcement submission in Uganda is
                  outdated and cumbersome.
                </span>
              </li>
              <li>
                <span>
                  Individuals face challenges in disseminating their messages
                  efficiently to radios.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* solution */}
      <div className="container">
        <div className="d-flex justify-content-center m-4">
          <h2 className="border-bottom border-danger px-2 py-2">
            Our Solution
          </h2>
        </div>
        <div className="solution-flex shadow-sm bg-white rounded mb-4">
          <div className="d-flex flex-column">
            <ul>
              <li>
                <span>
                  <Link to="/create">
                    <span className="text-danger">
                      <strong>EchoCastUG</strong>
                    </span>
                  </Link>
                  , a cutting-edge solution developed by Kakebe Technologies.
                </span>
              </li>
              <li>
                <span>
                  This digital platform revolutionizes announcement submission
                  by enabling individuals from any corner of Uganda to
                  seamlessly submit their announcements to chosen radio stations
                  through a centralized, user-friendly portal
                </span>
              </li>

              <li>
                <span>
                  It eradicates the inefficiencies of the traditional process,
                  offering a streamlined, digital solution.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <img src={solutionPNG} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
