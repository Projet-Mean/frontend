import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

interface Voiture {
  immatriculation: string,
  id_client: string,
  marque: string,
  modele: string,
  annee: any,
  attente: boolean,
  assigne: string,
  sortie :string
}
interface Voiture2 {
  _id: string,
  immatriculation: string,
  id_client: string,
  marque: string,
  modele: string,
  annee: string,
  attente: boolean,
  assigne: string,
  sortie :string
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
  status : string,
  assigne : string,
}
@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  REST_API: string = 'https://backend-pelf.onrender.com';

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
    let API_URL = `${this.REST_API}/api/api/add`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  GetAllclient(): Observable<any>{
    return this.httpClient.get(`${this.REST_API}/api/cli/custumer`);
  }

  assigne(data : Voiture2) {
    return this.httpClient.put(`${this.REST_API}/api/car/${data._id}`,data);
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
