import { inject } from "@angular/core"
import { UserService } from "../../user/services/user.service"
import { Router } from "@angular/router"
import { Observable, tap, map } from "rxjs"

function checkIfUserAlreadyLoggedIn(): boolean | Observable<boolean>
{
    const userService = inject(UserService)
    const router = inject(Router)
    return userService.userIsLoggedIn().pipe(
        tap( isLoggedIn => {
            if( isLoggedIn ) 
                router.navigate(['home'])
            
        }),
        map( isLoggedIn => !isLoggedIn)
    )
}

export const LoginGuard = () => {
    return checkIfUserAlreadyLoggedIn()
}