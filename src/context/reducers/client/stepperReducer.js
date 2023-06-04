import { STEPPER_ACTIONS } from "../../actions/client/stepperActions";

export const stepperReducer = (state, payload) => {
  switch (payload.type) {
    case STEPPER_ACTIONS.STEP:
      return payload.activeStep;

    case STEPPER_ACTIONS.RESET_STEP:
      return 0;
    default:
      return state;
  }
};
