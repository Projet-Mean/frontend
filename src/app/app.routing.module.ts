
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";


const routes:Routes=[
  {
    path: '' , loadChildren:()=> import('./public/public.module')
    .then(m=>m.PublicModule)
  },
  {
    path:'admin', loadChildren:()=> import('./admin/admin.module')
    .then(m=>m.AdminModule)
  },
  {
    path:'ate', loadChildren:()=> import('./admin-workshop/admin-workshop.module')
    .then(m=>m.AdminWorkshopModule)
  },
  {
    path:'auth', loadChildren:()=> import("./auth/auth.module")
    .then(m=>m.AuthModule)
  }

];
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
  })
export class AppRoutingModule
  {
  }
