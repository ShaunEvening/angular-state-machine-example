import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserInformationActionTypes, FetchUserAction, FetchUserSuccessAction } from './user-information.actions';
import { userInformationTransforms } from '../../transforms/user-information.transforms';
import { GithubUserService } from '../../services/github-api/user/user.service';
import { FetchUserRepositoriesAction } from '../user-repositories/user-repositories.actions';
import { NavigateToAction } from '../router';

@Injectable()
export class UserInformationEffects {
  constructor(private actions$: Actions, private githubUserService: GithubUserService) {}

  @Effect()
  searchUserEffect$ = this.actions$.pipe(
    ofType(UserInformationActionTypes.FETCH_USER_INFORMATION),
    map(({ payload }: FetchUserAction) => payload),
    switchMap(username =>
      this.githubUserService.getUser(username).pipe(
        map(userInformationTransforms.transformToClient),
        switchMap(user => [new FetchUserSuccessAction(user), new FetchUserRepositoriesAction()]),
        catchError(() => of(new NavigateToAction({ path: ['search-user'] }))),
      ),
    ),
  );
}
