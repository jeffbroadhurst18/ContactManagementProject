import { Component, OnInit } from '@angular/core';
import { User } from '../model/models';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  newUser: User;
  userName: string;
  userForm: FormGroup;
  isNew: Boolean;
  hideLog: Boolean;
  roles: string[];
  clickedSave: Boolean;

  constructor(private route: ActivatedRoute, private userService: UserService,
    private router: Router, private fb: FormBuilder) {
    this.user = new User();
    this.isNew = false;
    this.hideLog = true;
  }

  ngOnInit() {
    this.roles = ['user', 'admin'];
    this.clickedSave = false;
    this.buildForm();
    this.route.paramMap.subscribe((data) => this.userName = data.get('name'));
    if (this.userName === '0') {
      this.user = new User();
      this.isNew = true;
    } else {
      this.userService.getUser(this.userName).subscribe((data) => this.processUserResponse(data));
    }
  }

  buildForm() {
    this.userForm = this.fb.group({
      'name': ['', Validators.required],
      'password': ['', Validators.required],
      'repeatPassword': ['', Validators.required],
      'role': ['', Validators.required],
    });
  }

  processUserResponse(data: any[]) {
    this.user.id = data[0].id;
    this.user.name = data[0].user;
    this.user.password = data[0].password;
    //this.user.repeatPassword = data[0].repeatPassword;
    this.user.role = data[0].role;
  }

  submit() {
    this.clickedSave = true;
    if (this.isNew) {
      this.userService.addUser(this.user).subscribe((data) => this.afterSave());
    } else {
      this.userService.updateUser(this.user).subscribe((data) => this.afterSave());
    }
  }

  afterSave() {
    this.router.navigate(['/user-list']);
  }

  cancel() {
    this.router.navigate(['/user-list']);
  }



}

