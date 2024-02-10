import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../general/Spinner";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

const AnnouncementDetails = () => {
  const navigate = useNavigate();
  const [radios, setRadios] = useState([]);
  const [loading, setLoading] = useState(true);

  // state to hold form data
  const [radio, setRadio] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  // state to hold form errors
  const [radioError, setRadioError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    // validate the form data
    if (radio === "") {
      setRadioError("Radio is required");
      return;
    }

    if (radio === "Open this select menu") {
      setRadioError("Radio is required");
      return;
    }

    if (category === "") {
      setCategoryError("Category is required");
      return;
    }

    if (category === "Open this select menu") {
      setCategoryError("Radio is required");
      return;
    }

    if (number === "" || number === "0") {
      setNumberError("Number of broadcasts is required");
      return;
    }

    if (message === "") {
      setMessageError("Message is required");
      return;
    }

    let [radioId, radioName] = radio.split("+");
    let [categoryId, categoryName] = category.split("+");

    localStorage.setItem("radioId", radioId);
    localStorage.setItem("radioName", radioName);

    localStorage.setItem("categoryId", categoryId);
    localStorage.setItem("categoryName", categoryName);

    localStorage.setItem("number", number);
    localStorage.setItem("message", message);

    navigate("/create/review");
  };
  const handleBack = () => {
    navigate("/create");
  };

  useEffect(() => {
    const fetchRadios = async () => {
      const q = query(
        collection(db, "radioStations"),
        where("status", "==", "active")
      );
      const querySnapshot = await getDocs(q);
      setRadios([]);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let radio = {
          id: doc.id,
          ...doc.data(),
        };
        setRadios((prev) => [...prev, radio]);
      });

      setLoading(false);
    };

    let message = localStorage.getItem("message");
    let number = localStorage.getItem("number");

    if (message) {
      setMessage(message);
    }

    if (number) {
      setNumber(number);
    }

    fetchRadios();
    return () => {
      setRadios([]);
      setLoading(true);
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="bg-white shadow-sm rounded m-2 mx-3">
      <div className="d-flex justify-content-between align-items-center pt-3 m-3 border-bottom">
        <div>
          <h1 className="lead text-muted">Announcement Details</h1>
        </div>
        <span className="text-primary">2 of 3</span>
      </div>
      <div className="rounded px-3 pb-3 mx-3 mb-3">
        {/* radio station user works at */}
        <div className="mb-3">
          <label htmlFor="radio" className="form-label">
            Radio
          </label>
          <select
            className="form-select"
            id="radio"
            aria-label="Radio"
            value={radio}
            onChange={(e) => {
              setRadio(e.target.value);
              setRadioError("");
            }}
          >
            <option defaultValue="0">Open this select menu</option>
            {radios.map((radio) => {
              return (
                <option key={radio.id} value={`${radio.id + "+" + radio.name}`}>
                  {radio.name}
                </option>
              );
            })}
          </select>

          {/* error message from form validation */}
          {radioError && <span className="text-danger">{radioError}</span>}
        </div>

        {/* category of announcement */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            aria-label="Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCategoryError("");
            }}
          >
            <option defaultValue="0">Open this select menu</option>
            <option value="1+Death">Death</option>
            <option value="2+Business">Business</option>
            <option value="3+Corporate">Corporate</option>
          </select>
          {/* error message from form validation */}
          {categoryError && (
            <span className="text-danger">{categoryError}</span>
          )}
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
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
              setNumberError("");
            }}
          />
          {/* error message from form validation */}
          {numberError && <span className="text-danger">{numberError}</span>}
        </div>

        {/* announcement content */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Your message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="6"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setMessageError("");
            }}
          ></textarea>
          {/* error message from form validation */}
          {messageError && <span className="text-danger">{messageError}</span>}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-danger w-25"
            onClick={() => handleBack()}
          >
            Back
          </button>
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

export default AnnouncementDetails;
