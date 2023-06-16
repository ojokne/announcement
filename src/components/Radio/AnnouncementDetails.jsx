import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation, useNavigate } from "react-router-dom";
import RadioMenuAppBar from "./RadioMenuAppBar";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { Paper, Typography } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";

const outer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "850px",
  margin: "0 auto",
  overflowX: "hidden",
};

const AnnouncementDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // state to open and close backdrop
  const [open, setOpen] = useState(false);

  const [isPending, setIsPending] = useState(false);

  const handleBack = (e) => {
    e.preventDefault();
    navigate(state.backLink);
  };

  const handleConfirmBroadcast = async (e, state) => {
    try {
      setOpen(true);

      await updateDoc(doc(db, "announcements", state.id), {
        status: "complete",
      });
      setOpen(false);
      navigate("/radio");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setOpen(true);
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setOpen(false);
        navigate("/login");
      }

      if (state.status === "pending") {
        setIsPending(true);
      }
      setOpen(false);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

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
    <Box component="div">
      <RadioMenuAppBar />
      <Box style={outer} component="div">
        <Paper sx={{ p: 2, m: 2, width: "90%" }}>
          <Typography
            variant="h5"
            color="secondary"
            sx={{ marginTop: 1, marginBottom: 1, paddingLeft: 1 }}
          >
            {state.category} Announcement
          </Typography>
          <Box
            component="div"
            sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
          >
            <Typography variant="p">{state.name}</Typography>

            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontSize: 12, padding: 0, margin: 0 }}
            >
              Name
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
          >
            <Typography variant="p">{state.phone}</Typography>

            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontSize: 12, padding: 0, margin: 0 }}
            >
              Phone Number
            </Typography>
          </Box>
          {state.email && (
            <Box
              component="div"
              sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
            >
              <Typography variant="p">{state.email}</Typography>

              <Typography
                variant="body2"
                color="secondary"
                sx={{ fontSize: 12, padding: 0, margin: 0 }}
              >
                Email
              </Typography>
            </Box>
          )}
          <Box
            component="div"
            sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
          >
            <Typography variant="p">{state.numberOfTimes}</Typography>

            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontSize: 12, padding: 0, margin: 0 }}
            >
              Number of times to broadcast
            </Typography>
          </Box>

          <Box
            component="div"
            sx={{ marginTop: 1, marginBottom: 1, padding: 1 }}
          >
            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontSize: 12, padding: 0, margin: 0 }}
            >
              Message
            </Typography>
            <Typography
              component="p"
              sx={{ textAlign: "justify", paddingTop: 1, paddingBottom: 1 }}
            >
              {state.message}
            </Typography>
          </Box>

          <Box component="div" display="flex" justifyContent="space-between">
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackIosIcon />}
              onClick={(e) => handleBack(e)}
            >
              Back
            </Button>
            {isPending && (
              <Button
                variant="contained"
                color="primary"
                endIcon={<NavigateNextIcon />}
                onClick={(e) => {
                  handleConfirmBroadcast(e, state);
                }}
              >
                Confirm Broadcast
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AnnouncementDetails;
