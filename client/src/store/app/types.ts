import { AppState } from "./types";
import { IUser } from "../../api/types";
import { bool } from "prop-types";

export interface AppState {
  isLoading: boolean;
}

export const SET_IS_LOADING = "SET_IS_LOADING";

export interface SetIsLoading {
  type: typeof SET_IS_LOADING;
  payload: AppState["isLoading"];
}

export type AppStateActionTypes = SetIsLoading;
