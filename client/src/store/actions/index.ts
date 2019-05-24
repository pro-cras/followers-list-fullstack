import { RootState } from "./../index";
import { apiClient } from "../../api/ApiClient";
import { Dispatch } from "redux";
import { setSelectedUser } from "../selectedUser/actions";
import { setFollowers } from "../followers/actions";
import { setIsLoading } from "../app/actions";

// TODO: Figure out how to write thunks with async/await 😖
export function tryToSetUser(selectedAccountName: string) {
  return function(dispatch: Dispatch, getState: RootState) {
    if (selectedAccountName) {
      dispatch(setIsLoading(true));
      return apiClient
        .getUser(selectedAccountName) // hard-coded one for now, The mock API servicehas limited users
        .then(user => {
          apiClient.getFollowers(user.accountName).then(followersResponse => {
            dispatch(setSelectedUser(user));
            dispatch(setFollowers(followersResponse.followers));
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
