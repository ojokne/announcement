import { PERSONAL_DETAILS_ACTIONS } from "../../actions/client/personalDetailsActions";

export const personalDetailsReducer = (state, payload) => {
  switch (payload.type) {
    case PERSONAL_DETAILS_ACTIONS.ADD_DETAILS:
      return {
        ...state,
        name: payload.personalDetails.name,
        phoneNumber: payload.personalDetails.phoneNumber,
        email: payload.personalDetails.email,
      };
    case PERSONAL_DETAILS_ACTIONS.RESET:
      return {};

    default:
      return state;
  }
};
