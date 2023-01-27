import { Component } from '@angular/core';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent {
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
