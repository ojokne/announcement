import { Routes, Route } from "react-router-dom";
import Wrapper from "../components/Announcement/Wrapper";
import PersonalDetails from "../components/Announcement/PersonalDetails";
import AnnouncementDetails from "../components/Announcement/AnnouncementDetails";
import Review from "../components/Announcement/Review";

const Announcement = () => {
  return (
    <Routes>
      <Route path="/create" element={<Wrapper />}>
        <Route path="personal_details" element={<PersonalDetails />} />
        <Route path="announcement_details" element={<AnnouncementDetails />} />
        <Route path="review" element={<Review/>} />
      </Route>
    </Routes>
  );
};
export default Announcement;
