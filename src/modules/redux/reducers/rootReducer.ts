import { IRootAction } from '../../../types/redux/actions';
import { initialState } from '../state/initialState';

export function rootReducer(state = initialState, action: IRootAction) {
  if ( action.type === 'CHANGE_NAME' ) {
    return { 
      ...state,
      user: {
        ...state.user,
        name: action.name
      }
    }
  } else if ( action.type === 'USER_LOGIN' ) {
    return {
      ...state,
      login: action.login
    }
  } else if ( action.type === 'USER_PHOTO_SELECT' ) {
    return {
      ...state,
      user: {
        ...state.user,
        photo: action.photo
      }
    }
  } 
  return state
}