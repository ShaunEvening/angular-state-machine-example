import {
  GithubGetUserRepositoryResult,
  GithubRepository,
} from '../services/github-api/user/user.types';

const transformToClient = (repos: GithubGetUserRepositoryResult[]): GithubRepository[] =>
  repos.map(({ name, description, open_issues_count }) => ({
    name,
    description,
    openIssuesCount: open_issues_count,
  }));

export const GithubRepositoriesTransforms = {
  transformToClient,
};
