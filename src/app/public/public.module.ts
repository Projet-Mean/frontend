import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PublicRoutingModule } from './public-routing.module';
import { PlayoutComponent } from './playout/playout.component';
import { PheaderComponent } from './pheader/pheader.component';
import { PfooterComponent } from './pfooter/pfooter.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EquipeComponent } from './equipe/equipe.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermeComponent } from './terme/terme.component';




@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    AboutUsComponent,
    PlayoutComponent,
    PheaderComponent,
    PfooterComponent,
    ReservationComponent,
    EquipeComponent,
    PrivacyComponent,
    TermeComponent,
  
  ],
  imports: [
    CommonModule,
    PublicRoutingModule

  ],
  
})
export class PublicModule { }
