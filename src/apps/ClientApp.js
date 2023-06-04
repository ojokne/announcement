import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import CreateAnnouncement from "../components/client/CreateAnnouncement";
import SummarizeAnnouncement from "../components/client/SummarizeAnnouncement";
import PersonalDetails from "../components/client/PersonalDetails";
import ClientWrapper from "../components/client/ClientWrapper";
import { ClientProvider } from "../context/client/ClientProvider";
import Checkout from "../components/client/Checkout";

function ClientApp() {
  return (
    <ClientProvider>
      <Box component="div">
        <Routes>
          <Route path="/client" element={<ClientWrapper />}>
            <Route path="personal-details" element={<PersonalDetails />} />
            <Route
              path="create-announcement"
              element={<CreateAnnouncement />}
            />
            <Route path="checkout" element={<Checkout />} />
            <Route
              path="summarize-announcement"
              element={<SummarizeAnnouncement />}
            />
          </Route>
        </Routes>
      </Box>
    </ClientProvider>
  );
}

export default ClientApp;
