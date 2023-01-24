import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form={
    name:null,
    password:null,
    email:null
  }
  constructor(){}
 
  onSubmit(){
    console.log(this.form)
  }

}
