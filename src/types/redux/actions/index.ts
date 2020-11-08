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

export type IRootAction = IUserNameAction | IUserLoginAction | IUserPhotoAction;