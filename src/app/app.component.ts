import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent implements DoCheck,OnInit {
    title = 'Jeffs App.';
    currentUser: string;

    ngOnInit() {
        localStorage.removeItem('currentUser');
    }

    ngDoCheck() {
        this.currentUser = localStorage.getItem('currentUser');
    }
}