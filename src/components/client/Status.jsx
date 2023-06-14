import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import ClientMenuAppBar from "./ClientMenuAppBar";

const outer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "600px",
  margin: "0 auto",
};

const Status = () => {
  const [refNumber, setRefNumber] = useState("");
  const [refNumberError, setRefNumberError] = useState(false);

  return (
    <Box component="div">
      <ClientMenuAppBar />
      <Box style={outer} component="form">
        <Box p={1} width="90%">
          <Typography variant="h5" sx={{ fontSize: 18 }}>
            Track your announcement status
          </Typography>
          <TextField
            label="Reference Number"
            placeholder="Reference Number"
            fullWidth
            margin="normal"
            value={refNumber}
            onChange={(e) => {
              setRefNumber(e.target.value);
              setRefNumberError(false);
            }}
            helperText={refNumberError ? "Reference Number is required" : ""}
            error={refNumberError}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 1 }}
            // endIcon={<NavigateNextIcon />}
            // onClick={(e) => handleCreateAnnouncement(e)}
          >
            Track Status
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Status;
