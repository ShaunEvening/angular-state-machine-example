export interface GithubUserSearchResult {
  login: string;
  avatar_url: string;
}

export interface GithubUserSearchResponse {
  items: GithubUserSearchResult[];
}

export interface GithubUser {
  username: string;
  imageUrl: string;
  location: string;
}
