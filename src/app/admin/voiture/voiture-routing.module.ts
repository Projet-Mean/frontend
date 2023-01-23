import { UpdatecarComponent } from './updatecar/updatecar.component';
import { DeletecarComponent } from './deletecar/deletecar.component';
import { AddcarComponent } from './addcar/addcar.component';

import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";


const routes:Routes=[
  {path:'' ,redirectTo:'addcar', pathMatch:'full'},
  { path:'addcar', component : AddcarComponent },
  {path :'delete/:id', component : DeletecarComponent},
  {path :'update/:id', component : UpdatecarComponent},
  
];
  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
export class VoitureRoutingModule
  {
  }
