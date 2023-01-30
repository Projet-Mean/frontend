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
interface Voiture2 {
  _id: string,
  immatriculation: string,
  id_client: string,
  marque: string,
  modele: string,
  annee: string,
  attente: boolean,
  assigne: string
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
  status: string,
  assigne : string
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
  tmp!: string;
  degats= [
    {
      reference: " ",
      immatriculation: "",
      panne :"",
      solution:" ",
      responsable: " ",
      dateentree: "",
      datesortie: " ",
      montanttotal: " ",
      status: " ",
      assigne: " "
    }];

  constructor(public repServ:ReparationService,public voitServ:VoitureService){
  }
  items=[
    {
      _id:"",
      immatriculation: "",
      id_client: "",
      marque: "",
      modele: "",
      annee: "",
      attente: true,
      assigne: ""
    }
  ];
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
    }
  ];
  ngOnInit() {
    this.items=[];
    this.cli=[]
    this.repServ.getAllvoitureAt().subscribe(res => {
      for(let client of res.voitureModel){
        this.items.push(
          {
            _id: client._id,
            immatriculation: client.immatriculation,
            id_client: client.id_client,
            marque: client.marque,
            modele: client.modele,
            annee: client.annee,
            attente: client.attente,
            assigne: client.assigne
          }
        )
      }
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
    this.degats[this.degats.length-1].panne=this.panne;
    this.degats[this.degats.length-1].status="En cours";
    this.voitServ.add({
      immatriculation: this.matricule,
      id_client: this.id_client,
      marque: this.marque,
      modele: this.type,
      annee: this.annee,
      attente: true,
      assigne: " "
    }).subscribe(res => {
      console.log(res);
    });
    for(let liste of this.degats){
      if(liste.panne!=""){
        liste.immatriculation=this.matricule;
        liste.dateentree=this.date_de_depot;
        this.insertDeg(liste);
      }
    }
    this.items=[];
    this.repServ.getAllvoitureAt().subscribe(res => {
      for(let client of res.voitureModel){
        for(let cli of this.cli){
          if(cli.id==client.id_client){
            this.tmp=cli.nom;
            break;
          }
        }
        this.items.push(
          {
            _id: client._id,
            immatriculation: client.immatriculation,
            id_client: this.tmp,
            marque: client.marque,
            modele: client.modele,
            annee: client.annee,
            attente: client.attente,
            assigne: client.assigne
          }
        )
      }
    });
  }
  insertDeg(degat:Degat){
    this.voitServ.addDeg(degat).subscribe(res => {
      console.log("insert => "+res);
    });
  }
  add() {
    this.degats[this.degats.length-1].panne=this.panne;
    this.panne="";
    this.degats?.push({reference: " ",
      immatriculation: "",
      panne : "",
      solution: " ",
      responsable: " ",
      dateentree: "",
      datesortie: " ",
      montanttotal: " ",
      status: " ",
      assigne :" "
    });
  }
  take(item :Voiture2){
    item.attente=false;
    item.assigne="63d55427fff0d046f97d31fe"
    this.voitServ.assigne(item).subscribe(res => {
      console.log("insert => "+res);
    });
    this.items=[];
    this.repServ.getAllvoitureAt().subscribe(res => {
      for(let client of res.voitureModel){
        for(let cli of this.cli){
          if(cli.id==client.id_client){
            this.tmp=cli.nom;
            break;
          }
        }
        this.items.push(
          {
            _id: client._id,
            immatriculation: client.immatriculation,
            id_client: this.tmp,
            marque: client.marque,
            modele: client.modele,
            annee: client.annee,
            attente: client.attente,
            assigne: client.assigne
          }
        )
      }
    });

  }
}
