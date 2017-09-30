import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list.routing.module';
import { UserService} from '../service/user.service';
import { UserModule } from '../user/user.module';
import { UsersRouting} from '../user/user.routing.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, UserListRoutingModule, UserModule, UsersRouting,
  ],
  declarations: [UserListComponent],
  providers: [UserService]
})
export class UserListModule { }