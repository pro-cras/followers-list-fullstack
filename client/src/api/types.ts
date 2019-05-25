export interface IUser {
  name: string;
  accountName: string;
  avatar: string;
}

export type APIRequestState =
  | RequestSuccess
  | RequestFail
  | RequestIdle
  | RequestLoading;

type RequestSuccess = "success";

type RequestFail = "fail";

type RequestIdle = "idle";

type RequestLoading = "loading";
