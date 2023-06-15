import { createContext, useContext, useReducer } from "react";
import { announcementReducer } from "../reducers/radio/announcementReducer";

const AnnouncementContext = createContext();

export const RadioProvider = ({ children }) => {
  const [announcements, announcementDispatch] = useReducer(
    announcementReducer,
    {}
  );

  return (
    <AnnouncementContext.Provider
      value={{ announcements, announcementDispatch }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncement = () => useContext(AnnouncementContext);
