import SendIcon from "@mui/icons-material/Send";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const outer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  maxWidth: "600px",
  margin: "0 auto",
};

const radioStations = [
  { label: "Unity FM", value: "97.7" },
  { label: "Voice of Lango", value: "88.8" },
  { label: "Lira FM", value: "93.7" },
  { label: "Radio Rhino", value: "92.7" },
];
function CreateAnnouncement() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const [radioStation, setRadioStation] = useState("");
  const [radioStationError, setRadioStationError] = useState(false);

  const navigate = useNavigate();

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
      return;
    }

    if (phoneNumber === "") {
      setPhoneNumberError(true);
      return;
    }

    if (message === "") {
      setMessageError(true);
      return;
    }

    if (radioStation === "") {
      setRadioStationError(true);
      return;
    }
    console.log(radioStation);
    navigate("/client/summarize-announcement");
  };
  return (
    <div>
      <Box style={outer} component="form">
        <Box p={1} width="90%">
          <TextField
            label="First Name"
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
          />
          <TextField
            label="Message"
            multiline
            rows={8}
            placeholder="Type your message here"
            fullWidth
            margin="normal"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setMessageError(false);
            }}
            helperText={messageError ? "Message is required" : ""}
            error={messageError}
          />

          <Autocomplete
            sx={{ marginBottom: "20px", marginTop: "20px" }}
            disablePortal
            options={radioStations}
            onChange={(e, option) => setRadioStation(option.label)}
            value={radioStation}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Radio"
                error={radioStationError}
                helperText={
                  radioStationError ? "Radio Station is requireed" : ""
                }
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              handleCreateAnnouncement(e);
            }}
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default CreateAnnouncement;
