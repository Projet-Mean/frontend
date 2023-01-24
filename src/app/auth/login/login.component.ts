import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form ={
    email:null,
    password: null
  }
constructor(){

}
OnSubmit(){

console.log(this.form)
}
}
