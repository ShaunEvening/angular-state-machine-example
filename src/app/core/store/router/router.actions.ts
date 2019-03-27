import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActionTypes {
  NAVIGATE_TO = 'router/NAVIGATE_TO',
  NAVIGATE_BACK = 'router/NAVIGATE_BACK',
  NAVIGATE_FORWARD = 'router/NAVIGATE_FORWARD',
}

export interface NavigateToActionPayload {
  path: string[];
  query?: object;
  extras?: NavigationExtras;
}

export class NavigateToAction implements Action {
  readonly type = RouterActionTypes.NAVIGATE_TO;

  constructor(public payload: NavigateToActionPayload) {}
}

export class NavigateBackAction implements Action {
  readonly type = RouterActionTypes.NAVIGATE_BACK;
}

export class NavigateForwardAction implements Action {
  readonly type = RouterActionTypes.NAVIGATE_FORWARD;
}

export type RouterActions = NavigateToAction | NavigateBackAction | NavigateForwardAction;
