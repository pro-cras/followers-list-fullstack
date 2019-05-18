import { sortingReducer as sorting } from "./sorting/reducers";
import { selectedUserReducer as selectedUser } from "./selectedUser/reducers";
import { followersReducer as followers } from "./followers/reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  followers,
  sorting,
  selectedUser
});

export type AppState = ReturnType<typeof rootReducer>;
