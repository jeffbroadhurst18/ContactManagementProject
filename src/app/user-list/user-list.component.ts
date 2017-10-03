import { Component, OnInit } from '@angular/core';
import { User } from '../model/models';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[];

  constructor(private userService: UserService, private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUsers().subscribe((data) => this.processUserResponse(data));
  }

  deleteUser(user: string) {
    this.userService.deleteUser(user).subscribe((data) => console.log('User ' + user + ' deleted'));
    this.userList = this.userList.filter((data) => data.user !== user);
  }

  processUserResponse(data: User[]) {
    this.userList = data;
  }

  addNew() {
    this.router.navigate(['/user', '0']);
  }
}
