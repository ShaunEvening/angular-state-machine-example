import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, withLatestFrom, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ApplicationState } from '../root-reducer';
import { GithubUserService } from '../../services/github-api/user/user.service';
import {
  UserRepositoriesActionTypes,
  FetchUserRepositoriesSuccessAction,
  FetchUserRepositoriesErrorAction,
} from './user-repositories.actions';
import { selectUserInformation } from '../user-information/user-information.selectors';
import { GithubRepositoriesTransforms } from '../../transforms/user-repositories.transforms';

@Injectable()
export class UserRepositoriesEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private githubUserService: GithubUserService,
  ) {}

  @Effect()
  searchUserRepositoriesEffect$ = this.actions$.pipe(
    ofType(UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES),
    withLatestFrom(this.store$.pipe(select(selectUserInformation))),
    switchMap(([_, { username }]) =>
      this.githubUserService.getUserRepositories(username).pipe(
        map(GithubRepositoriesTransforms.transformToClient),
        switchMap(repos => [new FetchUserRepositoriesSuccessAction(repos)]),
        catchError(() => of(new FetchUserRepositoriesErrorAction('OOPS!'))),
      ),
    ),
  );
}
