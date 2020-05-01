import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private headers = {
    headers: new HttpHeaders ({
      "Content-Type": "application/json"
    })
  }
  private _url: string = "http://localhost:3000/api/flights/"
  constructor(private http: HttpClient) { }

  private _refresh = new Subject<void>()

  get refresh() {
    return this._refresh
  }
  
  getFlights(): Observable<any[]> {
    return this.http.get<any[]>(this._url)
  }
  deleteFlight(id): Observable<any> {
    return this.http.delete(this._url + id + '/')
    .pipe(
      tap(() => {
        this._refresh.next()
      })
    )
  }
  createFlight(flight): Observable<any> {
    return this.http.post(this._url, flight, this.headers)
      .pipe(
        tap(() => {
          this._refresh.next()
        })
      )
  }
  updateFlight(flight): Observable<any> {
    return this.http.put(this._url, flight, this.headers)
    .pipe(
      tap(() => {
        this._refresh.next()
      })
    )
  }
}

