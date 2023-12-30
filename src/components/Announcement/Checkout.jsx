import { useState, useEffect } from "react";
import Spinner from "../Spinner";

const Checkout = () => {
  const [loading, setLoading] = useState(true);
  const [redirectURL, setRedirectURL] = useState("");

  // retieve form data from local storage
  const name = localStorage.getItem("name");
  const contact = localStorage.getItem("contact");
  const radioName = localStorage.getItem("radioName");
  const radioId = localStorage.getItem("radioId");
  const categoryId = localStorage.getItem("categoryId");
  const categoryName = localStorage.getItem("categoryName");
  const number = localStorage.getItem("number");
  const message = localStorage.getItem("message");
  let amount = localStorage.getItem("amount");
  let announcementId = localStorage.getItem("announcementId");

  // state to hold alerts
  const [alert, setAlert] = useState({
    alert: false,
    message: "",
  });

  useEffect(() => {
    const handleSubmitOrderRequest = async () => {
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

        // get auth token
        const response = await fetch(
          import.meta.env.VITE_PESA_PAL_AUTH_ENDPOINT,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              consumer_key: import.meta.env.VITE_PESA_PAL_CONSUMER_KEY,
              consumer_secret: import.meta.env.VITE_PESA_PAL_CONSUMER_SECRET,
            }),
          }
        );
        const data = await response.json();
        const token = data.token;

        //create notification id
        const notificationResponse = await fetch(
          import.meta.env.VITE_PESA_PAL_REGISTERIPN_ENDPOINT,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              url: import.meta.env.VITE_PESA_PAL_IPN_URL,
              ipn_notification_type: "GET",
            }),
          }
        );

        const notificationResponseData = await notificationResponse.json();

        const notificationId = notificationResponseData.ipn_id;

        // submit order request

        const orderRequestResponse = await fetch(
          import.meta.env.VITE_PESA_PAL_SUBMIT_ORDER_REQUEST_ENDPOINT,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              id: announcementId,
              currency: "UGX",
              amount: amount,
              description: `Pay for your annoucement to be broadcast ${number} ${
                number == 1 ? "time" : "times"
              } through ${radioName}}`,
              callback_url: import.meta.env.VITE_PESA_PAL_CALLBACK_URL,
              cancellation_url: import.meta.env.VITE_PESA_PAL_CANCELLATION_URL,
              notification_id: notificationId,
              billing_address: {
                email_address: "",
                phone_number: contact,
                country_code: "UG",
                first_name: name,
                middle_name: "",
                last_name: "",
                line_1: "",
                line_2: "",
                city: "",
                state: "",
                postal_code: null,
                zip_code: null,
              },
            }),
          }
        );

        const orderRequestResponseData = await orderRequestResponse.json();

        // clear alerts
        setAlert((prev) => {
          return {
            ...prev,
            alert: false,
            message: "",
          };
        });

        // extract redirect url to be used an iframe
        setRedirectURL(orderRequestResponseData.redirect_url);

        // save order tracking id to local storage
        localStorage.setItem(
          "orderTrackingId",
          orderRequestResponseData.order_tracking_id
        );

        // save merchant reference id to local storage
        localStorage.setItem(
          "merchantReference",
          orderRequestResponseData.merchant_reference
        );

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (
      name == null ||
      contact == null ||
      radioId == null ||
      radioName == null ||
      categoryId == null ||
      categoryName == null ||
      number == null ||
      message == null ||
      amount == null ||
      announcementId == null
    ) {
      setAlert((prev) => {
        return {
          ...prev,
          alert: true,
          message: (
            <span>
              Unforunately, we are not able to recover some of the data you
              entered, you will be redirected to edit or
              <Link to="/create"> click here to edit</Link>
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
    } else {
      handleSubmitOrderRequest();
    }

    return () => {
      setLoading(false);
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center pt-3 m-3 border-bottom">
        <div>
          <h1 className="lead muted">Checkout</h1>
        </div>
        <span>finally</span>
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
      <div className="w-100 d-flex" style={{ height: "800px" }}>
        <iframe
          src={redirectURL}
          title="Payment"
          className="w-100 h-100"
        ></iframe>
      </div>
    </div>
  );
};

export default Checkout;
