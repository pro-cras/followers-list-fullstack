import {
  SET_FOLLOWERS,
  FollowersActionTypes,
  FollowerListData,
  GET_FOLLOWERS,
  SortingDirection,
  SET_FOLLOWERS_SORTING,
  FollowerSortingKey
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

export function setFollowersSorting(
  direction: SortingDirection,
  key: FollowerSortingKey
): FollowersActionTypes {
  return {
    type: SET_FOLLOWERS_SORTING,
    payload: { direction, key }
  };
}
