import { useNavigate } from "react-router-dom";

const AnnouncementDetails = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/create/review");
  };
  const handleBack = () => {
    navigate("/create/personal_details");
  };
  return (
    <div className="border rounded m-2">
      <div className="d-flex justify-content-between align-items-center pt-3 m-3 border-bottom">
        <div>
          <h1 className="lead muted">Announcement Details</h1>
        </div>
        <span>2 of 3</span>
      </div>
      <div className="bg-light rounded p-3 m-3">
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

        {/* category of announcement */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select className="form-select" id="category" aria-label="Category">
            <option defaultValue="0">Open this select menu</option>
            <option value="1">Death</option>
            <option value="2">Business</option>
            <option value="3">Corporate</option>
          </select>
        </div>

        {/* number of times */}
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Number of broadcasts
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            placeholder="1"
            min={1}
          />
        </div>

        {/* announcement content */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Your message
          </label>
          <textarea className="form-control" id="message" rows="6"></textarea>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-danger w-25"
            onClick={() => handleBack()}
          >
            Back
          </button>
          <button className="btn btn-primary w-25" onClick={() => handleNext()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetails;
