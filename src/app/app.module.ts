import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsersComponent } from './components/login-users/login-users.component';
import { LoginAdminsComponent } from './components/login-admins/login-admins.component';
import { CoverComponent } from './components/cover/cover.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { DashboardUsersComponent } from './components/dashboard-users/dashboard-users.component';
import { DashboardAdminsComponent } from './components/dashboard-admins/dashboard-admins.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUsersComponent,
    LoginAdminsComponent,
    CoverComponent,
    PageErrorComponent,
    SpinnerComponent,
    RegisterUserComponent,
    RegisterAdminComponent,
    DashboardUsersComponent,
    DashboardAdminsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
