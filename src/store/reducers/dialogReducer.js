export const dialogReducer = (state = false, action) => {
  switch (action.type) {
    case "ChangeDialogState":
      return action.payload.newState;
    default:
      return state;
  }
};
