import { GithubUserSearchResult, GithubUser } from '../services/github-api/search/search.types';

const transformFromClient = (usersArray: GithubUserSearchResult[]): GithubUser[] =>
  usersArray.map(({ login, avatar_url }) => ({
    username: login,
    imageUrl: avatar_url,
    location: '',
  }));

export const userSearchTransforms = {
  transformFromClient,
};
