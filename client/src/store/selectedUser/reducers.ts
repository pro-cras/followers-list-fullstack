import {
  SelectedUserState,
  SET_USER,
  SelectedUserActionTypes,
  CLEAR_USER
} from "./types";

const initialState: SelectedUserState = null;

export function selectedUserReducer(
  state = initialState,
  action: SelectedUserActionTypes
): SelectedUserState {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
}
