import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/create/announcement_details");
  };
  return (
    <div className="border rounded m-2">
      <div className="d-flex justify-content-between align-items-center pt-3 m-3 border-bottom">
        <div>
          <h1 className="lead muted">Personal Details</h1>
        </div>
        <span>1 of 3</span>
      </div>
      <div className=" bg-light rounded p-3 m-3">
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

        {/* user contact*/}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Contact
          </label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            placeholder="0771234567"
          />
        </div>

        <div className="d-flex justify-content-end align-items-center">
          <button className="btn btn-primary w-25" onClick={() => handleNext()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
