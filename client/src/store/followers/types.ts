import { IUser } from "../../api/types";

export type FollowersState =
  | {
      requestState: "success";
      data: FollowerListData;
      sorting: SortingState;
    }
  | {
      requestState: "loading";
      data: FollowerListData | null;
      sorting: SortingState;
    }
  | {
      requestState: "idle";
      data: FollowerListData | null;
      sorting: SortingState;
    }
  | {
      requestState: "fail";
      data: null;
      sorting: SortingState;
    };

export interface FollowerListData {
  followers: IUser[];
  /* cursor = "0" means no more pages */
  next_cursor: string;
  previous_cursor: string;
}

export const SET_FOLLOWERS = "SET_FOLLOWERS";
export const GET_FOLLOWERS = "GET_FOLLOWERS";
export const SET_FOLLOWERS_SORTING = "SET_FOLLOWERS_SORTING";

export interface SetFollowersAction {
  type: typeof SET_FOLLOWERS;
  payload: FollowerListData;
}

export interface GetFollowersAction {
  type: typeof GET_FOLLOWERS;
}

export interface SetFollowersSorting {
  type: typeof SET_FOLLOWERS_SORTING;
  payload: { direction: SortingDirection; key: FollowerSortingKey };
}

export type FollowersActionTypes =
  | SetFollowersAction
  | GetFollowersAction
  | SetFollowersSorting;

export type SortingDirection = "ASC" | "DESC";

export type FollowerSortingKey = "NAME" | "SCREEN_NAME";

export interface SortingState {
  direction: SortingDirection;
  key: FollowerSortingKey | null;
}
