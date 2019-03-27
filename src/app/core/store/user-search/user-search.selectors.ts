import { createSelector } from '@ngrx/store';

import { AsyncLoadingStatus } from '../../types/common.types';
import { ApplicationState } from '../root-reducer';
import { UserSearchState } from './user-search.reducer';

export const selectUserSearchState = (state: ApplicationState): UserSearchState => state.userSearch;

export const selectUserSearchForm = createSelector(
  selectUserSearchState,
  userSearchState => userSearchState.form,
);

export const selectUserSearchUsername = createSelector(
  selectUserSearchForm,
  form => form.value.username || '',
);

export const selectUserSearchResults = createSelector(
  selectUserSearchState,
  ({ users }) => users,
);

export const selectUserSearchLoadingStatus = createSelector(
  selectUserSearchState,
  ({ isLoading, success, error }: AsyncLoadingStatus): AsyncLoadingStatus => ({
    isLoading,
    success,
    error,
  }),
);
