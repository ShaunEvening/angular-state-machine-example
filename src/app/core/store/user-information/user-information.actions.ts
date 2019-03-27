import { Action } from '@ngrx/store';

export enum UserInformationActionTypes {
  FETCH_USER_INFORMATION = 'user-information/FETCH_USER_INFORMATION',
  FETCH_USER_INFORMATION_SUCCESS = 'user-information/FETCH_USER_INFORMATION_SUCCESS',
  FETCH_USER_INFORMATION_ERROR = 'user-information/FETCH_USER_INFORMATION_ERROR',
  CLEAR_USER = 'user-information/CLEAR_USER',
}

export class FetchUserAction implements Action {
  readonly type = UserInformationActionTypes.FETCH_USER_INFORMATION;
  constructor(public payload: string) {}
}

export class FetchUserSuccessAction implements Action {
  readonly type = UserInformationActionTypes.FETCH_USER_INFORMATION_SUCCESS;
  constructor(public payload) {}
}

export class FetchUserErrorAction implements Action {
  readonly type = UserInformationActionTypes.FETCH_USER_INFORMATION_ERROR;
  constructor(public payload: string) {}
}

export class ClearUserAction implements Action {
  readonly type = UserInformationActionTypes.CLEAR_USER;
}

export type UserInformationActions = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | ClearUserAction;
