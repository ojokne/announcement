import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import CreateAnnouncement from "../components/client/CreateAnnouncement";
import SummarizeAnnouncement from "../components/client/SummarizeAnnouncement";

function ClientApp() {
  return (
    <Box component="div">
      <Routes>
        <Route
          path="/client/create-announcement"
          element={<CreateAnnouncement />}
        />

        <Route
          path="/client/summarize-announcement"
          element={<SummarizeAnnouncement />}
        />
      </Routes>
    </Box>
  );
}

export default ClientApp;
