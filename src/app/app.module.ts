
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 8581f498555b02c471013453e53629d36ef0f903



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    RouterModule,
    FormsModule,
=======
    FormsModule,
    ReactiveFormsModule,
    RouterModule
>>>>>>> 8581f498555b02c471013453e53629d36ef0f903

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
