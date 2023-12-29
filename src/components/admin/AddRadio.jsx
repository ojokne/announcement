const AddRadio = () => {
  return (
    <div className="mx-5 my-3">
      <h2 className="text-muted fs-3">Add Radio</h2>
      <div className=" bg-light rounded p-3 my-3">
        {/* radio station name */}
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Example FM"
          />
        </div>

        {/* radio station frequency */}
        <div class="mb-3">
          <label for="frequency" class="form-label">
            Frequency
          </label>
          <input
            type="text"
            class="form-control"
            id="frequency"
            placeholder="90.0"
          />
        </div>

        {/* radio station email */}
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
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
