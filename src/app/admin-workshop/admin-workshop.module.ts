import { AdminWorkshopRoutingModule } from './admin-workshop-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WlayoutComponent } from './wlayout/wlayout.component';
import { WdashboardComponent } from './wdashboard/wdashboard.component';
import { ReceptionComponent } from './reception/reception.component';
import { ReparationComponent } from './reparation/reparation.component';
import { EtatComponent } from './etat/etat.component';
import { ClientComponent } from './client/client.component';
import { SortieComponent } from './sortie/sortie.component';
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component';
import { SignoutComponent } from './signout/signout.component';
import { ProfileComponent } from './profile/profile.component';
import { FsidemenuComponent } from './fsidemenu/fsidemenu.component';
import { FfooterComponent } from './ffooter/ffooter.component';



@NgModule({
  declarations: [
    WlayoutComponent,
    WdashboardComponent,
    ReceptionComponent,
    ReparationComponent,
    EtatComponent,
    ClientComponent,
    SortieComponent,
    AjoutVoitureComponent,
    SignoutComponent,
    ProfileComponent,
    FsidemenuComponent,
    FfooterComponent
  ],
  imports: [
    CommonModule,
  AdminWorkshopRoutingModule
  ]
})
export class AdminWorkshopModule { }
