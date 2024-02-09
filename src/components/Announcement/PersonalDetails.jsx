import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const navigate = useNavigate();

  // state to hold form data
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  // state to hold form errors
  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    // validate the form data
    if (name === "") {
      setNameError("Name is required");
      return;
    }

    if (contact === "") {
      setContactError("Contact is required");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("contact", contact);

    navigate("/create/announcement_details");
  };

  useEffect(() => {
    const name = localStorage.getItem("name");
    const contact = localStorage.getItem("contact");

    if (name) {
      setName(name);
    }

    if (contact) {
      setContact(contact);
    }
  },[])
  return (
    <div className="bg-white shadow-sm rounded m-2">
      <div className="d-flex justify-content-between align-items-center pt-3 m-3 border-bottom">
        <div>
          <h1 className="lead text-muted">Personal Details</h1>
        </div>
        <span className="text-primary">1 of 3</span>
      </div>
      <div className="rounded p-3 m-3">
        {/* user name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-muted">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
          />
          {/* error message from form validation */}
          {nameError && <span className="text-danger">{nameError}</span>}
        </div>

        {/* user contact*/}
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-muted">
            Contact
          </label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            placeholder="0771234567"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              setContactError("");
            }}
          />
          {/* error message from form validation */}
          {contactError && <span className="text-danger">{contactError}</span>}
        </div>

        <div className="d-flex justify-content-end align-items-center">
          <button
            className="btn btn-primary w-25"
            onClick={(e) => handleNext(e)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
