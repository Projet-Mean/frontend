import { Component } from '@angular/core';

import { ReparationService } from '../service/reparation.service';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent {
  selectedItem: any;

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
  ngOnInit() {
    this.items=[];
    this.selectedItem=[];
    this.repServ.getAllvoitureMine().subscribe(res => {
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
  }

  showDetails(id : string) {
    this.selectedItem=[];
    this.repServ.getBymatr(id).subscribe(res => {
      this.selectedItem.push(
        {
          _id:res.reparationsModel._id,
          reference: res.reparationsModel.reference,
          immatriculation: res.reparationsModel.immatriculation,
          panne :res.reparationsModel.panne,
          solution:res.reparationsModel.solution,
          responsable: res.reparationsModel.responsable,
          dateentree: res.reparationsModel.dateentree,
          datesortie: res.reparationsModel.datesortie,
          montanttotal: res.reparationsModel.montanttotal,
          status:res.reparationsModel.status
        }
      )
      /*for(let client of res.reparationsModel){
        this.selectedItem.push(
          {
            _id: client._id,
            name: client.panne,
            etat: client.status
          }
        )
      }*/
    });
  }
  finir(id:any){
    id.status="fini";
    this.repServ.Finir(id).subscribe(res => {
      console.log(res);
    });
    this.selectedItem=[];
    this.repServ.getBymatr(id).subscribe(res => {
      this.selectedItem.push(
        {
          _id: res.reparationsModel._id,
          name: res.reparationsModel.panne,
          etat: res.reparationsModel.status
        }
      )
      /*for(let client of res.reparationsModel){
        this.selectedItem.push(
          {
            _id: client._id,
            name: client.panne,
            etat: client.status
          }
        )
      }*/
    });

  }
}
