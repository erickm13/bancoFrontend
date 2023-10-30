import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsersComponent } from './components/login-users/login-users.component';
import { LoginAdminsComponent } from './components/login-admins/login-admins.component';
import { CoverComponent } from './components/cover/cover.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { DashboardAdminsComponent } from './components/dashboard-admins/dashboard-admins.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [

  {path: '', redirectTo: 'cover', pathMatch: 'full'},
  {path: 'cover', component: CoverComponent, pathMatch: 'full'},
  {path: 'error/:id', component: PageErrorComponent, pathMatch: 'full'},
  {path: 'login-users', component: LoginUsersComponent, pathMatch: 'full'},
  {path: 'login-admins', component: LoginAdminsComponent, pathMatch: 'full'},
  {path: 'dashboard-users', component: DashboardUsersComponent, canMatch: [authGuard], pathMatch: 'full'},
  {path: 'dashboard-admins', component: DashboardAdminsComponent, canMatch: [authGuard], pathMatch: 'full'},
  {path: '**', redirectTo: 'error/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
