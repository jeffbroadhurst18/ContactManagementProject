import { Injectable, Inject } from '@angular/core';
import { User, ReducedUser } from '../model/models';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { APP_CONFIG } from '../api-provider/app.apiconfig';
import { AppConfig } from '../api-provider/IAppConfig';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  users: Array<User>;
  user: User;
  baseUrl: string;
  constructor(private http: Http,
    @Inject(APP_CONFIG) private config: AppConfig) {
    this.baseUrl = 'api/user';
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.config.apiEndPoint + this.baseUrl).map((res: Response) => res.json());
  }

  addUser(user: User) {
    let reducedUser: ReducedUser = this.convertUser(user);
    return this.http.post(this.config.apiEndPoint + this.baseUrl, JSON.stringify(reducedUser), this.getRequestOptions())
      .map((res: Response) => res.json());
  }

  updateUser(user: User) {
    let reducedUser: ReducedUser = this.convertUser(user);
    return this.http.put(this.config.apiEndPoint + this.baseUrl, JSON.stringify(user), this.getRequestOptions())
      .map((res: Response) => res.json());
  }

  getUser(name: string) {
    return this.http.get(this.config.apiEndPoint + this.baseUrl + '/get/' + name, this.getRequestOptions())
      .map((res: Response) => res.json());
  }

  deleteUser(user: string) {
    return this.http.delete(this.config.apiEndPoint + this.baseUrl + '/' + user, this.getRequestOptions()).
      map((res: Response) => res.json());

  }

  convertUser(user: User): ReducedUser {
    let reducedUser: ReducedUser = new ReducedUser();
    reducedUser.user = user.user;
    reducedUser.password = user.password;
    reducedUser.role = user.role;
    return reducedUser;
  }

  private getRequestOptions() {
    return new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  }
}
