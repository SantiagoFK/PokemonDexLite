import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe, catchError, of, tap} from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  baseUrl = environment.usersBaseUrl
  private user? : User

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>
  {
    return this.http.get<User[]>(this.baseUrl)
  }

  get currentUser(): User | undefined
  {
    if( !this.user ) return undefined
    return { ...this.user }
  }

  login(username: string, password: string)
  {
      this.getUsers().subscribe(users => {
        users.find(u => {
          if (u.username === username && u.password === password) {
            this.user = u;
            localStorage.setItem('userId', u.id.toString())
          }
        })
      })
  }

  signup(username: string, password: string)
  {

  }

  userIsLoggedIn(): Observable<Boolean>
  {
    const userId = localStorage.getItem('userId')
    if( !userId ) return of(false)
      
    return this.http.get<User>(`${this.baseUrl}/${userId}`)
      .pipe(
        tap(u => this.user = u),
        map(u => !!u),
        catchError(err => of(false))
      )
  }

  logout()
  {
    this.user = undefined
    localStorage.clear()
  }

}
