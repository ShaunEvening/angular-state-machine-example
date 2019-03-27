import { isNgrxFormsAction, FormGroupState } from 'ngrx-forms';

import { UserRepositoriesActionTypes, UserRepositoriesActions } from './user-repositories.actions';
import {
  userRepositoryFilterFormReducer,
  FilterUserRepositoriesFormState,
  INITIAL_USER_REPOSITORY_FILTER_FORM_GORUP_STATE,
} from './forms/filter-repositories-form.reducer';

export interface UserRepositoriesState {
  filterForm: FormGroupState<FilterUserRepositoriesFormState>;
  repos: any[];
  isLoading: boolean;
  success: boolean;
  error: any;
}

export const INITIAL_USER_REPOSITORIES_STATE: UserRepositoriesState = {
  filterForm: INITIAL_USER_REPOSITORY_FILTER_FORM_GORUP_STATE,
  repos: [],
  isLoading: false,
  success: false,
  error: null,
};

export function userRepositoriesReducer(
  state: UserRepositoriesState = INITIAL_USER_REPOSITORIES_STATE,
  action: UserRepositoriesActions,
) {
  const newState = isNgrxFormsAction(action)
    ? { ...state, filterForm: userRepositoryFilterFormReducer(state.filterForm, action) }
    : state;

  switch (action.type) {
    case UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES: {
      return {
        ...newState,
        isLoading: true,
        success: false,
        error: null,
      };
    }
    case UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_SUCCESS: {
      return {
        ...newState,
        repos: action.payload,
        isLoading: false,
        success: true,
        error: null,
      };
    }
    case UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_ERROR: {
      return {
        ...newState,
        isLoading: false,
        success: false,
        error: action.payload,
      };
    }
    default: {
      return newState;
    }
  }
}
