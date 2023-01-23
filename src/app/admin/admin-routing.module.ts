import { LougoutComponent } from './lougout/lougout.component';
import { EtatComponent } from './etat/etat.component';

import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlayoutComponent } from './alayout/alayout.component';

import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";


const routes:Routes=[
  {path:'', component: AlayoutComponent, children :[
    {path:'' ,redirectTo:'dashboard', pathMatch:'full'},
  { path:'dashboard', component : DashboardComponent },
  {path :'profil', component : ProfileComponent},
  {
    path :'voiture',loadChildren:()=> import("./voiture/voiture.module")
.then(m=>m.VoitureModule) 
}, 
{
  path :'facture', loadChildren:()=> import("./facture/facture.module")
.then(m=>m.FactureModule)
},

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
