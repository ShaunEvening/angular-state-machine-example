import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';

import { RouterActionTypes, NavigateToAction } from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router, private location: Location) {}

  @Effect({ dispatch: false })
  navigateToEffect$ = this.actions$.pipe(
    ofType(RouterActionTypes.NAVIGATE_TO),
    map((action: NavigateToAction) => action.payload),
    tap(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras })),
  );

  @Effect({ dispatch: false })
  navigateBackEffect$ = this.actions$.pipe(
    ofType(RouterActionTypes.NAVIGATE_BACK),
    tap(() => this.location.back()),
  );

  @Effect({ dispatch: false })
  navigateForwardEffect$ = this.actions$.pipe(
    ofType(RouterActionTypes.NAVIGATE_FORWARD),
    tap(() => this.location.forward()),
  );
}
