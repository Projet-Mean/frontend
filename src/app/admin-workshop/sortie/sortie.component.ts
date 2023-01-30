import { Component } from '@angular/core';
import { ReparationService } from '../service/reparation.service';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.css']
})
export class SortieComponent {
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
      assigne: "",
      sortie: ""
    }
  ];
  ngOnInit() {
    this.items=[];
    this.repServ.gethivoka().subscribe(res => {
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
            sortie: client.sortie,
          }
        )
      }
    });
  }
  ok(item:any){
    item.sortie="2";
    this.voitServ.assigne(item).subscribe(res => {
      console.log(res);
    });
  }
}
