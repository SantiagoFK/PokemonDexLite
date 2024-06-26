import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginGuard } from './guards/login-guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate:[LoginGuard], title: 'Login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
