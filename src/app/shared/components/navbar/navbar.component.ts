import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  mobileMode: boolean = false
  loggedIn: boolean = false
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.loggedIn = this.userIsLoggedIn()
  }

  userIsLoggedIn(): boolean
  {
    const userId = localStorage.getItem('userId')

    if( !userId )
      return false
    
    return true
  }

  getUsername(): string | undefined
  {
    const user = this.userService.currentUser

    return user?.username
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
