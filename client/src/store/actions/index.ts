import { RootState } from "./../index";
import { apiClient } from "../../api/ApiClient";
import { Dispatch } from "redux";
import { setSelectedUser } from "../selectedUser/actions";
import { setFollowers, getFollowers } from "../followers/actions";
import { setIsLoading } from "../app/actions";

// TODO: Figure out how to write thunks with async/await 😖
export function tryToSetUser(selectedAccountName: string) {
  return function(dispatch: Dispatch, getState: RootState) {
    if (selectedAccountName) {
      dispatch(setIsLoading(true));
      return apiClient
        .fetchUser(selectedAccountName)
        .then(user => {
          dispatch(getFollowers());
          apiClient.fetchFollowers(user.accountName).then(followersResponse => {
            dispatch(setSelectedUser(user));
            dispatch(setFollowers(followersResponse));
          });
        })
        .catch(e => {
          console.log("error trying to set user", e);
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        });
    }
  };
}

export function fetchFollowersPage(direction: "next" | "prev") {
  return function(dispatch: Dispatch, getState: RootState) {
    // @ts-ignore Typescript doesn't like getState :/
    const state: RootState = getState();

    if (!state.selectedUser) {
      return;
    }
    if (!state.followers.data) {
      return;
    }
    dispatch(getFollowers());
    const selectedUser = state.selectedUser;
    const cursor =
      direction === "next"
        ? state.followers.data.next_cursor
        : state.followers.data.previous_cursor;
    return apiClient
      .fetchFollowers(selectedUser.accountName, cursor)
      .then(followersResponse => {
        dispatch(setFollowers(followersResponse));
      })
      .catch(e => {
        console.log("error trying to fetch followers page", e);
      });
    // TODO: error handling
  };
}
