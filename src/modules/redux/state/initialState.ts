import { IAppState } from '../../../types/redux/state/IAppState';
import { coffeShopsData } from '../../data/coffeShops/coffeShopsData';

export const initialState: IAppState = {
  login: false,
  user: {
    name: '',
    photo: null
  },
  coffeShopsData
};