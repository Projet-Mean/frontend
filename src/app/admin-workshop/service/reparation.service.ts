import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Userclient } from 'src/app/auth/shared/userclient.model';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {
  REST_API: string = 'https://backend-pelf.onrender.com/api';

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
  getAllvoitureMine(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/carsMine/63d55427fff0d046f97d31fe`);
  }
  getAllvoiture(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/cars`);
  }
  getVoituresAt(): Observable<any>  {
    return this.httpClient.get(`${this.REST_API}/custumer`);
  }
  gethivoka(): Observable<any>  {
    return this.httpClient.get(`${this.REST_API}/sorties`);
  }
  getBymatr(id:any): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/api/bymatr/${id}`);
  }

  Finir(data:any): Observable<any> {
    return this.httpClient.put(`${this.REST_API}/api/repair/${data._id}`,data);
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
