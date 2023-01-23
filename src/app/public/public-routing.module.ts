import { TermeComponent } from './terme/terme.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PlayoutComponent } from './playout/playout.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";


const routes:Routes=[
  {path:'', component:PlayoutComponent, children :[
    {path:'' ,redirectTo:'home', pathMatch:'full'},
  { path:'home', component : HomeComponent },
  {path :'contact', component : ContactComponent},
  {path :'about-us', component : AboutUsComponent},
  {path :'reservation', component :ReservationComponent},
  {path :'equipe', component : EquipeComponent},
  {path :'service', component : ServiceComponent},
  {path :'privacy', component : PrivacyComponent},
  {path :'terme-condition', component : TermeComponent }

  
  ]}
  
  

];
  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
export class PublicRoutingModule
  {
  }
