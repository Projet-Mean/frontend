import { Component } from '@angular/core';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent {
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
}
