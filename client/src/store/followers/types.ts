import { IUser } from "../../api/types";

// TODO: add isFetching=false to state
export type FollowersState = IUser[] | null;

export const SET_FOLLOWERS = "SET_FOLLOWERS";
export const CLEAR_FOLLOWERS = "CLEAR_FOLLOWERS";

export interface SetFollowersAction {
  type: typeof SET_FOLLOWERS;
  payload: IUser[];
}

export interface ClearFollowersAction {
  type: typeof CLEAR_FOLLOWERS;
  payload: IUser[];
}

export type FollowersActionTypes = SetFollowersAction | ClearFollowersAction;
