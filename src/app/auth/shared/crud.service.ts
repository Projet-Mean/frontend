import { Injectable } from '@angular/core';
import { Userclient } from './userclient.model';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }

   // Add
   AddUserclient(data: Userclient): Observable<any> {
    let API_URL = `${this.REST_API}/signup`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
 
  // Get all objects
  GetUserclient() {
    return this.httpClient.get(`${this.REST_API}/custumer`);
  }
 
  // Get single object
  GetOneUserclient(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/custumer/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
 
  // Update
  updateUserclient(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-custumer/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
 
  // Delete
  deleteUserclient(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
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




