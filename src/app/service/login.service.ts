import { Injectable, Inject } from '@angular/core';
import { Login } from '../model/login';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { APP_CONFIG } from '../api-provider/app.apiconfig';
import { AppConfig } from '../api-provider/IAppConfig';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  public isLoggedIn = false;
  baseUrl: string;

  constructor(private http: Http,
    @Inject(APP_CONFIG) private config: AppConfig) {
    this.baseUrl = 'api/user';
  }

  login(login: Login) {
    // Sending credentials should be encrypted and we should use a token in
    // subsequent messages
    return this.http.get(this.config.apiEndPoint + this.baseUrl +
      '/' + login.userName + '&' + login.password).map(
      (response: Response) => {
        let reply = response.json();
        if (reply && reply.loggedin === 'true') {
          localStorage.setItem('currentUser', JSON.stringify(login.userName).substr(1).slice(0, -1));
          this.isLoggedIn = true;
          return true;
        } else {
          this.isLoggedIn = false;
          return false;
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  processGetUserResponse(result: any): boolean {
    return true;
  }

  getUsers() {
    return;
  }

  getUser(user: string, password: string) {
    return this.http.get(this.config.apiEndPoint + this.baseUrl + '/' + user + '&' + password, this.getRequestOptions())
      .map((res: Response) => res.json());
  }

  private getRequestOptions() {
    return new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  }
}


