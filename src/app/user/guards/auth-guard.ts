import { inject } from "@angular/core"
import { UserService } from "../services/user.service"
import { Router } from "@angular/router"
import { User } from "../interfaces/user.interface"
import { Observable, tap } from "rxjs"

function checkIfUserIsLoggedIn(): boolean | Observable<Boolean>
{
    const userService = inject(UserService)
    const router = inject(Router)
    const user: User | undefined = userService.currentUser
    
    return userService.userIsLoggedIn().pipe(
        tap( isLoggedIn => {
            if( ! isLoggedIn ) router.navigate(['user/login'])
        })
    )
}

export const AuthGuard = () => {
    return checkIfUserIsLoggedIn()
}