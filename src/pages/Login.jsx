import {
  Alert,
  Box,
  Button,
  Collapse,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Link as MuiLink } from "@mui/material";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
const outer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "400px",
  height: "100vh",
  margin: "0 auto",
};

const Login = () => {
  // state to open and close backdrop
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const [alert, setAlert] = useState({
    alert: false,
    message: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError(true);
      return;
    }
    if (password === "") {
      setPasswordError(true);
      setPasswordErrorText("Password is required");
      return;
    }

    if (password.length < 6) {
      setPasswordError(true);
      setPasswordErrorText("Password should be atleast 6 characters");
      return;
    }

    try {
      setOpen(true);

      await signInWithEmailAndPassword(auth, email, password);

      navigate("/radio");
      setOpen(false);
    } catch (e) {
      setOpen(false);
      console.log(e);
      let code = e.code;
      switch (code) {
        case "auth/invalid-email":
          setAlert((prev) => {
            return { ...prev, alert: true, message: "No user with than Email" };
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

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  if (open) {
    return (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }
  return (
    <Box style={outer} component="form">
      <Box p={1} width="90%">
        <Paper elevation={3} sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
          <Collapse in={alert.alert}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlert((prev) => {
                      return { ...prev, alert: false, message: "" };
                    });
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {alert.message}
            </Alert>
          </Collapse>

          <TextField
            label="Email"
            size="small"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            helperText={emailError ? "Email is required" : ""}
            error={emailError}
          />
          <TextField
            label="Password"
            size="small"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
            helperText={passwordError ? passwordErrorText : ""}
            error={passwordError}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 1 }}
            onClick={(e) => {
              handleLogin(e);
            }}
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MuiLink href="#" underline="none">
              <Typography variant="body1" sx={{ paddingTop: 2 }}>
                Forgot password?
              </Typography>
            </MuiLink>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
