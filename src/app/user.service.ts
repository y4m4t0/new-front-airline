import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = "http://localhost:3000/api/user/"
  constructor(private http: HttpClient) { }
  private headers = {
    headers: new HttpHeaders ({
      "Content-Type": "application/json"
    })
  }

  private _refresh = new Subject<void>()

  get refresh() {
    return this._refresh
  }
  
  signup(user): Observable<User> {
    return this.http.post<User>(this._url + 'signup/', user, this.headers).pipe(
      tap(() => {
        this._refresh.next()
      })
    )
  }
  login(user): Observable<User> {
    return this.http.post<User>(this._url + 'login/', user, this.headers).pipe(
      tap(() => {
        this._refresh.next()
      })
    )
  }
}
