import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import BusinessIcon from "@mui/icons-material/Business";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import RadioMenuAppBar from "./RadioMenuAppBar";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { green, orange } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useAnnouncement } from "../../context/radio/RadioProvider";
import { ANNOUNCEMENT_ACTIONS } from "../../context/actions/radio/announcementActions";
const outer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "850px",
  margin: "0 auto",
  overflowX: "hidden",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { announcements, announcementDispatch } = useAnnouncement();

  // state to open and close backdrop
  const [open, setOpen] = useState(false);

  // state to hold death announcements
  const [death, setDeath] = useState(0);

  // state to hold business announcements
  const [business, setBusiness] = useState(0);

  // state to hold corporate announcements
  const [corporate, setCorporate] = useState(0);

  // state to hold amount from death announcements
  const [amountDeath, setAmountDeath] = useState(0);

  // state to hold amount from business announcements
  const [amountBusiness, setAmountBusiness] = useState(0);

  // state to hold amount from corporate announcements
  const [amountCorporate, setAmountCorporate] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(true);
    let unsubscribeFromFirestore;
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const user = await getDoc(doc(db, "users", auth.currentUser.uid));
          const querySnapshot = query(
            collection(db, "announcements"),
            where("radioStation", "==", user.data().radioStation)
          );

          unsubscribeFromFirestore = onSnapshot(
            querySnapshot,
            (querySnapshot) => {
              if (querySnapshot.empty) {
                setOpen(false);
              } else {
                const announcementsArray = [];
                console.log(querySnapshot.docs[0].data());
                for (let i = 0; i < querySnapshot.docs.length; i++) {
                  let announcement = {
                    id: querySnapshot.docs[i].id,
                    ...querySnapshot.docs[i].data(),
                  };

                  announcementsArray.push(announcement);
                  if (announcement.category.toLowerCase() === "death") {
                    setDeath((prev) => prev + 1);
                    setAmountDeath((prev) => prev + announcement.amount);
                  }
                  if (announcement.category.toLowerCase() === "business") {
                    setBusiness((prev) => prev + 1);
                    setAmountBusiness((prev) => prev + announcement.amount);
                  }
                  if (announcement.category.toLowerCase() === "corporate") {
                    setCorporate((prev) => prev + 1);
                    setAmountCorporate((prev) => prev + announcement.amount);
                  }
                }
                announcementDispatch({
                  type: ANNOUNCEMENT_ACTIONS.SET_ANNOUNCEMENTS,
                  announcements: announcementsArray,
                });
              }
              setOpen(false);
            }
          );
        } catch (e) {
          console.log(e);
        }
        setOpen(false);
      } else {
        navigate("/login");
      }
    });

    return () => {
      unsubscribeFromAuth();
      if (unsubscribeFromFirestore) {
        unsubscribeFromFirestore();
      }
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
            Total number of announcements
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
                <SentimentDissatisfiedIcon color="primary" />
                <Typography variant="h5" component="p" color="secondary">
                  Death
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
                {death}
              </Typography>
              {death === 0 ? (
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
                  to="/radio/death"
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
                <BusinessIcon sx={{ color: green[500] }} />
                <Typography variant="h5" component="p" color="secondary">
                  Business
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
                {business}
              </Typography>
              {business === 0 ? (
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
                  to="/radio/business"
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
                <CorporateFareIcon sx={{ color: orange[500] }} />
                <Typography variant="h5" component="p" color="secondary">
                  Corporate
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
                {corporate}
              </Typography>
              {corporate === 0 ? (
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
                  to="/radio/corporate"
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
        <Box
          component="div"
          p={1}
          width="100%"
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h5" color="secondary" sx={{ padding: 2 }}>
            Total amount (UGX)
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
                <SentimentDissatisfiedIcon color="primary" />
                <Typography variant="h5" component="p" color="secondary">
                  Death
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
                {amountDeath.toLocaleString("en-US")}
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
                <BusinessIcon sx={{ color: green[500] }} />
                <Typography variant="h5" component="p" color="secondary">
                  Business
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
                {amountBusiness.toLocaleString("en-US")}
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
                <CorporateFareIcon sx={{ color: orange[500] }} />
                <Typography variant="h5" component="p" color="secondary">
                  Corporate
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
                {amountCorporate.toLocaleString("en-US")}
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
