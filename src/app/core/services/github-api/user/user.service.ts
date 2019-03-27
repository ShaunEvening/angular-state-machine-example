import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { GithubGetUserResult, GithubGetUserRepositoryResult } from './user.types';

@Injectable({
  providedIn: 'root',
})
export class GithubUserService {
  private basePath = 'https://api.github.com/users';
  private defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  constructor(protected http: HttpClient) {}

  getUser(username: string) {
    return this.http.get<GithubGetUserResult>(`${this.basePath}/${username}`, {
      headers: new HttpHeaders({ ...this.defaultHeaders }),
    });
  }

  getUserRepositories(username: string) {
    return this.http.get<GithubGetUserRepositoryResult[]>(`${this.basePath}/${username}/repos`, {
      headers: new HttpHeaders({ ...this.defaultHeaders }),
    });
  }
}
