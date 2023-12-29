import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();

  const [messageOpen, setMessageOpen] = useState(false);

  const handleMessageToggle = () => {
    setMessageOpen(!messageOpen);
  };

  const handleEditMessage = () => {
    navigate("/create/announcement_details");
  };

  const handleNext = () => {
    navigate("/create/checkout");
  };
  const handleBack = () => {
    navigate("/create/announcement_details");
  };

  return (
    <div className="border rounded m-2">
      <div className="d-flex justify-content-between align-items-center pt-3 m-3 border-bottom">
        <div>
          <h1 className="lead muted">Review</h1>
        </div>
        <span>3 of 3</span>
      </div>

      <div className="p-3 my-3">
        {/* name of radio station */}
        <div className="bg-light p-3 rounded d-flex justify-content-between">
          <span>Radio</span>
          <span>Unity FM</span>
        </div>

        {/* category of announcement */}
        <div className="p-3 d-flex justify-content-between">
          <span>Category</span>
          <span>Business</span>
        </div>

        {/* number of broadcasts */}
        <div className="bg-light p-3 rounded d-flex justify-content-between">
          <span>Number of Broadcasts</span>
          <span>3</span>
        </div>

        {/* message */}
        <div className="clickable" onClick={() => handleMessageToggle()}>
          <div className="d-flex justify-content-between">
            <span className="p-3">Message</span>
            <span>
              {messageOpen === true ? (
                <i className="bi bi-chevron-up text-primary fs-3"></i>
              ) : (
                <i className="bi bi-chevron-down text-primary fs-3"></i>
              )}
            </span>
          </div>
          {messageOpen === true ? (
            <div className="p-3 bg-light rounded mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              recusandae ex porro voluptatibus, deserunt harum culpa sed
              excepturi nihil placeat?
              <div>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => handleEditMessage()}
                >
                  Edit Message
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* amount */}
        <div className="bg-light p-3 rounded d-flex justify-content-between">
          <span>Amount</span>
          <div>
            <span className="text-muted">UGX </span>
            <strong>
              <span>10,000</span>
            </strong>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn btn-outline-danger"
            onClick={() => handleBack()}
          >
            Back
          </button>
          <button className="btn btn-primary" onClick={() => handleNext()}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
