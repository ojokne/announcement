import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import Spinner from "../general/Spinner";
import { useNavigate } from "react-router-dom";

const AddRadio = () => {
  const navigate = useNavigate();

  // loading state
  const [loading, setLoading] = useState(false);

  // state to hold form data
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [email, setEmail] = useState("");
  const [district, setDistrict] = useState("");

  // state to hold form errors
  const [nameError, setNameError] = useState("");
  const [frequencyError, setFrequencyError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [districtError, setDistrictError] = useState("");

  // state to hold alerts
  const [alert, setAlert] = useState({
    alert: false,
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate the form data
    if (name === "") {
      setNameError("Name is required");
      return;
    }

    if (frequency === "") {
      setFrequencyError("Frequency is required");
      return;
    }

    if (email === "") {
      setEmailError("Email is required");
      return;
    }

    if (district === "") {
      setDistrictError("District is required");
      return;
    }

    let radioName = name[0].toUpperCase() + name.slice(1);
    let districtName = district[0].toUpperCase() + district.slice(1);

    try {
      setLoading(true);

      // send the data to firebase
      await addDoc(collection(db, "radioStations"), {
        name: radioName,
        frequency,
        email,
        district: districtName,
        status: "active",
        createdAt: new Date().toISOString(),
      });

      setAlert((prev) => {
        return {
          ...prev,
          alert: true,
          type: "success",
          message: "Radio station added successfully",
        };
      });

      // reset the form
      setName("");
      setFrequency("");
      setEmail("");
      setDistrict("");

      // stop the spinner
      setLoading(false);

      // remove the alert after 3 seconds
      setTimeout(() => {
        setAlert((prev) => {
          return {
            ...prev,
            alert: false,
          };
        });
      }, 10000);
    } catch (error) {
      setLoading(false);
      console.log(e);
      setAlert((prev) => {
        return {
          ...prev,
          alert: true,
          type: "danger",
          message: "Something went wrong",
        };
      });
      // remove the alert after 3 seconds
      setTimeout(() => {
        setAlert((prev) => {
          return {
            ...prev,
            alert: false,
          };
        });
      }, 10000);
    }
  };

  const handleCancel = () => {
    setName("");
    setFrequency("");
    setEmail("");
    navigate("/admin/radios");
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="mx-5 my-3">
      <h2 className="text-muted fs-3">Add Radio</h2>

      {/* alert message */}
      {alert.alert === true ? (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : null}
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
          />

          {/* error message from form validation */}
          {nameError && <span className="text-danger">{nameError}</span>}
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
            value={frequency}
            onChange={(e) => {
              setFrequency(e.target.value);
              setFrequencyError("");
            }}
          />

          {/* error message from form validation */}
          {frequencyError && (
            <span className="text-danger">{frequencyError}</span>
          )}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />

          {/* error message from form validation */}
          {emailError && <span className="text-danger">{emailError}</span>}
        </div>

        {/* district */}
        <div className="mb-3">
          <label htmlFor="district" className="form-label">
            District
          </label>
          <input
            type="text"
            className="form-control"
            id="district"
            placeholder="Abim"
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              setDistrictError("");
            }}
          />

          {/* error message from form validation */}
          {districtError && (
            <span className="text-danger">{districtError}</span>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-danger"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRadio;
