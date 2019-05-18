import { SelectedUserActionTypes, SET_USER, CLEAR_USER } from "./types";
import { IUser } from "../../api/types";

export function setSelectedUser(user: IUser): SelectedUserActionTypes {
  return {
    type: SET_USER,
    payload: user
  };
}

export function clearSelectedUser(): SelectedUserActionTypes {
  return {
    type: CLEAR_USER
  };
}
