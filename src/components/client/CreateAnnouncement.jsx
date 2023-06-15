import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
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
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

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

  // state to control loading screen
  const [open, setOpen] = useState(true);

  // state to hold radio stations from firebase
  const [radios, setRadios] = useState([]);

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

  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    const fetchRadioStations = async () => {
      try {
        const radioStationRef = await getDocs(collection(db, "radioStations"));
        for (let i = 0; i < radioStationRef.docs.length; i++) {
          const { frequency, name } = radioStationRef.docs[i].data();
          let radio = {
            id: radioStationRef.docs[i].id,
            label: name,
            value: frequency,
          };
          setRadios((prev) => [...prev, radio]);
        }
        setOpen(false);
      } catch (e) {}
    };
    if (personalDetails.name === "" || personalDetails.phoneNumber === "") {
      navigate("/client/personal-details");
    }
    fetchRadioStations();
  }, [navigate, personalDetails.name, personalDetails.phoneNumber]);

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
          va8lue={dateToBroadcast}
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
          options={radios}
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
