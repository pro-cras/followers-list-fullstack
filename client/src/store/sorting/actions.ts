import { IUser } from "../../api/types";
import { SelectedUserActionTypes } from "../selectedUser/types";
import { SortingActionTypes, SORTING_KEY, SET_SORTING_KEY } from "./types";

export function setSorting(key: SORTING_KEY): SortingActionTypes {
  return {
    type: SET_SORTING_KEY,
    payload: key
  };
}
