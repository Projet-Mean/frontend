import { FlayoutComponent } from './flayout/flayout.component';
import { SignoutComponent } from '../admin/signout/signout.component';
import { SortieComponent } from './sortie/sortie.component';
import { EtatComponent } from '../admin/etat/etat.component';
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component';
import { ReceptionComponent } from './reception/reception.component';
import { ReparationComponent } from '../../../../UIBack-end/src/app/reparation/reparation.component';
import { ClientComponent } from './client/client.component';
import { ProfileComponent } from './profile/profile.component'
import { WdashboardComponent } from './wdashboard/wdashboard.component';
import { WlayoutComponent } from './wlayout/wlayout.component';

import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";


const routes:Routes=[
  {path:'', component:FlayoutComponent, children :[
    {path:'' ,redirectTo:'fdashboard', pathMatch:'full'},
  { path:'dashboard', component : WdashboardComponent },
  {path :'profil', component : ProfileComponent},
  {path :'client', component : ClientComponent},
  {path :'facture', component :ReparationComponent},
  {path :'reception', component : ReceptionComponent},
  {path :'add', component : AjoutVoitureComponent},
  {path :'etat', component : EtatComponent},
  {path :'sortie', component : SortieComponent },
  {path :'signout', component : SignoutComponent }
 
]}]
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
export class AdminFinancialRoutingModule
  {
  }
