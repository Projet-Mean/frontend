import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder } from "@angular/forms";
import { VoitureService } from 'src/app/admin/service/voiture.service';
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
    private http: HttpClient,
    public voitServ:VoitureService
  ) { 
    this.form = this.formBuilder.group({
     
      email:"",
      password:"",
   
    })
  }
onSubmit() {
  const item= {
    email: this.form.get('email')?.value,
    password: this.form.get('password')?.value
  }
  this.http.post('https://backend-pelf.onrender.com/auth/login', item).subscribe(
    (res: any) => {
      console.log(res)
      this.voitServ.id=res.userId;
     this.router.navigate(['/admin'],res.userId);
    })
  }
}

