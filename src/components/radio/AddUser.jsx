import { useState} from "react";
import { Link } from "react-router-dom";
import Spinner from "../general/Spinner";
import {  doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const AddUser = () => {
  const [loading, setLoading] = useState(false);

  // state to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  // state to hold form errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  // state to hold alerts
  const [alert, setAlert] = useState({
    alert: false,
    type: "",
    message: "",
  });

  const handleAddUser = async (e) => {
    e.preventDefault();

    // validate the form data
    if (name === "") {
      setNameError("Name is required");
      return;
    }

    if (email === "") {
      setEmailError("Email is required");
      return;
    }

    if (contact === "") {
      setContactError("Contact is required");
      return;
    }

    let radioId = sessionStorage.getItem("radioId");
    let radioName = sessionStorage.getItem("radioName");

    try {
      setLoading(true);
      let password = "";
      for (let i = 0; i < 6; i++) {
        let randomNumber = parseInt((Math.random() * 1e17) % 10);
        password += randomNumber;
      }

      let user = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", user.user.uid), {
        email,
        name,
        contact,
        radioId,
        radioName,
        createdAt: new Date().toISOString(),
      });

      await sendPasswordResetEmail(auth, email);

      setAlert((prev) => {
        return {
          ...prev,
          alert: true,
          type: "success",
          message: "User added successfully",
        };
      });

      // reset the form
      setName("");
      setEmail("");
      setContact("");

      // stop loading spinner
      setLoading(false);

      // remove the alert after 10 seconds
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
      console.log(error);
      let message = error.code;

      switch (message) {
        case "auth/email-already-in-use": {
          setAlert({
            alert: true,
            type: "danger",
            message: "This email is already in use",
          });
          break;
        }
        default: {
          setAlert({
            alert: true,
            type: "danger",
            message: "Something went wrong, please try again",
          });
        }
      }

      // remove the alert after 10 seconds
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

  if (loading) return <Spinner />;

  return (
    <div className="mx-5 my-3">
      <h2 className="text-muted fs-3">Add User</h2>

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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
          />
          {/* error message from form validation */}
          {nameError && <span className="text-danger">{nameError}</span>}
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
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              setContactError("");
            }}
          />
          {/* error message from form validation */}
          {contactError && <span className="text-danger">{contactError}</span>}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <Link to="/radio/users">
            <button className="btn btn-outline-danger">Cancel</button>
          </Link>
          <button className="btn btn-primary" onClick={(e) => handleAddUser(e)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
