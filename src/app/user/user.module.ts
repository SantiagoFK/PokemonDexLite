import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginPageComponent
  ],
  imports: [
    SharedModule, 
    UserRoutingModule
  ]
})
export class UserModule { }
