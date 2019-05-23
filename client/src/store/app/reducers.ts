import { AppState, AppStateActionTypes } from "./types";

const initialState: AppState = {
  isLoading: false
};

export function appStateReducer(
  state = initialState,
  action: AppStateActionTypes
): AppState {
  switch (action.type) {
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
