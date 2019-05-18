import { IUser } from "../../api/types";
import { SelectedUserActionTypes } from "../selectedUser/types";
import { SET_FOLLOWERS, FollowersActionTypes } from "./types";

export function setFollowers(followers: IUser[]): FollowersActionTypes {
  return {
    type: SET_FOLLOWERS,
    payload: followers
  };
}
