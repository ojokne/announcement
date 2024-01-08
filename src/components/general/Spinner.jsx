const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70dvh" }}
    >
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
