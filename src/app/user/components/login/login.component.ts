import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent
{
  userForm: FormGroup = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, 
              private userService: UserService, 
              private router: Router){ }

  login()
  {
    if(this.userForm.valid)
    {
      const username = this.userForm.controls['username'].value
      const password = this.userForm.controls['password'].value

      const user = this.userService.login(username, password)
      this.router.navigate([''])
    }
  }

  validateField(field: string, errorType: string): boolean
  {
    return this.userForm.controls[field].getError(errorType)
      && this.userForm.controls[field].touched
  }
}
