import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // reference to the show password checkbox
  const showPasswordRef = useRef();
  const passwordRef = useRef();

  // state to hold alerts
  const [alert, setAlert] = useState({
    alert: false,
    message: "",
  });

  const handleShowPassword = () => {
    let passwordField = passwordRef.current;
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  };

  // function handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setAlert((prev) => {
      return { ...prev, alert: false, message: "" };
    });
    if (!email.length) {
      setEmailError("Email is required");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password should be atleast 6 characters");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
      let code = e.code;
      switch (code) {
        case "auth/invalid-email":
          setAlert((prev) => {
            return { ...prev, alert: true, message: "No user with that Email" };
          });
          break;

        case "auth/wrong-password":
          setAlert((prev) => {
            return { ...prev, alert: true, message: "Password incorrect" };
          });
          break;

        case "auth/user-not-found":
          setAlert((prev) => {
            return {
              ...prev,
              alert: true,
              message: "Incorrect email or password",
            };
          });
          break;
        default:
          setAlert((prev) => {
            return {
              ...prev,
              alert: true,
              message: "An error occured",
            };
          });
      }
    }
  };

  if (loading) return <Spinner />;

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100dvh" }}
    >
      <div className="border rounded p-4" style={{ width: "400px" }}>
        <h1 className="fs-4 text-muted text-center">Welcome, please login</h1>

        {alert.alert === true ? (
          <div
            className="alert alert-danger alert-dismissible fade show m-3"
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
        <div className="px-3 pb-3">
          {/* email*/}
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
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              ref={passwordRef}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
            />
            {/* error message from form validation */}
            {passwordError && (
              <span className="text-danger">{passwordError}</span>
            )}
          </div>

          <div className="my-3 d-flex justify-content-between">
            <div className="form-check">
              <input
                ref={showPasswordRef}
                type="checkbox"
                className="form-check-input"
                id="showPassword"
                onChange={() => handleShowPassword()}
              />
              <label className="form-check-label" htmlFor="showPassword">
                show password
              </label>
            </div>

            <div>
              <Link
                to="/reset_password"
                className="text-decoration-none ridelink-color"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary w-100 " onClick={(e)=>handleLogin(e)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
