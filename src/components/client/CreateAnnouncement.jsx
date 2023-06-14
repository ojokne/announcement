import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  useStep,
  usePersonalDetails,
  useAnnouncement,
} from "../../context/client/ClientProvider";
import { STEPPER_ACTIONS } from "../../context/actions/client/stepperActions";
import { ANNOUNCEMENT_ACTIONS } from "../../context/actions/client/annoucementActions";

const outer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "600px",
  margin: "0 auto",
};

const radioStations = [
  { label: "Unity FM", value: "97.7" },
  { label: "Voice of Lango", value: "88.8" },
  { label: "Lira FM", value: "93.7" },
  { label: "Radio Rhino", value: "92.7" },
];

const CATEGORIES = [
  { label: "Death", value: "Death" },
  { label: "Business", value: "Business" },
  { label: "Corporate", value: "Corporate" },
];
function CreateAnnouncement() {
  const { personalDetails } = usePersonalDetails();
  const { stepDispatch } = useStep();

  const { announcementDetails, announcementDetailsDispatch } =
    useAnnouncement();

  const [message, setMessage] = useState(announcementDetails.message);
  const [messageError, setMessageError] = useState(false);

  const [numberOfTimes, setNumberOfTimes] = useState(
    announcementDetails.numberOfTimes
  );
  const [numberOfTimesError, setNumberOfTimesError] = useState(false);

  const [dateToBroadcast, setDateToBroadcast] = useState(
    announcementDetails.dateToBroadcast
  );
  const [dateToBroadcastError, setDateToBroadcastError] = useState(false);

  const [radioStation, setRadioStation] = useState(
    announcementDetails.radioStation
  );
  const [radioStationError, setRadioStationError] = useState(false);

  const [category, setCategory] = useState(announcementDetails.category);
  const [categoryError, setCategoryError] = useState(false);

  const navigate = useNavigate();

  const currentDate = new Date().toISOString().split("T")[0];

  const handleBack = (e) => {
    e.preventDefault();
    stepDispatch({ type: STEPPER_ACTIONS.STEP, activeStep: 0 });
    navigate("/client/personal-details");
  };

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    if (message === "") {
      setMessageError(true);
      return;
    }
    if (numberOfTimes === "") {
      setNumberOfTimesError(true);
      return;
    }
    if (dateToBroadcast === "") {
      setDateToBroadcastError(true);
      return;
    }
    if (category === null) {
      setCategoryError(true);
      return;
    }
    if (radioStation === null) {
      setRadioStationError(true);
      return;
    }
    stepDispatch({ type: STEPPER_ACTIONS.STEP, activeStep: 2 });
    announcementDetailsDispatch({
      type: ANNOUNCEMENT_ACTIONS.ADD_DETAILS,
      announcementDetails: {
        message,
        numberOfTimes,
        dateToBroadcast,
        category,
        radioStation,
      },
    });
    navigate("/client/checkout");
  };

  useEffect(() => {
    if (personalDetails.name === "" || personalDetails.phoneNumber === "") {
      navigate("/client/personal-details");
    }
  }, [navigate, personalDetails.name, personalDetails.phoneNumber]);

  return (
    <Box style={outer} component="form">
      <Box p={1} width="90%">
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
        <TextField
          label="Number of times to broadcast"
          size="small"
          type="number"
          fullWidth
          margin="normal"
          inputProps={{ min: 1 }}
          value={numberOfTimes}
          onChange={(e) => {
            setNumberOfTimes(e.target.value);
            setNumberOfTimesError(false);
          }}
          helperText={
            numberOfTimesError ? "Number of times to broadcast is required" : ""
          }
          error={numberOfTimesError}
        />
        <TextField
          label="Date to broadcast"
          size="small"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={dateToBroadcast}
          onChange={(e) => {
            setDateToBroadcast(e.target.value);
            setDateToBroadcastError(false);
          }}
          inputProps={{ min: currentDate }}
          helperText={
            dateToBroadcastError ? "Date to broadcast is required" : ""
          }
          error={dateToBroadcastError}
        />
        <Autocomplete
          sx={{ marginBottom: "20px", marginTop: "20px" }}
          disablePortal
          options={CATEGORIES}
          getOptionLabel={(option) => option.label}
          onChange={(e, option) => {
            setCategory(option);
            setCategoryError(false);
          }}
          value={category}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Cateogry"
              error={categoryError}
              helperText={categoryError ? "Category is required" : ""}
            />
          )}
        />

        <Autocomplete
          sx={{ marginBottom: "20px", marginTop: "20px" }}
          disablePortal
          options={radioStations}
          onChange={(e, option) => {
            setRadioStation(option);
            setRadioStationError(false);
          }}
          value={radioStation}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Radio"
              error={radioStationError}
              helperText={radioStationError ? "Radio Station is required" : ""}
            />
          )}
        />

        <Box component="div" display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIosIcon />}
            onClick={(e) => handleBack(e)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<NavigateNextIcon />}
            onClick={(e) => handleCreateAnnouncement(e)}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateAnnouncement;
