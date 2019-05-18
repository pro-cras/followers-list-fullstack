import {
  FollowersState,
  FollowersActionTypes,
  SET_FOLLOWERS,
  CLEAR_FOLLOWERS
} from "./types";

const initialState: FollowersState = null;

export function followersReducer(
  state = initialState,
  action: FollowersActionTypes
): FollowersState {
  switch (action.type) {
    case SET_FOLLOWERS:
      return action.payload;
    case CLEAR_FOLLOWERS:
      return null;
    default:
      return state;
  }
}
