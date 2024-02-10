const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container text-white">
        <div className="p-2 m-2 text-center">
          <p> &copy; Kakebe Technologies {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
