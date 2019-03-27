import { ApplicationState } from '../root-reducer';
import { UserInformationState } from './user-information.reducer';

export const selectUserInformation = (state: ApplicationState): UserInformationState =>
  state.userInformation;
