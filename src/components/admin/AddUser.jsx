const AddUser = () => {
  return (
    <div className="mx-5 my-3">
      <h2 className="text-muted fs-3">Add User</h2>
      <div className=" bg-light rounded p-3 my-3">
        {/* user name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="John Doe"
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

        {/* user contact*/}
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            placeholder="0771234567"
          />
        </div>

        {/* radio station user works at */}
        <div className="mb-3">
          <label htmlFor="radio" className="form-label">
            Radio
          </label>
          <select className="form-select" id="radio" aria-label="Radio">
            <option defaultValue="0">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-danger">Cancel</button>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
