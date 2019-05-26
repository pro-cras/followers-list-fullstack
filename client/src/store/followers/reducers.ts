import {
  FollowersState,
  FollowersActionTypes,
  SET_FOLLOWERS,
  GET_FOLLOWERS,
  SET_FOLLOWERS_SORTING
} from "./types";

const initialState: FollowersState = {
  requestState: "idle",
  data: null,
  sorting: {
    key: null,
    direction: "ASC"
  }
};

export function followersReducer(
  state = initialState,
  action: FollowersActionTypes
): FollowersState {
  switch (action.type) {
    case SET_FOLLOWERS:
      return {
        ...state,
        requestState: "success",
        data: action.payload
      };
    case GET_FOLLOWERS:
      return {
        ...state,
        requestState: "loading"
      };
    case SET_FOLLOWERS_SORTING:
      return {
        ...state,
        sorting: action.payload
      };
    default:
      return state;
  }
}
