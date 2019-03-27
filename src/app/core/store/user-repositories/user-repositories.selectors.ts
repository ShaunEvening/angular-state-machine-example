import { createSelector } from '@ngrx/store';

import { ApplicationState } from '../root-reducer';
import { UserRepositoriesState } from './user-repositories.reducer';

export const selectUserRepositoriesState = (state: ApplicationState): UserRepositoriesState =>
  state.userRepositories;

export const selectUserRepositoriesFilterForm = createSelector(
  selectUserRepositoriesState,
  ({ filterForm }) => filterForm,
);

export const selectUserRepositories = createSelector(
  selectUserRepositoriesState,
  ({ repos }) => repos,
);

export const selectFilteredRepositories = createSelector(
  selectUserRepositories,
  selectUserRepositoriesFilterForm,
  (repos, filterForm) =>
    filterForm.value.filterString.length
      ? repos.filter(repo => repo.name.includes(filterForm.value.filterString))
      : repos,
);

export const selectUserRepositoryLoadingStatus = createSelector(
  selectUserRepositoriesState,
  ({ isLoading, success, error }) => ({ isLoading, success, error }),
);
