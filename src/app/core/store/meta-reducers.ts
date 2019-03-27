import { ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../../environments/environment';
import { ApplicationState } from './root-reducer';

export function logger(reducer: ActionReducer<ApplicationState>) {
  return storeLogger({ collapsed: true })(reducer);
}

export const metaReducers = [...(environment.production ? [] : [logger])];
