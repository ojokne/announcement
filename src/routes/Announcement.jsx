import { Routes, Route } from "react-router-dom";
import Wrapper from "../components/Announcement/Wrapper";
import PersonalDetails from "../components/Announcement/PersonalDetails";
import AnnouncementDetails from "../components/Announcement/AnnouncementDetails";
import Review from "../components/Announcement/Review";
import Checkout from "../components/Announcement/Checkout";

const Announcement = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<PersonalDetails />} />
        <Route path="announcement_details" element={<AnnouncementDetails />} />
        <Route path="review" element={<Review />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default Announcement;
