import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";
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

const Death = () => {
  return (
    <Box style={outer} component="form">
      <Box
        component="div"
        p={1}
        width="100%"
        display="flex"
        flexDirection="column"
      >
        <Typography variant="h5" color="secondary" sx={{ padding: 2 }}>
          Summary of Death announcements
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
              26
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
              10
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
  );
};

export default Death;
