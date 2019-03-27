import { FormGroupState, isNgrxFormsAction } from 'ngrx-forms';

import { UserSearchActions, UserSearchActionTypes } from './user-search.actions';
import {
  INITIAL_USER_SEARCH_FORM_GROUP_STATE,
  UserSearchFormState,
  userSearchFormReducer,
} from './forms/user-search-form.reducer';
import { GithubUser } from '../../services/github-api/search/search.types';

export interface UserSearchState {
  form: FormGroupState<UserSearchFormState>;
  isLoading: boolean;
  success: boolean;
  error: any;
  users: GithubUser[];
}

export const INITIAL_SEARCH_USER_STATE: UserSearchState = {
  form: INITIAL_USER_SEARCH_FORM_GROUP_STATE,
  isLoading: false,
  success: false,
  error: null,
  users: [],
};

export function userSearchReducer(
  state: UserSearchState = INITIAL_SEARCH_USER_STATE,
  action: UserSearchActions,
) {
  const newState = isNgrxFormsAction(action)
    ? { ...state, form: userSearchFormReducer(state.form, action) }
    : state;

  switch (action.type) {
    case UserSearchActionTypes.SEARCH_FOR_USER: {
      return {
        ...newState,
        isLoading: true,
        success: false,
        error: null,
      };
    }
    case UserSearchActionTypes.SEARCH_FOR_USER_SUCCESS: {
      return {
        ...newState,
        isLoading: false,
        success: true,
        error: null,
        users: action.payload,
      };
    }
    case UserSearchActionTypes.SEARCH_FOR_USER_ERROR: {
      return {
        ...newState,
        isLoading: false,
        success: false,
        error: action.payload,
      };
    }
    case UserSearchActionTypes.CLEAR_REDUCER: {
      return {
        ...INITIAL_SEARCH_USER_STATE,
      };
    }
    default: {
      return newState;
    }
  }
}
