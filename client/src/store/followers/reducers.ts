import {
  FollowersState,
  FollowersActionTypes,
  SET_FOLLOWERS,
  GET_FOLLOWERS
} from "./types";

const initialState: FollowersState = {
  requestState: "idle",
  data: null
};

export function followersReducer(
  state = initialState,
  action: FollowersActionTypes
): FollowersState {
  switch (action.type) {
    case SET_FOLLOWERS:
      return {
        requestState: "success",
        data: { ...action.payload }
      };
    case GET_FOLLOWERS:
      return {
        ...state,
        requestState: "loading"
      };
    default:
      return state;
  }
}
