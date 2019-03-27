import { Action } from '@ngrx/store';

export enum UserRepositoriesActionTypes {
  'FETCH_USER_REPOSITORIES' = 'user-repositories/FETCH_USER_REPOSITORIES',
  'FETCH_USER_REPOSITORIES_SUCCESS' = 'user-repositories/FETCH_USER_REPOSITORIES_SUCCESS',
  'FETCH_USER_REPOSITORIES_ERROR' = 'user-repositories/FETCH_USER_REPOSITORIES_ERROR',
}

export class FetchUserRepositoriesAction implements Action {
  readonly type = UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES;
}

export class FetchUserRepositoriesSuccessAction implements Action {
  readonly type = UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_SUCCESS;
  constructor(public payload) {}
}

export class FetchUserRepositoriesErrorAction implements Action {
  readonly type = UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_ERROR;
  constructor(public payload: string) {}
}

export type UserRepositoriesActions =
  | FetchUserRepositoriesAction
  | FetchUserRepositoriesSuccessAction
  | FetchUserRepositoriesErrorAction;
