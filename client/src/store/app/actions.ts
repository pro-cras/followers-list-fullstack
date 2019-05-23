import { AppStateActionTypes, SET_IS_LOADING } from "./types";

export function setIsLoading(isLoading: boolean): AppStateActionTypes {
  return {
    type: SET_IS_LOADING,
    payload: isLoading
  };
}
