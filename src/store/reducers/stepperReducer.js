//customerStep
//payStep

const defaultState = 0;

export const stepperReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'changeStep':
      return action.payload.step;
    default:
      return state;
  }

}