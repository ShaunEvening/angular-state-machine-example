import { RouterReducerState } from '@ngrx/router-store';

import { ApplicationState } from '../root-reducer';

export const selectRouterState = (state: ApplicationState): RouterReducerState => state.router;
