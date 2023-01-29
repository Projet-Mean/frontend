import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

interface Voiture {
  immatriculation: string,
  id_client: string,
  marque: string,
  modele: string,
  annee: any,
  attente: boolean
}
interface Degat {
  reference: string,
  immatriculation: string,
  panne :string,
  solution:string,
  responsable: string,
  dateentree: string,
  datesortie: string,
  montanttotal: string,
}
@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  REST_API: string = 'http://localhost:3000';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {
  }

   // Add
  add(data: Voiture): Observable<any> {
    let API_URL = `${this.REST_API}/api/add`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  addDeg(data: Degat): Observable<any> {
    console.log(data);
    let API_URL = `${this.REST_API}/api/api/repair`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  GetAllclient(): Observable<any>{
    return this.httpClient.get(`${this.REST_API}/api/cli/custumer`);
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
