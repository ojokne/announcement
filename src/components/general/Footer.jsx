const Footer = () => {
  return (
    <div className="bg-black" style={{ marginBottom: 0, padding: 0 }}>
      <div className="container text-white">
        <div className="d-flex justify-content-center align-items-center flex-column pt-3">
          <span className="mb-2">WhatsApp</span>
          <span className="my-1">
            <a href="https://wa.me/256777676206">
              <i className="bi bi-whatsapp text-white"></i>
            </a>
          </span>
        </div>
        <div className="p-2 text-center">
          <p> &copy; Kakebe Technologies {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
