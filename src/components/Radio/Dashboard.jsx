import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import BusinessIcon from "@mui/icons-material/Business";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Stack from "@mui/material/Stack";
import RadioMenuAppBar from "./RadioMenuAppBar";

import { Link as RouterLink } from "react-router-dom";
import { green, orange } from "@mui/material/colors";
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
                45
              </Typography>
              <Typography
                variant="body1"
                component={RouterLink}
                to="#"
                sx={{
                  paddingTop: 2,
                  color: "primary.main",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                View
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
                45
              </Typography>
              <Typography
                variant="body1"
                component={RouterLink}
                to="#"
                sx={{
                  paddingTop: 2,
                  color: "primary.main",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                View
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
                45
              </Typography>
              <Typography
                variant="body1"
                component={RouterLink}
                to="#"
                sx={{
                  paddingTop: 2,
                  color: "primary.main",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                View
              </Typography>
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
                45,000
              </Typography>
              <Typography
                variant="body1"
                component={RouterLink}
                to="#"
                sx={{
                  paddingTop: 2,
                  color: "primary.main",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                View
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
                100,000
              </Typography>
              <Typography
                variant="body1"
                component={RouterLink}
                to="#"
                sx={{
                  paddingTop: 2,
                  color: "primary.main",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                View
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
                50,000
              </Typography>
              <Typography
                variant="body1"
                component={RouterLink}
                to="#"
                sx={{
                  paddingTop: 2,
                  color: "primary.main",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                View
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
