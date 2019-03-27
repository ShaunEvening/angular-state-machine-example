import { Action } from '@ngrx/store';

export enum UserSearchActionTypes {
  SET_USER_SEARCH_STRING = 'user-search/SET_USER_SEARCH_STRING',
  SEARCH_FOR_USER = 'user-search/SEARCH_FOR_USER',
  SEARCH_FOR_USER_SUCCESS = 'user-search/SEARCH_FOR_USER_SUCCESS',
  SEARCH_FOR_USER_ERROR = 'user-search/SEARCH_FOR_USER_ERROR',
  CLEAR_REDUCER = 'user-search/CLEAR_REDUCER',
}

export class SetUserSearchStringAction implements Action {
  readonly type = UserSearchActionTypes.SET_USER_SEARCH_STRING;
  constructor(public payload: string) {}
}

export class SearchForUserAction implements Action {
  readonly type = UserSearchActionTypes.SEARCH_FOR_USER;
}

export class SearchForUserSuccessAction implements Action {
  readonly type = UserSearchActionTypes.SEARCH_FOR_USER_SUCCESS;
  constructor(public payload) {}
}

export class SearchForUserErrorAction implements Action {
  readonly type = UserSearchActionTypes.SEARCH_FOR_USER_ERROR;
  constructor(public payload: any) {}
}

export class ClearUserSearchAction implements Action {
  readonly type = UserSearchActionTypes.CLEAR_REDUCER;
}

export type UserSearchActions =
  | SetUserSearchStringAction
  | SearchForUserAction
  | SearchForUserSuccessAction
  | SearchForUserErrorAction
  | ClearUserSearchAction;
