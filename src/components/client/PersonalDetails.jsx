import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { STEPPER_ACTIONS } from "../../context/actions/client/stepperActions";
import { PERSONAL_DETAILS_ACTIONS } from "../../context/actions/client/personalDetailsActions";
import {
  useStep,
  usePersonalDetails,
} from "../../context/client/ClientProvider";
const outer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "600px",
  margin: "0 auto",
};

function PersonalDetails() {
  const { stepDispatch } = useStep();
  const { personalDetails, personalDetailsDispatch } = usePersonalDetails();

  const [name, setName] = useState(personalDetails.name);
  const [nameError, setNameError] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(personalDetails.phoneNumber);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [email, setEmail] = useState(personalDetails.email);

  const navigate = useNavigate();

  const handlePersonalDetails = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
      return;
    }

    if (phoneNumber === "") {
      setPhoneNumberError(true);
      return;
    }

    stepDispatch({ type: STEPPER_ACTIONS.STEP, activeStep: 1 });
    personalDetailsDispatch({
      type: PERSONAL_DETAILS_ACTIONS.ADD_DETAILS,
      personalDetails: { name, email, phoneNumber },
    });
    navigate("/client/create-announcement");
  };
  return (
    <div>
      <Box style={outer} component="form">
        <Box p={1} width="90%">
          <TextField
            label="Full Name"
            size="small"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            helperText={nameError ? "Name is required" : ""}
            error={nameError}
          />
          <TextField
            label="Phone Number"
            size="small"
            type="number"
            fullWidth
            margin="normal"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setPhoneNumberError(false);
            }}
            helperText={phoneNumberError ? "Phone number is required" : ""}
            error={phoneNumberError}
          />

          <TextField
            label="Email (optional)"
            size="small"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              handlePersonalDetails(e);
            }}
            endIcon={<SendIcon />}
          >
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default PersonalDetails;
