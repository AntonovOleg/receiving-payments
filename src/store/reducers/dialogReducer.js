const defaultState = false;

export const dialogReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ChangeDialogState':
      return action.payload.newState;
    default:
      return state;
  }
}