import { LougoutComponent } from './lougout/lougout.component';
import { EtatComponent } from './etat/etat.component';
import { VoitureModule } from './voiture/voiture.module';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlayoutComponent } from './alayout/alayout.component';

import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";


const routes:Routes=[
  {path:'/admin', component: AlayoutComponent, children :[
    {path:'' ,redirectTo:'dashboard', pathMatch:'full'},
  { path:'dashboard', component : DashboardComponent },
  {path :'profil', component : ProfileComponent},
  {path :'voiture', component : VoitureModule},
  {path :'etat', component :EtatComponent},
  {path :'logout', component : LougoutComponent},
 
  ]}
];
  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
export class AdminRoutingModule
  {
  }
