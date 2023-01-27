import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateServiceService {

  constructor() { }

// validateSignup(userclient){
//     if (userclient.nom == undefined ||userclient.prenom == undefined|| userclient.civilite == undefined ||userclient.adresse == undefined||userclient.telephone== undefined||userclient.email == undefined||userclient.password == undefined||userclient.passwordConfirmation == undefined){
//       return false;

//     }
//     else {
//       return true;
//     }

// }
//   validateEmail(email){
//     const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     return re.test(email);
//   }
}
