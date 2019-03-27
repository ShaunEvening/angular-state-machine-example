import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { UserSearchState, userSearchReducer } from './user-search/user-search.reducer';
import { UserInformationState, userInformationReducer } from './user-information/user-information.reducer';
import { userRepositoriesReducer, UserRepositoriesState } from './user-repositories/user-repositories.reducer';

export interface ApplicationState {
  router: RouterReducerState;
  userSearch: UserSearchState;
  userInformation: UserInformationState;
  userRepositories: UserRepositoriesState;
}

export const rootReducer = {
  router: routerReducer,
  userSearch: userSearchReducer,
  userInformation: userInformationReducer,
  userRepositories: userRepositoriesReducer,
};
