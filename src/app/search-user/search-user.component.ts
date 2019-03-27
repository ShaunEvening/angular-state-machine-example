import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';

import { ApplicationState } from '../core/store/root-reducer';
import {
  selectUserSearchForm,
  selectUserSearchResults,
  selectUserSearchLoadingStatus,
} from '../core/store/user-search/user-search.selectors';
import { SearchForUserAction } from '../core/store/user-search/user-search.actions';
import { NavigateToAction } from '../core/store/router';
import { UserSearchFormState } from '../core/store/user-search/forms/user-search-form.reducer';
import { GithubUser } from '../core/services/github-api/search/search.types';
import { AsyncLoadingStatus } from '../core/types/common.types';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent {
  userSearchLoadingStatus$: Observable<AsyncLoadingStatus>;
  userSearchForm$: Observable<FormGroupState<UserSearchFormState>>;
  userResults$: Observable<GithubUser[]>;

  constructor(private store$: Store<ApplicationState>) {
    this.userSearchLoadingStatus$ = this.store$.pipe(select(selectUserSearchLoadingStatus));
    this.userSearchForm$ = this.store$.pipe(select(selectUserSearchForm));
    this.userResults$ = this.store$.pipe(select(selectUserSearchResults));
  }

  onSubmit() {
    // Fires a SearchForUserAction triggering the
    // searchUserEffect$ effect in "src/app/core/store/user-search/user-search.effects.ts"
    this.store$.dispatch(new SearchForUserAction());
  }

  navigateToUserPage(username: string) {
    // Navigate to the user/:username route
    this.store$.dispatch(new NavigateToAction({ path: [`user/${username}`] }));
  }
}
