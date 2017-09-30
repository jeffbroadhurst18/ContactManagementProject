import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { AuthGuard} from '../auth/auth.guard';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard], }
  ])],
  exports: [RouterModule]
})
export class UserListRoutingModule {}
