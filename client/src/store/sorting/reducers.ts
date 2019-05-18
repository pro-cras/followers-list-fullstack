import {
  SortingState,
  SORT_BY_NAME,
  SortingActionTypes,
  SET_SORTING_KEY
} from "./types";

const initialState: SortingState = SORT_BY_NAME;

export function sortingReducer(
  state = initialState,
  action: SortingActionTypes
): SortingState {
  switch (action.type) {
    case SET_SORTING_KEY:
      return action.payload;
    default:
      return state;
  }
}
