import { AdminRoutingModule } from './admin-routing.module';
import { VoitureModule } from './voiture/voiture.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EtatComponent } from './etat/etat.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LougoutComponent } from './lougout/lougout.component';
import { SignoutComponent } from './signout/signout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    AlayoutComponent,
    DashboardComponent,
    ProfileComponent,
    EtatComponent,
    SidemenuComponent,
    LougoutComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class AdminModule { }
