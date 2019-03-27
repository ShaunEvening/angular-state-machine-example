import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { GithubUserSearchResponse } from './search.types';

@Injectable({
  providedIn: 'root',
})
export class GithubSearchService {
  private basePath = 'https://api.github.com/search';
  private defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  constructor(protected http: HttpClient) {}

  searchUsers(searchString: string) {
    return this.http.get<GithubUserSearchResponse>(`${this.basePath}/users`, {
      headers: new HttpHeaders({ ...this.defaultHeaders }),
      params: new HttpParams({ fromObject: { q: searchString } }),
    });
  }
}
