export interface IUser {
  name: string;
  accountName: string;
  avatar: string;
}

export interface IUserResponse {
  followers: IUser[];
  total_followers: number;
}
