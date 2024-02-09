const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container text-white">
        <div className="p-2 m-2 text-center">
          <p>copyright &copy; {new Date().getFullYear()} </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
