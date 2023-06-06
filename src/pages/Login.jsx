import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
const outer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "400px",
  height: "100vh",
  margin: "0 auto",
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");

  return (
    <Box style={outer} component="form">
      <Box p={1} width="90%">
        <Paper elevation={3} sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
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
            helperText={passwordError ? { passwordErrorText } : ""}
            error={passwordError}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 1 }}
            onClick={(e) => {
              // handlePersonalDetails(e);
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
