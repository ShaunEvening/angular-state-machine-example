import { UserInformationActionTypes, UserInformationActions } from './user-information.actions';

export interface UserInformationState {
  isLoading: boolean;
  success: boolean;
  error: any;
  username: string;
  imageUrl: string;
  location: string;
}

export const INITIAL_USER_INFORMATION_STATE: UserInformationState = {
  isLoading: false,
  success: false,
  error: null,
  username: '',
  imageUrl: '',
  location: '',
};

export function userInformationReducer(
  state: UserInformationState = INITIAL_USER_INFORMATION_STATE,
  action: UserInformationActions,
) {
  switch (action.type) {
    case UserInformationActionTypes.FETCH_USER_INFORMATION: {
      return {
        ...state,
        isLoading: true,
        success: false,
        error: null,
      };
    }
    case UserInformationActionTypes.FETCH_USER_INFORMATION_SUCCESS: {
      return {
        ...state,
        username: action.payload.username,
        imageUrl: action.payload.imageUrl,
        location: action.payload.location,
        isLoading: false,
        success: true,
        error: null,
      };
    }
    case UserInformationActionTypes.FETCH_USER_INFORMATION_ERROR: {
      return {
        ...state,
        isLoading: false,
        success: false,
        error: action.payload,
      };
    }
    case UserInformationActionTypes.CLEAR_USER: {
      return {
        ...INITIAL_USER_INFORMATION_STATE,
      };
    }
    default: {
      return state;
    }
  }
}
