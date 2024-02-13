import { Link } from "react-router-dom";
import Footer from "../general/Footer";
import Header from "../general/Header";

const About = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="flex-grow-1">
        <Header />
        <div className="announcementWrapper mt-4">
          <div className="bg-white p-3 m-3 rounded shadow-sm d-flex flex-column">
            <div className="d-flex justify-content-center m-4">
              <h2 className="border-bottom border-danger fs-5">
                About Kakebe technologies
              </h2>
            </div>

            <p>
              <a href="kakebe.tech">
                <span className="text-danger">
                  <strong>Kakebe Technologies </strong>
                </span>
              </a>
              is youth led company, a market leader in offering science and
              technological services to the public in an efficient way for
              better everyday life with offices in Lira city.
            </p>

            <div className="d-flex justify-content-center m-4">
              <h2 className="border-bottom border-danger fs-5">
                Whe EchocastUg?
              </h2>
            </div>
            <p>
              The traditional method of announcement submission in Uganda is
              outdated and cumbersome. Individuals face challenges in
              disseminating their messages efficiently to radios.
            </p>

            <div className="d-flex justify-content-center m-4">
              <h2 className="border-bottom border-danger fs-5">
                About the EchocastUg App
              </h2>
            </div>
            <p>
              EchoCastUG, a cutting-edge solution developed by Kakebe
              Technologies a digital platform revolutionizes announcement
              submission by enabling individuals from any corner of Uganda.
              Users seamlessly submit their announcements to chosen radio
              stations through a centralized, user-friendly portal eradicating
              the inefficiencies of the traditional process, offering a
              streamlined, digital solution.
            </p>
            <div className="d-flex justify-content-center m-4">
              <Link to="/create">
                <button className="btn btn-danger">Get started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
