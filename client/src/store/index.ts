import { sortingReducer as sorting } from "./sorting/reducers";
import { selectedUserReducer as selectedUser } from "./selectedUser/reducers";
import { followersReducer as followers } from "./followers/reducers";
import { appStateReducer as app } from "./app/reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  followers,
  sorting,
  selectedUser,
  app
});

export type RootState = ReturnType<typeof rootReducer>;
