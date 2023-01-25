import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form={
    nom:null,
    prenom:null,
    civilite:null,
    adresse:null,
    telephone:null,
    email:null,
    password:null,
    passwordconfirmation:null
    
  }
  constructor(){}
 
  onSubmit(){
    console.log(this.form)
  }

}
