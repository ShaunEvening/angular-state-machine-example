import { RouterEffects } from './router';
import { UserSearchEffects } from './user-search/user-search.effects';
import { UserRepositoriesEffects } from './user-repositories/user-repositories.effects';
import { UserInformationEffects } from './user-information/user-information.effects';

export const rootEffects = [RouterEffects, UserSearchEffects, UserInformationEffects, UserRepositoriesEffects];
