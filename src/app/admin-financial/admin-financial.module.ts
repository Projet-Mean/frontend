import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlayoutComponent } from './flayout/flayout.component';
import { FdashboardComponent } from './fdashboard/fdashboard.component';
import { FsidemenuComponent } from './fsidemenu/fsidemenu.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientComponent } from './client/client.component';
import { FactureComponent } from './facture/facture.component';
import { PersonnelleComponent } from './personnelle/personnelle.component';
import { DepenseComponent } from './depense/depense.component';
import { SignoutComponent } from './signout/signout.component';



@NgModule({
  declarations: [
    FlayoutComponent,
    FdashboardComponent,
    FsidemenuComponent,
    ProfileComponent,
    ClientComponent,
    FactureComponent,
    PersonnelleComponent,
    DepenseComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminFinancialModule { }
