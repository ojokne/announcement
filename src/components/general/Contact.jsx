import Footer from "../general/Footer";
import Header from "../general/Header";

const Contact = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="flex-grow-1">
        <Header />
        <div className="announcementWrapper mt-4">
          <div className="bg-white p-3 m-3 rounded shadow-sm d-flex flex-column">
            <div className="d-flex justify-content-center m-4 mb-3">
              <h2 className="border-bottom border-danger fs-5">
                Contact Kakebe technologies
              </h2>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column mb-4">
              <span>P.O BOX 330031 Lira City</span>
              <span>Plot 43 Obote Avenue. </span>
              <span>service@kakebe.com | 0777676206</span>
            </div>
            <div className="d-flex justify-content-center align-items-center w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15947.080919591906!2d32.8951863!3d2.239766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1770b1b582fa9409%3A0xc65a06dc8b9d178!2sKakebe%20Technologies!5e0!3m2!1sen!2sug!4v1707804626814!5m2!1sen!2sug"
                style={{ border: 0, height: 300 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
