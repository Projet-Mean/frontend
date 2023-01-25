import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficeComponent } from './benefice/benefice.component';
import { DepensesComponent } from './depenses/depenses.component';



@NgModule({
  declarations: [
    BeneficeComponent,
    DepensesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FdashboardModule { }
