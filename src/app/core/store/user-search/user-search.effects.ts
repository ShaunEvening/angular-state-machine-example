import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, withLatestFrom, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApplicationState } from '../root-reducer';
import {
  UserSearchActionTypes,
  SearchForUserSuccessAction,
  SearchForUserErrorAction,
} from './user-search.actions';
import { selectUserSearchUsername } from './user-search.selectors';
import { userSearchTransforms } from '../../transforms/user-search.transforms';
import { GithubSearchService } from '../../services/github-api/search/search.service';

@Injectable()
export class UserSearchEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private githubSearchService: GithubSearchService,
  ) {}

  @Effect()
  searchUserEffect$ = this.actions$.pipe(
    ofType(UserSearchActionTypes.SEARCH_FOR_USER),
    withLatestFrom(this.store$.pipe(select(selectUserSearchUsername))),
    switchMap(([_, username]) =>
      this.githubSearchService.searchUsers(username).pipe(
        map(({ items }) => items),
        map(userSearchTransforms.transformFromClient),
        switchMap(users => [new SearchForUserSuccessAction(users)]),
        catchError(() => of(new SearchForUserErrorAction('No user profile found'))),
      ),
    ),
  );
}
