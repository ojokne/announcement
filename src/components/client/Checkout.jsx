import { Box, Divider, Paper, Typography } from "@mui/material";
import { useAnnouncement } from "../../context/client/ClientProvider";
import { STEPPER_ACTIONS } from "../../context/actions/client/stepperActions";
import { useStep } from "../../context/client/ClientProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const outer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "600px",
  margin: "0 auto",
};
const Checkout = () => {
  const { announcementDetails } = useAnnouncement();
  const { stepDispatch } = useStep();

  // state to open and close backdrop

  const [open, setOpen] = useState(false);

  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0); // [1
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    stepDispatch({ type: STEPPER_ACTIONS.STEP, activeStep: 1 });

    navigate("/client/create-announcement");
  };

  const handleCheckout = (e) => {
    setTimeout(() => {
      setOpen(false);
      navigate("/client/checkout-message");
    }, 3000);
  };

  const calculateAmount = () => {
    const numberOfTimes = parseInt(announcementDetails.numberOfTimes);
    if (announcementDetails.category.value === "Death") {
      setAmount(numberOfTimes * 5000);
    }
    if (announcementDetails.category.value === "Business") {
      setAmount(numberOfTimes * 7000);
    }
    if (announcementDetails.category.value === "Corporate") {
      setAmount(numberOfTimes * 10000);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (
      announcementDetails.message === "" ||
      announcementDetails.numberOfTimes === "" ||
      announcementDetails.dateToBroadcast === "" ||
      announcementDetails.radioStation === "" ||
      announcementDetails.category === ""
    ) {
      navigate("/client/create-announcement");
    }
    setDate(new Date(announcementDetails.dateToBroadcast).toDateString());
    calculateAmount();
  }, [announcementDetails]);

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
    <Box style={outer}>
      <Box p={3} width="90%">
        <Paper elevation={2} sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
          <Box
            component="div"
            sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
          >
            <Typography variant="h5" component="p">
              {announcementDetails.category.label} Announcement
            </Typography>
            <Divider />
          </Box>

          <Box
            component="div"
            sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
          >
            <Typography variant="h5">
              {announcementDetails.numberOfTimes}
            </Typography>

            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontSize: 12, padding: 0, margin: 0 }}
            >
              Number of times
            </Typography>
          </Box>

          <Box
            component="div"
            sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
          >
            <Typography variant="h5">{date}</Typography>

            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontSize: 12, padding: 0, margin: 0 }}
            >
              Date to broadcast
            </Typography>
          </Box>

          <Box
            component="div"
            sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
          >
            <Typography variant="h5">
              UGX {amount.toLocaleString("en-Us")}
            </Typography>

            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontSize: 12, padding: 0, margin: 0 }}
            >
              Amount
            </Typography>
          </Box>
        </Paper>
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
            onClick={(e) => {
              handleCheckout(e);
              handleOpen();
            }}
          >
            Check out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
