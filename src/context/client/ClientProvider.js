import { createContext, useContext, useReducer } from "react";
import { personalDetailsReducer } from "../reducers/client/personalDetailsReducer";
import { stepperReducer } from "../reducers/client/stepperReducer";
import { announcementReducer } from "../reducers/client/announcementReducer";

const StepperContext = createContext();
const PersonalDetailsContext = createContext();
const AnnouncementContext = createContext();

export const ClientProvider = ({ children }) => {
  const [step, stepDispatch] = useReducer(stepperReducer, 0);

  const [personalDetails, personalDetailsDispatch] = useReducer(
    personalDetailsReducer,
    {
      name: "",
      phoneNumber: "",
      email: "",
    }
  );

  const [announcementDetails, announcementDetailsDispatch] = useReducer(
    announcementReducer,
    {
      message: "",
      numberOfTimes: 1,
      dateToBroadcast: "",
      category: { label: "", value: "" },
      radioStation: { id: "", label: "", value: "" },
    }
  );
  return (
    <StepperContext.Provider value={{ step, stepDispatch }}>
      <PersonalDetailsContext.Provider
        value={{ personalDetails, personalDetailsDispatch }}
      >
        <AnnouncementContext.Provider
          value={{ announcementDetails, announcementDetailsDispatch }}
        >
          {children}
        </AnnouncementContext.Provider>
      </PersonalDetailsContext.Provider>
    </StepperContext.Provider>
  );
};

export const useStep = () => useContext(StepperContext);
export const usePersonalDetails = () => useContext(PersonalDetailsContext);
export const useAnnouncement = () => useContext(AnnouncementContext);
