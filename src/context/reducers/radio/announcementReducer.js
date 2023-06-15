import { ANNOUNCEMENT_ACTIONS } from "../../actions/radio/announcementActions";

export const announcementReducer = (state, payload) => {
  switch (payload.type) {
    case ANNOUNCEMENT_ACTIONS.SET_ANNOUNCEMENTS:
      return { ...state, announcements: payload.announcements };
    case "RESET":
      return [];

    default:
      return state;
  }
};
