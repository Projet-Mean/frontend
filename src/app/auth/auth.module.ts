import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ValidateServiceService } from './shared/validate-service.service';
import { FormsModule } from '@angular/forms';
import { AulayoutComponent } from './aulayout/aulayout.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AulayoutComponent,
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers:[ValidateServiceService],
})
export class AuthModule { }
