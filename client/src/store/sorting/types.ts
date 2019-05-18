export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_ACCOUNT_ID = "SORT_BY_ACCOUNT_ID";

export type SORTING_KEY = typeof SORT_BY_ACCOUNT_ID | typeof SORT_BY_NAME;

export type SortingState = SORTING_KEY;

export const SET_SORTING_KEY = "SET_SORTING_KEY";

export interface SetSortingAction {
  type: typeof SET_SORTING_KEY;
  payload: SORTING_KEY;
}

export type SortingActionTypes = SetSortingAction;
