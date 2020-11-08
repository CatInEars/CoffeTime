export interface IAppState {
  login: boolean,
  user: IUserState
};

export interface IUserState {
  name: string,
  photo: any
}