import { FlayoutComponent } from './flayout/flayout.component';
import { SignoutComponent } from './signout/signout.component';
import { ClientComponent } from './client/client.component';
import { ProfileComponent } from './profile/profile.component'
import { FdasboardComponent } from './fdasboard/fdasboard.component';
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { FactureComponent } from './facture/facture.component';
import { DepenseComponent } from './depense/depense.component';
import { PayementComponent } from './payement/payement.component';
import { PersonnelleComponent } from './personnelle/personnelle.component';
import { EntreeComponent } from './entree/entree.component';


const routes:Routes=[
  {path:'', component:FlayoutComponent, children :[
    { path:'' ,redirectTo:'dashboard', pathMatch:'full'},
    { path:'dashboard', component : FdasboardComponent },
    { path :'profil', component : ProfileComponent},
    { path :'client', component : ClientComponent},
    { path:'facture', component : FactureComponent },
    { path:'facture/paye', component : PayementComponent },
    { path:'depense', component : DepenseComponent },
    { path:'pers', component : PersonnelleComponent },
    { path:'enter', component : EntreeComponent },
    { path :'signout', component : SignoutComponent }

]}]
  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
export class AdminFinancialRoutingModule
  {
  }
