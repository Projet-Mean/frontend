import { Component } from '@angular/core';
import { ReparationService } from '../service/reparation.service';
import { VoitureService } from '../service/voiture.service';
interface Voiture {
  immatriculation: string,
  id_client: string,
  marque: string,
  modele: string,
  annee: any,
  attente: boolean
}
interface Degat {
  reference: string,
  immatriculation: string,
  panne :string,
  solution:string,
  responsable: string,
  dateentree: string,
  datesortie: string,
  montanttotal: string,
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
  id_client!:string;
  annee!:string;
  date_de_depot!:string;
  label!:string;
  description!:string;
  photo!:string;

  reference="";
  immatriculation!:string;
  panne !:string;
  solution="";
  responsable="63d55427fff0d046f97d31fe";
  dateentree!:string;
  datesortie!:string;
  montanttotal!:string;
  degats= [
    {
      reference: "",
      immatriculation: "",
      panne :"",
      solution:"",
      responsable: "",
      dateentree: "",
      datesortie: "",
      montanttotal: ""
    }];

  constructor(public repServ:ReparationService,public voitServ:VoitureService){
  }
  voitur=
    {
      immatriculation: "2235TBB",
      id_client: "63d51f03fff0d046f97d31ef",
      marque: "BMW",
      modele: "SUV",
      annee: "2018",
      attente: true
    }
  items=[
    {
      immatriculation: "",
      id_client: "",
      marque: "",
      modele: "",
      annee: "",
    }];
    cli=[
      {
        id: "",
        nom: "",
        prenom: "",
        civilite: "",
        adresse: "",
        telephone: "",
        email: "",
        password: "",
        passwordconfirmation: ""
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
    this.voitServ.GetAllclient().subscribe(res => {
      for(let client of res.userclients){
        this.cli.push(
          {
            id: client._id,
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
      }
    });
  }
  depot() {
    this.voitServ.add({
      immatriculation: this.matricule,
      id_client: this.id_client,
      marque: this.marque,
      modele: this.type,
      annee: this.annee,
      attente: true
    }).subscribe(res => {
      console.log(res);
    });
    for(let liste of this.degats){
      if(liste.panne!=""){
        liste.immatriculation=this.matricule;
        liste.dateentree=this.date_de_depot;
        console.log(liste);
        this.insertDeg(liste);
      }
    }
  }
  insertDeg(degat:Degat){
    this.voitServ.addDeg(degat);
  }
  add() {
    this.degats?.push({reference: this.reference,
      immatriculation: this.immatriculation ,
      panne : this.panne,
      solution: this.solution ,
      responsable: this.responsable,
      dateentree: this.dateentree ,
      datesortie: "",
      montanttotal: ""});
  }
}
