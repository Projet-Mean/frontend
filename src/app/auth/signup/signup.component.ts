import { ValidateServiceService } from './../shared/validate-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
form ={
    // nom:String,
    // prenom:String,
    // civilite:String,
    // adresse:String,
    // telephone:Number,
    // email:String,
    // password:String,
    // passwordconfirmation:String
    nom:null,
    prenom:null,
    civilite:null,
    adresse:null,
    telephone:null,
    email:null,
    password:null,
    passwordconfirmation:null
}
    
    
  
// required field 
  // constructor(private validateServiceService : ValidateServiceService){
  //   if (!this.validateServiceService.validateSignup(userclient)){
  //     console.log("Please fall in all fields");
  //     return false;

  //   }
  // }
  // valided email
//     constructor(private validateServiceService : ValidateServiceService){
//       if (!this.validateServiceService.validateEmail(email)){
//         console.log("Please fall in all fields");
//         return false;
//   }
// }
 
  onSubmit(){
    const userclient={
      fornom : this.form.nom,
      prenom : this.form.prenom,
      civilite : this.form.civilite,
      adresse : this.form.adresse,
      telephone: this.form.telephone,
      email : this.form.email,
      password : this.form.password,
      passwordconfirmation: this.form.passwordconfirmation,
    }
    console.log(123);
  }

}
