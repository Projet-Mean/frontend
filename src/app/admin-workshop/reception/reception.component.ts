import { Component } from '@angular/core';
import { ReparationService } from '../service/reparation.service';
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

  constructor(public repServ:ReparationService){
  }
  items=[
    {
      immatriculation: "",
      id_client: "",
      marque: "",
      modele: "",
      annee: "",
    }];
  ngOnInit() {
    this.repServ.getAllvoitureAt().subscribe(res => {
      console.log(res);
      /*for(let client of res.userclients){
        this.items.push(
          {
            nom: client.nom,
            prenom: client.prenom,
            civilite: client.civilite,
            adresse: client.adresse,
            telephone: client.telephone,
            email: client.email,
            password: client.password,
            passwordconfirmation: client.passwordconfirmation
          }
        )
      }*/
    });
  }
  depot() {
    //this.openDialog();
  }
  add() {
    this.degats?.push({name: this.tmpLabel, description:this.tmpDescr,file:this.tmpFile});
  }
}
