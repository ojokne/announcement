import Footer from "../general/Footer";
import Header from "../general/Header";

const Success = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="flex-grow-1">
        <Header />
        <div className="announcementWrapper mt-4 mx-3">
          <div className="bg-white p-3 m-3 rounded shadow-sm d-flex justify-content-center align-items-center flex-column">
            <span>
              <i className="bi bi-check-circle text-success fs-1"></i>
            </span>
            <span className="text-muted">Your payment was successful</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
