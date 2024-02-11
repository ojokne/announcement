const Footer = () => {
  return (
    <div className="bg-black" style={{ marginBottom: 0,padding:0 }}>
      <div className="container text-white">
        <div className="p-2 text-center">
          <p className="m-3 p-3"> &copy; Kakebe Technologies {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
