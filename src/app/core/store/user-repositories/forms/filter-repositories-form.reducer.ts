import { createFormGroupState, createFormStateReducerWithUpdate, validate, updateGroup } from 'ngrx-forms';

export interface FilterUserRepositoriesFormState {
  filterString: string;
}

// Initial state of the form values
export const INITIAL_USER_REPOSITORY_FILTER_FORM_STATE: FilterUserRepositoriesFormState = {
  filterString: '',
};

// Initial state of the form group reducer (form values plus pristine, touched, valid, etc)
export const INITIAL_USER_REPOSITORY_FILTER_FORM_GORUP_STATE = createFormGroupState<FilterUserRepositoriesFormState>(
  'filterRepositoryForm',
  INITIAL_USER_REPOSITORY_FILTER_FORM_STATE,
);

export const userRepositoryFilterFormReducer = createFormStateReducerWithUpdate<FilterUserRepositoriesFormState>(
  updateGroup<FilterUserRepositoriesFormState>({
    filterString: validate([]),
  }),
);
