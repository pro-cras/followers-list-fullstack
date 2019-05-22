import { AppState } from "./../index";
import { apiClient } from "../../api/ApiClient";
import { Dispatch } from "redux";
import { setSelectedUser } from "../selectedUser/actions";
import { setFollowers } from "../followers/actions";
import { ThunkAction } from "redux-thunk";

// TODO: Figure out how to write thunks with async/await 😖
export function tryToSetUser(selectedAccountName: string) {
  return function(dispatch: Dispatch, getState: AppState) {
    if (selectedAccountName) {
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
        });
      // try {
      //   const user = await apiClient.getUser(selectedAccountName);

      //   // TODO : handle no such user exists
      //   if (user) {
      //     const data = await apiClient.getFollowers(user.accountName);
      //     dispatch(setSelectedUser(user));
      //     dispatch(setFollowers(data.followers));
      //     return;
      //   }
      // } catch (e) {
      //   console.log("error trying to set user", e);
      //   return;
      // }
    }
  };
}
