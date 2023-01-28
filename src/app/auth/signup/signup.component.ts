import { ValidateServiceService } from './../shared/validate-service.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent {

  UserClient : FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
  //  private crudService: CrudService
  ) { 
    this.UserClient = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      civilite: [''],
      adresse:[''],
      telephone:[],
      email:[''],
      password:[''],
      passwordConfirmation:['']
    })
  }
  ngOnInit() { }
 
  onSubmit(): any {
    /* this.crudService.AddUserclient(this.UserClient.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/client'))
      }, (err) => {
        console.log(err);
    }); */
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

}
