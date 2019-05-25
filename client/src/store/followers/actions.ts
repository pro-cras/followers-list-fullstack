import {
  SET_FOLLOWERS,
  FollowersActionTypes,
  FollowerListData,
  GET_FOLLOWERS
} from "./types";

export function setFollowers(data: FollowerListData): FollowersActionTypes {
  return {
    type: SET_FOLLOWERS,
    payload: data
  };
}

export function getFollowers(): FollowersActionTypes {
  return {
    type: GET_FOLLOWERS
  };
}
