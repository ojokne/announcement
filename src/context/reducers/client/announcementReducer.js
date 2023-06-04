export const announcementReducer = (state, payload) => {
  switch (payload.type) {
    case "ADD_DETAILS":
      return {
        ...state,
        message: payload.announcementDetails.message,
        numberOfTimes: payload.announcementDetails.numberOfTimes,
        dateToBroadcast: payload.announcementDetails.dateToBroadcast,
        category: payload.announcementDetails.category,
        radioStation: payload.announcementDetails.radioStation,
      };
    case "RESET":
      return {};

    default:
      return state;
  }
};
