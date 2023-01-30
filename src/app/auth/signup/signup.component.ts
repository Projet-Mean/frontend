import { HttpClient } from '@angular/common/http';
import { CrudService } from './../shared/crud.service';
import { ValidateServiceService } from './../shared/validate-service.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder } from "@angular/forms";




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
  success: false;
  form : FormGroup
  isAuth=false //mode dev
  id=-1


   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private http: HttpClient
  ) { 
    this.form = this.formBuilder.group({
      nom: "",
      prenom: "",
      civilite: "",
      adresse:"",
      telephone:"",
      email:"",
      password:"",
      passwordconfirmation:""
    })
  }
  ngOnInit() { }
 

 

  onSubmit() {
    const item= {
      nom: this.form.get('nom')?.value,
      prenom: this.form.get('prenom')?.value,
      civilite: this.form.get('civilite')?.value,
      adresse: this.form.get('adresse')?.value,
      telephone: this.form.get('telephone')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      passwordconfirmation: this.form.get('passwordconfirmation')?.value
    }
    this.http.post('https://backend-pelf.onrender.com/auth/signup', item).subscribe(
      (res: any) => {
        // this.success = true;
        console.log(res)
       this.router.navigate(['/auth/login']);
      })

  }
  deconnexion():void{
    this.isAuth=false;
    this.id=-1;
  }
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
 
  // onSubmit(){
  //   const userclient={
  //     fonom : this.form.nom,
  //     prenom : this.form.prenom,
  //     civilite : this.form.civilite,
  //     adresse : this.form.adresse,
  //     telephone: this.form.telephone,
  //     email : this.form.email,
  //     password : this.form.password,
  //     passwordconfirmation: this.form.passwordconfirmation,
  //   }
  //   console.log(123);
  // }


