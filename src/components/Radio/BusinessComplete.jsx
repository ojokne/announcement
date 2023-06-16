import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RadioMenuAppBar from "./RadioMenuAppBar";
import { useNavigate } from "react-router-dom";
import { useAnnouncement } from "../../context/radio/RadioProvider";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import AnnouncementSummary from "../AnnouncementSummary";
import { Paper } from "@mui/material";
const outer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "850px",
  margin: "0 auto",
  overflowX: "hidden",
};

const BusinessComplete = () => {
  const { announcements } = useAnnouncement();

  // state to open and close backdrop
  const [open, setOpen] = useState(false);

  // state to hold pending  announcements
  const [complete, setComplete] = useState([]);

  //   state to determine if there are no pending announcements
  const [display, setDisplay] = useState(false);

  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/radio/business");
  };

  useEffect(() => {
    setOpen(true);
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (announcements.hasOwnProperty("announcements")) {
          let announcementsArray = Object.values(announcements.announcements);
          if (announcementsArray.length > 0) {
            for (let i = 0; i < announcementsArray.length; i++) {
              let announcement = announcementsArray[i];
              if (
                announcement.category.toLowerCase() === "business" &&
                announcement.status === "complete"
              ) {
                setComplete((prev) => [...prev, announcement]);
              }
            }
            setDisplay(true);
          }
        } else {
          navigate("/radio");
        }
        setOpen(false);
      } else {
        navigate("/login");
      }
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
      <Box style={outer} component="form">
        {!display && (
          <Box
            component="div"
            p={1}
            width="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Paper
              sx={{
                p: 2,
                m: 2,
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="p" color="secondary" sx={{ padding: 2 }}>
                There are no announcements that have been broadcast
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<ArrowBackIosIcon />}
                onClick={(e) => handleBack(e)}
              >
                Back
              </Button>
            </Paper>
          </Box>
        )}
        {display && (
          <Box
            component="div"
            p={1}
            width="100%"
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h5" color="secondary" sx={{ padding: 2 }}>
              Broadcast complete
            </Typography>
            {complete.map((announcement, index) => {
              return (
                <AnnouncementSummary
                  announcement={announcement}
                  key={index}
                  backLink="/radio/business/complete"
                />
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BusinessComplete;
