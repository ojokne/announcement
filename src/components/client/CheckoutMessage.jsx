import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ClientMenuAppBar from "./ClientMenuAppBar";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

const outer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
};

const CheckoutMessage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleTrackStatus = (e) => {
    e.preventDefault();
    navigate("/client/status");
  };
  return (
    <Box component="div">
      <ClientMenuAppBar />
      <Box style={outer}>
        <Box
          sx={{
            padding: 2,
            margin: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckIcon color="primary" sx={{ fontSize: 100 }} />
          <Typography variant="h5" sx={{ fontSize: 16, textAlign: "center" }}>
            Your announcement was recieved
          </Typography>
          <Typography variant="body2" color="secondary" sx={{ fontSize: 12 }}>
            Please stay tuned
          </Typography>
        </Box>

        <Box
          sx={{
            padding: 2,
            margin: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontSize: 16 }}>
            {state?.id}
          </Typography>
          <Typography
            variant="body2"
            color="secondary"
            sx={{ textAlign: "center", fontSize: 12 }}
          >
            Use the reference number to track your announcement
          </Typography>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          sx={{ margin: 2 }}
          onClick={(e) => handleTrackStatus(e)}
        >
          Track Status
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutMessage;
