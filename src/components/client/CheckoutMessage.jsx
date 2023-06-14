import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ClientMenuAppBar from "./ClientMenuAppBar";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleTrackStatus = (e) => {
    e.preventDefault();
    navigate("/client/status");
  };
  return (
    <Box component="div">
      <ClientMenuAppBar />
      <Box style={outer}>
        <CheckIcon color="primary" sx={{ fontSize: 100 }} />
        <Typography variant="h5" sx={{ fontSize: 18 }}>
          Your announcement was recieved
        </Typography>
        <Typography variant="body2" color="secondary">
          Please stay tuned
        </Typography>
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
