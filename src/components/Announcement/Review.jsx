import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinner from "../general/Spinner";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

const Review = () => {
  const navigate = useNavigate();

  const [messageOpen, setMessageOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // retieve form data from local storage
  const name = localStorage.getItem("name");
  const contact = localStorage.getItem("contact");
  const radioName = localStorage.getItem("radioName");
  const radioId = localStorage.getItem("radioId");
  const categoryId = localStorage.getItem("categoryId");
  const categoryName = localStorage.getItem("categoryName");
  const number = localStorage.getItem("number");
  const message = localStorage.getItem("message");

  // state to hold amount
  const [amount, setAmount] = useState(0);

  // state to hold alerts
  const [alert, setAlert] = useState({
    alert: false,
    message: "",
  });

  const handleMessageToggle = () => {
    setMessageOpen(!messageOpen);
  };

  const handleEditMessage = () => {
    navigate("/create/announcement_details");
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // clear alerts
      setAlert((prev) => {
        return {
          ...prev,
          alert: false,
          message: "",
        };
      });

      // store details in firebase
      let announcement = await addDoc(collection(db, "announcements"), {
        clientName: name,
        clientContact: contact,
        radioId: radioId,
        radioName: radioName,
        categoryId: categoryId,
        categoryName: categoryName,
        numberOfBroadcasts: number,
        message: message,
        amount: amount,
        createdAt: new Date().toISOString(),
        transactionStatus: "pending",
        broadcastStatus: "pending",
      });

      localStorage.setItem("announcementId", announcement.id);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setAlert((prev) => {
        return {
          ...prev,
          alert: true,
          message: (
            <span>
              An error occured while processing your request, please try again
              later or contact our support team
            </span>
          ),
        };
      });
    }
    navigate("/create/checkout");
  };
  const handleBack = () => {
    navigate("/create/announcement_details");
  };

  useEffect(() => {
    const percentage = 0.1;
    if (
      name == null ||
      contact == null ||
      radioId == null ||
      radioName == null ||
      categoryId == null ||
      categoryName == null ||
      number == null ||
      message == null
    ) {
      setAlert((prev) => {
        return {
          ...prev,
          alert: true,
          message: (
            <span>
              Unforunately, we are not able to recover some of the data you
              entered, you will be redirected to edit or
              <Link to="/create" className="">
                {" "}
                click here to edit
              </Link>
            </span>
          ),
        };
      });
      // redirect after 15 seconds
      setTimeout(() => {
        setAlert((prev) => {
          return {
            ...prev,
            alert: false,
            message: "",
          };
        });
        navigate("/create");
      }, 15000);
    }

    let cost = 0;
    if (categoryId == 1) {
      cost = number * 5000;
      setAmount(cost + cost * percentage);
    }

    if (categoryId == 2) {
      cost = number * 7000;
      setAmount(cost + cost * percentage);
    }

    if (categoryId == 3) {
      cost = number * 10000;
      setAmount(cost + cost * percentage);
    }

    localStorage.setItem("amount", cost);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="bg-white shadow-sm rounded m-2 mx-3">
      <div className="d-flex justify-content-between align-items-center pt-3 m-3 border-bottom">
        <div>
          <h1 className="lead text-muted">Review</h1>
        </div>
        <span className="text-primary">3 of 3</span>
      </div>

      {alert.alert === true ? (
        <div
          className="alert alert-danger alert-dismissible fade show mx-3"
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

      <div className="p-3 my-3">
        {/* name of radio station */}
        <div className="bg-light p-3 rounded d-flex justify-content-between">
          <span>Radio</span>
          <span>{radioName}</span>
        </div>

        {/* category of announcement */}
        <div className="p-3 d-flex justify-content-between">
          <span>Category</span>
          <span>{categoryName}</span>
        </div>

        {/* number of broadcasts */}
        <div className="bg-light p-3 rounded d-flex justify-content-between">
          <span>Number of Broadcasts</span>
          <span>{number}</span>
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
              {message}
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
              <span>{amount.toLocaleString("en-US")}</span>
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
          <button
            className="btn btn-primary"
            onClick={(e) => handleCheckout(e)}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
