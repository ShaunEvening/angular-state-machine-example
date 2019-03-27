import { GithubGetUserResult } from '../services/github-api/user/user.types';
import { GithubUser } from '../services/github-api/search/search.types';

const transformToClient = ({ login, avatar_url, location }: GithubGetUserResult): GithubUser => ({
  username: login,
  imageUrl: avatar_url,
  location,
});

export const userInformationTransforms = {
  transformToClient,
};
