import { IAppState } from '../../../types/redux/state/IAppState';

export const initialState: IAppState = {
  login: false,
  user: {
    name: '',
    photo: null
  }
};