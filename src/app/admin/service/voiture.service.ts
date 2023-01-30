import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id_cli : string
}
@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  public id: any;
  REST_API: string = 'https://backend-pelf.onrender.com';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient,private route:ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    console.log("tato");
  }
   // Add
  add(data: Voiture): Observable<any> {
    data.id_client=this.id;
    data.sortie="0";
    let API_URL = `${this.REST_API}/api/add`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  addDeg(data: Degat): Observable<any> {
    data.id_cli=this.id;
    data.status="nouveau"
    let API_URL = `${this.REST_API}/api/api/add`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  getbyid(): Observable<any> {
    let API_URL = `${this.REST_API}/api/api/byid/${this.id}`;
    return this.httpClient.get(API_URL)
      .pipe(
        catchError(this.handleError)
      )
  }
  MyProfile(): Observable<any> {
    let API_URL = `${this.REST_API}/auth/custumer/${this.id}`;
    return this.httpClient.get(API_URL)
      .pipe(
        catchError(this.handleError)
      )
  }
  getAllvoitureMine(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/api/carsbycli/${this.id}`);
  }
  getBymatr(id:any): Observable<any> {
    return this.httpClient.get(`${this.REST_API}/api/api/bymatr/${id}`);
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
