import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EtatComponent } from './etat/etat.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LougoutComponent } from './lougout/lougout.component';



@NgModule({
  declarations: [
   
    AlayoutComponent,
        DashboardComponent,
        ProfileComponent,
        EtatComponent,
        SidemenuComponent,
        LougoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
