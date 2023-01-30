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
  REST_API: string = 'https://backend-pelf.onrender.com/auth';
 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }

   // Add
   signup(data: Userclient): Observable<any> {
    let API_URL = `${this.REST_API}/signup`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

     login(data: Userclient): Observable<any> {
    let API_URL = `${this.REST_API}/login`;
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
// import { Injectable } from '@angular/core';
// import { Userclient } from './userclient.model';
// import { catchError, map } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class CrudService {

//   isAuth=false //mode dev
//   id=-1
//   constructor(private router:Router,private http:HttpClient) { }

//   connexion(email:string,password:string){

//     this.http.post<any>("http://localhost:3000/auth/login",{
//       "email":email,
  //     "password":password
  //   }).subscribe((rep)=>{
  //     let message=JSON.stringify(rep)
  //     console.log(message)
  //     let test=JSON.parse(message);
  //     console.log("Reponse",test)

  //     if(test.success==false){
  //       console.log("Erreur ooo")
  //     }
  //     else if(test.success==true && test.userclient){
  //       this.isAuth=true
  //       this.id=test.userclient.id

  //       //sauvegarde dans session
       
  //       sessionStorage.setItem('UID',test.userclient.id)

  //       console.log("Connexion  && Sauvegarde Ok ")

  //       this.router.navigate(['/admin']);
  //     }
  //   },(err)=>{
  //     console.log("Erreur")
  //   })
  // }


  // //connexion Promise

  // connexion2(email:string,password:string){

  //   this.http.post<any>("http://localhost:3000/auth/login",{
  //     "email":email,
  //     "password":password
  //   }).subscribe((rep)=>{
  //     let message=JSON.stringify(rep)
  //     console.log(message)
  //     let test=JSON.parse(message);
  //     console.log("Reponse",test)

  //     if(test.success==false){
  //       console.log("Erreur ooo")
  //     }
  //     else if(test.success==true && test.user){
  //       this.isAuth=true
  //       this.id=test.user.id
  //       console.log("Connexion Ok")
  //     }
  //   },(err)=>{
  //     console.log("Erreur")
  //   })
  // }


  //inscription
  // inscription(nom:string,prenom:string,civilite:string,adresse:string,telephone:string,email:string,password:string,password:string){

  //   this.http.post<any>("http://localhost:3000/auth/signup",{
  //     "nom":nom,
  //     "prenom":prenom,
  //     "civilite":civilite,
  //     "adresse":adresse,
  //     "telephone":telephone,
  //     "email":email,
  //     "password":password,
      

  //   }).subscribe((rep)=>{
  //     let message=JSON.stringify(rep)
  //     console.log(message)
  //     let test=JSON.parse(message);
  //     console.log("Reponse",test)

  //     if(test.success==false){
  //       console.log("Erreur ooo")
  //     }
  //     else if(test.success==true){
  //       this.isAuth=true
  //       //this.id=test.user.id
  //       console.log("Connexion Ok")
  //       this.router.navigate(['/auth/login']);
  //     }
  //   },(err)=>{
  //     console.log("Erreur")
  //   })
  // }



//   deconnexion():void{
//     this.isAuth=false;
//     this.id=-1;
//   }
// }