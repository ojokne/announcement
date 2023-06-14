import { Route, Routes } from "react-router-dom";
import CreateAnnouncement from "../components/client/CreateAnnouncement";
import SummarizeAnnouncement from "../components/client/SummarizeAnnouncement";
import PersonalDetails from "../components/client/PersonalDetails";
import ClientWrapper from "../pages/client/ClientWrapper";
import Checkout from "../components/client/Checkout";
import CheckoutMessage from "../components/client/CheckoutMessage";
import Status from "../components/client/Status";

function ClientApp() {
  return (
    <Routes>
      <Route path="/client" element={<ClientWrapper />}>
        <Route path="personal-details" element={<PersonalDetails />} />
        <Route path="create-announcement" element={<CreateAnnouncement />} />
        <Route path="checkout" element={<Checkout />} />
        <Route
          path="summarize-announcement"
          element={<SummarizeAnnouncement />}
        />
      </Route>
      <Route path="client/checkout-message" element={<CheckoutMessage />} />
      <Route path="client/status" element={<Status />} />
    </Routes>
  );
}

export default ClientApp;
