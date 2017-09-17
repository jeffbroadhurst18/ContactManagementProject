import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

import { Login } from '../model/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login();
  isValidUser: boolean;
  showError: boolean;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.showError = false;
  }

  loginUser() {
    this.showError = false;
    let result = this.loginService.login(this.login).subscribe((result) => {
      if (result) {
        this.router.navigate(['/contact-list']);
      } else {
        this.isValidUser = false;
        this.showError = true;
      }
    });
  }
}
