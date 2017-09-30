import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {AuthGuard} from '../auth/auth.guard';

// @NgModule({
//   imports: [RouterModule.forChild([
//     { path: 'user/:name', component: UserComponent, canActivate: [AuthGuard], }
//   ])],
//   exports: [RouterModule]
// })
// export class UserRoutingModule {}

const userRoutes: Routes = [
{ path: 'user/:name', component: UserComponent, canActivate: [AuthGuard], }    
]

export const UsersRouting = RouterModule.forChild(userRoutes);