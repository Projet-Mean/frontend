import { Component } from '@angular/core';
import { VoitureService } from '../../service/voiture.service';


@Component({
  selector: 'app-deletecar',
  templateUrl: './deletecar.component.html',
  styleUrls: ['./deletecar.component.css']
})
export class DeletecarComponent {
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
  take(item:any){
    item.sortie="1";
    this.voitServ.assigne(item).subscribe(res => {
      console.log("insert => "+res);
    });
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

}
