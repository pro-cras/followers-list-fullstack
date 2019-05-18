export interface IItem {
  name: string;
  accountName: string;
  avatar: string;
}

export interface IUserResponse {
  followers: IItem[];
  total_followers: number;
}
