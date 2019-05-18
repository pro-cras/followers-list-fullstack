import { IUser } from "../../api/types";

export type SelectedUserState = IUser | null;

export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export interface SetUserAction {
  type: typeof SET_USER;
  payload: IUser;
}

export interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export type SelectedUserActionTypes = SetUserAction | ClearUserAction;
