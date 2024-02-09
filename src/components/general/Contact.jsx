import Footer from "../general/Footer";
import Header from "../general/Header";

const Contact = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="flex-grow-1">
        <Header />
        <div className="announcementWrapper mt-4">
          <div className="bg-white p-3 m-3 rounded shadow-sm d-flex flex-column">
            <p>Contact Kakebe technologies</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
