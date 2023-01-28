import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Userclient } from 'src/app/auth/shared/userclient.model';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {
  REST_API: string = 'http://localhost:3000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get all objects
  getReparations(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/custumer/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  getReparation(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/custumer/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  getAllvoitureAt(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/carsAt`);
  }
  getAllvoiture(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/cars`);
  }
  getVoituresAt() {
    return this.httpClient.get(`${this.REST_API}/custumer`);
  }

  // Get single object
  PrendreEnMain(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/custumer/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  Finir(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/custumer/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
