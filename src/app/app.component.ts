import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent implements DoCheck, OnInit {
    title = 'Contact Management';
    currentUser: string;

    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit() {
        localStorage.removeItem('currentUser');
    }

    ngDoCheck() {
        this.currentUser = localStorage.getItem('currentUser');
    }

    logout() {
        this.loginService.isLoggedIn = false;
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}