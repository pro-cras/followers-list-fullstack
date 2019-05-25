import { IUser } from "../../api/types";

export type FollowersState =
  | {
      requestState: "success";
      data: FollowerListData;
    }
  | {
      requestState: "loading";
      data: FollowerListData | null;
    }
  | {
      requestState: "idle";
      data: FollowerListData | null;
    }
  | {
      requestState: "fail";
      data: null;
    };

export interface FollowerListData {
  followers: IUser[];
  /* cursor = 0 means no more pages */
  next_cursor: string;
  previous_cursor: string;
}

export const SET_FOLLOWERS = "SET_FOLLOWERS";
export const GET_FOLLOWERS = "GET_FOLLOWERS";

export interface SetFollowersAction {
  type: typeof SET_FOLLOWERS;
  payload: FollowerListData;
}

export interface GetFollowersAction {
  type: typeof GET_FOLLOWERS;
}

export type FollowersActionTypes = SetFollowersAction | GetFollowersAction;
