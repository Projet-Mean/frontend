import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  matricule!:string;
  marque!:string;
  type!:string;
  date_de_depot!:string;
  label!:string;
  description!:string;
  photo!:string;


  depot() {
    //this.openDialog();
  }
}
