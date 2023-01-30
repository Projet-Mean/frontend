import { HttpClient } from '@angular/common/http';
import { CrudService } from './../shared/crud.service';
import { ValidateServiceService } from './../shared/validate-service.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  success: false;
  form : FormGroup


   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
   private crudService: CrudService,
   private http: HttpClient
  ) { 
    this.form = this.formBuilder.group({
     
      email:"",
      password:"",
   
    })
  }
onSubmit() {
  this.http.post('https://backend-pelf.onrender.com/auth/login', this.form.getRawValue, { withCredentials: true }).subscribe(
    (res: any) => {
      // this.success = true;
      console.log(res)
     this.router.navigate(['/admin'])
      location.reload();
    })
  }
}

