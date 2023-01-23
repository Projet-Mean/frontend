import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcarComponent } from './addcar/addcar.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { DeletecarComponent } from './deletecar/deletecar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  declarations: [
    AddcarComponent,
    UpdatecarComponent,
    DeletecarComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VoitureModule { }
