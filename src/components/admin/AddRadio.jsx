const AddRadio = () => {
  return (
    <div className="mx-5 my-3">
      <h2 className="text-muted fs-3">Add Radio</h2>
      <div className=" bg-light rounded p-3 my-3">
        {/* radio station name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Example FM"
          />
        </div>

        {/* radio station frequency */}
        <div className="mb-3">
          <label htmlFor="frequency" className="form-label">
            Frequency
          </label>
          <input
            type="text"
            className="form-control"
            id="frequency"
            placeholder="90.0"
          />
        </div>

        {/* radio station email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="someone@example.com"
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-danger">Cancel</button>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddRadio;