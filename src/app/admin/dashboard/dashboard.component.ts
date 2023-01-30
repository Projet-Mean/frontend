import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoitureService } from '../service/voiture.service';
interface Voiture2 {
  _id: string,
  immatriculation: string,
  id_client: string,
  marque: string,
  modele: string,
  annee: string,
  attente: boolean,
  assigne: string,
  sortie: string,
}
interface Degat {
  reference: string,
  immatriculation: string,
  panne: string,
  solution: string,
  responsable: string,
  dateentree: string,
  datesortie: string,
  montanttotal: string,
  status: string,
  assigne: string,
  id_cli: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  matricule!: string;
  marque!: string;
  type!: string;
  id_client!: string;
  annee!: string;
  date_de_depot!: string;
  label!: string;
  description!: string;
  photo!: string;
  message!: string;

  reference = "";
  immatriculation!: string;
  panne !: string;
  solution = "";
  responsable = "63d55427fff0d046f97d31fe";
  dateentree!: string;
  datesortie!: string;
  montanttotal!: string;
  tmp!: string;
  degats = [
    {
      reference: " ",
      immatriculation: "",
      panne: "",
      solution: " ",
      responsable: " ",
      dateentree: "",
      datesortie: " ",
      montanttotal: " ",
      status: " ",
      assigne: " ",
      sortie: " ",
      id_cli:" "
    }];

  constructor( public voitServ: VoitureService) {
  }
  cli = [
    {
      _id:"",
      reference: "",
      immatriculation: "",
      panne :"",
      solution:"",
      responsable: "",
      dateentree: "",
      datesortie: "",
      montanttotal: "",
      status: ""
    }
  ];
  ngOnInit() {
    this.cli = [];
    this.voitServ.getbyid().subscribe(res => {
      if(res){
        for(let client of res.reparationsModel){
          this.cli.push(
            {
              _id:client._id,
              reference: client.reference,
              immatriculation: client.immatriculation,
              panne :client.panne,
              solution:client.solution,
              responsable: client.responsable,
              dateentree: client.dateentree,
              datesortie: client.datesortie,
              montanttotal: client.montanttotal,
              status:client.status
            }
          )
        }
      }
    });
    
  }
  depot() {
    this.degats[this.degats.length - 1].panne = this.panne;
    this.degats[this.degats.length - 1].status = "En cours";
    this.voitServ.add({
      immatriculation: this.matricule,
      id_client: " ",
      marque: this.marque,
      modele: this.type,
      annee: this.annee,
      attente: true,
      assigne: " ",
      sortie: "0"
    }).subscribe(res => {
      console.log(res);
    });
    for (let liste of this.degats) {
      if (liste.panne != "") {
        liste.immatriculation = this.matricule;
        liste.dateentree = this.date_de_depot;
        liste.status = "Nouveau";
        this.insertDeg(liste);
      }
    }
    this.message="Succes!!";
    this.cli =[];
    this.voitServ.getbyid().subscribe(res => {
      if(res){
        for(let client of res.reparationsModel){
          this.cli.push(
            {
              _id:client._id,
              reference: client.reference,
              immatriculation: client.immatriculation,
              panne :client.panne,
              solution:client.solution,
              responsable: client.responsable,
              dateentree: client.dateentree,
              datesortie: client.datesortie,
              montanttotal: client.montanttotal,
              status:client.status
            }
          )
        }
      }
    });
    
  }
  insertDeg(degat: Degat) {
    this.voitServ.addDeg(degat).subscribe(res => {
      console.log("insert => " + res);
    });
  }

  add() {
    this.degats[this.degats.length - 1].panne = this.panne;
    this.panne = "";
    this.degats?.push({
      reference: " ",
      immatriculation: "",
      panne: "",
      solution: " ",
      responsable: " ",
      dateentree: "",
      datesortie: " ",
      montanttotal: " ",
      status: " ",
      assigne: " ",
      sortie: "0",
      id_cli: " "
    });
  }
}
