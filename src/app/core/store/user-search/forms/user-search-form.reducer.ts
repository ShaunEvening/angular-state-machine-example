import { createFormGroupState, createFormStateReducerWithUpdate, validate, updateGroup } from 'ngrx-forms';
import { required } from 'ngrx-forms/validation';

export interface UserSearchFormState {
  username: string;
}

// Initial state of the form values
export const INITIAL_USER_SEARCH_FORM_STATE: UserSearchFormState = {
  username: '',
};

// Initial state of the form group reducer (form values plus pristine, touched, valid, etc)
export const INITIAL_USER_SEARCH_FORM_GROUP_STATE = createFormGroupState<UserSearchFormState>(
  'userSearchForm',
  INITIAL_USER_SEARCH_FORM_STATE,
);

export const userSearchFormReducer = createFormStateReducerWithUpdate<UserSearchFormState>(
  updateGroup<UserSearchFormState>({
    username: validate(required),
  }),
);
