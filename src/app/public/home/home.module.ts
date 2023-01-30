import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReparationComponent } from './reparation/reparation.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    ReparationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgImageSliderModule
  ]
})
export class HomeModule { }
