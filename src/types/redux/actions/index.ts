export interface IUserNameAction {
  type: 'CHANGE_NAME',
  name: string
}

export interface IUserLoginAction {
  type: 'USER_LOGIN',
  login: true
}

export interface IUserPhotoAction {
  type: 'USER_PHOTO_SELECT',
  photo: any
}

export interface IChangeFavoriteAction {
  type: 'CHANGE_FAVORITE',
  shopIndex: number,
  drinkIndex: number,
  newValue: boolean
}

export type IRootAction = IUserNameAction | IUserLoginAction | IUserPhotoAction | IChangeFavoriteAction;