import { Component } from '@angular/core';
import { VoitureService } from '../service/voiture.service';


@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  selectedItem: any;

  items=[
    {
      _id:"",
      immatriculation: "",
      id_client: "",
      marque: "",
      modele: "",
      annee: "",
      attente: true,
      assigne: "",
      sortie: " ",
    }
  ];
  constructor(public voitServ:VoitureService){
  }
  ngOnInit() {
    this.items=[];
    this.voitServ.getAllvoitureMine().subscribe(res => {
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
            assigne: client.assigne,
            sortie: client.sortie
          }
        )
      }
    });
  }

  showDetails(id : string) {
    this.selectedItem=[];
    this.voitServ.getBymatr(id).subscribe(res => {
      
      for(let client of res.reparationsModel){
        this.selectedItem.push(
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
    });
  }
}
