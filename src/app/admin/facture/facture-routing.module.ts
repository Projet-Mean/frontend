import { PaiementComponent } from './paiement/paiement.component';


import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";


const routes:Routes=[
  {path:'' ,redirectTo:'paiement', pathMatch:'full'},
  { path:'paiement', component : PaiementComponent},
 
  ];

  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
export class FactureRoutingModule
  {
  }
