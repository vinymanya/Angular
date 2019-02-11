import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { GitHubUser } from "./github-user";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {
  base: string = "https://api.github.com/users";
  constructor(private _http: Http) {}

  retrieveGitHubUser(username: string): Observable<GitHubUser> {
    return this._http
      .get(`${this.base}/${username}`)
      .map(response => response.json());
  }
}
