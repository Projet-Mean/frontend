import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcarComponent } from './addcar/addcar.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { DeletecarComponent } from './deletecar/deletecar.component';




@NgModule({
  declarations: [
    AddcarComponent,
    UpdatecarComponent,
    DeletecarComponent,
   
  ],
  imports: [
    CommonModule
  ]
})
export class VoitureModule { }
