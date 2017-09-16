// import { Injectable, Inject } from '@angular/core';
// import { Login } from '../model/login';
// import { HttpClient, HttpHeaders, } from '@angular/common/http';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
// import { APP_CONFIG } from '../api-provider/app.apiconfig';
// import { AppConfig } from '../api-provider/IAppConfig';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'

// @Injectable()
// export class UserService {
//   contacts: Array<Login>;
//   contact: Login;
//   baseUrl: string;
//   constructor(private http: Http,
//     @Inject(APP_CONFIG) private config: AppConfig) {
//     this.baseUrl = 'api/user';
//   }

//   getUsers() {
//     return this.http.get(this.config.apiEndPoint + this.baseUrl).map((res: Response) => res.json());
//   }

//   getUser(user: string, password: string) {
//     return this.http.get(this.config.apiEndPoint + this.baseUrl + '/' + id, this.getRequestOptions())
//       .map((res: Response) => res.json());
//   }

//   private getRequestOptions() {
//     return new RequestOptions({
//       headers: new Headers({
//         "Content-Type": "application/json"
//       })
//     });
//   }
// }

