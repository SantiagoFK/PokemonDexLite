import { Component } from '@angular/core';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileMode: boolean = false
  loggedIn: boolean = false
  constructor(private userService: UserService){}

  userIsLoggedIn(): boolean
  {
    this.userService.userIsLoggedIn().subscribe({
      next: (isLoggedIn) => {
        this.loggedIn = isLoggedIn
        
      },
      error: (err) => {
        alert(err)
      }
    })

    return this.loggedIn
  }

  getUsername(): string
  {
    return 'User'
  }

  logout()
  {
    return this.userService.logout()
  }

  openSideBar(){
    this.mobileMode = true 
  }

  closeSideBar()
  {
    this.mobileMode = false
  }
}
