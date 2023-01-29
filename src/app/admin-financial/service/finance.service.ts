import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  REST_API: string = 'http://localhost:3000';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {
  }

   // Add
  getAllDep(): Observable<any> {
    let API_URL = `${this.REST_API}/api/depense/depense`;
    return this.httpClient.get(API_URL)
      .pipe(
        catchError(this.handleError)
      )
  }
  getAllCum(): Observable<any> {
    let API_URL = `${this.REST_API}/api/entree/depense`;
    return this.httpClient.get(API_URL)
      .pipe(
        catchError(this.handleError)
      )
  }
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
