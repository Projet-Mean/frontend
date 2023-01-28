import { FactureComponent } from './facture.component';
import { PaiementComponent } from './../../admin/facture/paiement/paiement.component';

import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";


const routes:Routes=[
  { path:'', component : FactureComponent},
   { path:'paiement', component : PaiementComponent },
 
 
]
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
export class FactureRoutingModule
  {
  }
