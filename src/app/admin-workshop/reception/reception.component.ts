import { Component } from '@angular/core';

interface degat {
  name: string;
  description: string;
  file: string;
}
@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent {
  matricule!:string;
  marque!:string;
  type!:string;
  date_de_depot!:string;
  label!:string;
  description!:string;
  photo!:string;

  tmpLabel="";
  tmpDescr="";
  tmpFile="";
  degats= [
    { name: '',description: '', file: '' }];

  depot() {
    //this.openDialog();
  }
  add() {
    this.degats?.push({name: this.tmpLabel, description:this.tmpDescr,file:this.tmpFile});
  }
}
