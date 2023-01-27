import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlayoutComponent } from './flayout/flayout.component';
import { FsidemenuComponent } from './fsidemenu/fsidemenu.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientComponent } from './client/client.component';
import { FactureComponent } from './facture/facture.component';
import { PersonnelleComponent } from './personnelle/personnelle.component';
import { DepenseComponent } from './depense/depense.component';
import { SignoutComponent } from './signout/signout.component';
import { FdasboardComponent } from './fdasboard/fdasboard.component';
import { PayementComponent } from './payement/payement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminFinancialRoutingModule } from './admin-financial-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { EntreeComponent } from './entree/entree.component';


@NgModule({
  declarations: [
    FlayoutComponent,
    FsidemenuComponent,
    ProfileComponent,
    ClientComponent,
    FactureComponent,
    PersonnelleComponent,
    DepenseComponent,
    SignoutComponent,
    FdasboardComponent,
    PayementComponent,
    EntreeComponent
  ],
  imports: [
    CommonModule,
    AdminFinancialRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ]
})
export class AdminFinancialModule { }
