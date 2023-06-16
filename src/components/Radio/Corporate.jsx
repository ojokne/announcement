import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import RadioMenuAppBar from "./RadioMenuAppBar";
import Stack from "@mui/material/Stack";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { green, orange } from "@mui/material/colors";
import { useAnnouncement } from "../../context/radio/RadioProvider";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
const outer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "850px",
  margin: "0 auto",
  overflowX: "hidden",
};

const Corporate = () => {
  const { announcements } = useAnnouncement();

  // state to open and close backdrop
  const [open, setOpen] = useState(false);

  // stateto hold amount
  const [amount, setAmount] = useState(0);

  // state to hold pending  announcements
  const [pending, setPending] = useState(0);

  // state to hold announcements that have been completed
  const [complete, setComplete] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setOpen(true);
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (announcements.hasOwnProperty("announcements")) {
          let announcementsArray = Object.values(announcements.announcements);
          for (let i = 0; i < announcementsArray.length; i++) {
            if (announcementsArray[i].category.toLowerCase() !== "corporate") {
              continue;
            }
            setAmount((prev) => prev + announcementsArray[i].amount);
            if (announcementsArray[i].status === "pending") {
              setPending((prev) => prev + 1);
            } else if (announcementsArray[i].status === "complete") {
              setComplete((prev) => prev + 1);
            }
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
        <Box
          component="div"
          p={1}
          width="100%"
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h5" color="secondary" sx={{ padding: 2 }}>
            Summary of Corporate announcements
          </Typography>
          <Box
            p={1}
            width="100%"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Paper
              elevation={1}
              sx={{
                flex: "1 1 200px",
                m: 1,
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <PaidIcon color="primary" />
                <Typography variant="h5" component="p" color="secondary">
                  Amount
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  paddingTop: 2,
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                }}
              >
                {amount.toLocaleString("en-US")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  paddingTop: 2,
                  color: "secondary.main",
                  textAlign: "center",
                }}
              >
                UGX
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                flex: "1 1 200px",
                m: 1,
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <AccessTimeIcon sx={{ color: orange[500] }} />
                <Typography variant="h5" component="p" color="secondary">
                  Pending
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  paddingTop: 2,
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                }}
              >
                {pending}
              </Typography>
              {pending === 0 ? (
                <Typography
                  variant="body1"
                  sx={{
                    paddingTop: 2,
                    color: "secondary.main",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  No announcements
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  component={RouterLink}
                  to="/radio/corporate/pending"
                  sx={{
                    paddingTop: 2,
                    color: "primary.main",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  View
                </Typography>
              )}
            </Paper>
            <Paper
              elevation={3}
              sx={{
                flex: "1 1 200px",
                m: 1,
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <CheckIcon sx={{ color: green[500] }} />
                <Typography variant="h5" component="p" color="secondary">
                  Complete
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  paddingTop: 2,
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                }}
              >
                {complete}
              </Typography>
              {complete === 0 ? (
                <Typography
                  variant="body1"
                  sx={{
                    paddingTop: 2,
                    color: "secondary.main",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  No announcements
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  component={RouterLink}
                  to="/radio/corporate/complete"
                  sx={{
                    paddingTop: 2,
                    color: "primary.main",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  View
                </Typography>
              )}
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Corporate;
