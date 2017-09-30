import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UsersRouting } from './user.routing.module';
import { UserService } from '../service/user.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, UsersRouting, ReactiveFormsModule
  ],
  declarations: [UserComponent],
  providers: [UserService]
})
export class UserModule { }

