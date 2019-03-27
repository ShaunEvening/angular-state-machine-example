import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroupState } from 'ngrx-forms';

import { AsyncLoadingStatus } from '../../core/types/common.types';
import { ApplicationState } from '../../core/store/root-reducer';
import { GithubRepository } from '../../core/services/github-api/user/user.types';
import {
  selectFilteredRepositories,
  selectUserRepositoriesFilterForm,
  selectUserRepositoryLoadingStatus,
} from '../../core/store/user-repositories/user-repositories.selectors';
import { FilterUserRepositoriesFormState } from '../../core/store/user-repositories/forms/filter-repositories-form.reducer';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent {
  repositories$: Observable<GithubRepository[]>;
  filterForm$: Observable<FormGroupState<FilterUserRepositoriesFormState>>;
  repositoryLoadingState$: Observable<AsyncLoadingStatus>;

  constructor(private store$: Store<ApplicationState>) {
    this.repositories$ = this.store$.pipe(select(selectFilteredRepositories));
    this.filterForm$ = this.store$.pipe(select(selectUserRepositoriesFilterForm));
    this.repositoryLoadingState$ = this.store$.pipe(select(selectUserRepositoryLoadingStatus));
  }
}
