export interface GithubGetUserResult {
  avatar_url: string;
  login: string;
  location: string;
}

export interface GithubGetUserRepositoryResult {
  name: string;
  description: string;
  open_issues_count: number;
}

export interface GithubRepository {
  name: string;
  description: string;
  openIssuesCount: number;
}
