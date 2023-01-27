import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';


interface Item {
  name: string;
  etat: any;
  description: string;
  liste: degat[];
}
interface degat {
  name: string;
  etat: string;
  description: string;
}

@Component({
  selector: 'app-deletecar',
  templateUrl: './deletecar.component.html',
  styleUrls: ['./deletecar.component.css']
})
export class DeletecarComponent {
  items: Item[];
  selectedItem: degat[] | undefined;

  constructor(){
    this.items = [
      { name: '5864TBH',etat:25, description: '90 000 Ar', liste: [{ name: 'Moteur',etat:"En cours", description: '10 000 Ar' },
      { name: 'frein',etat:"Fini", description: '50 000 Ar' },
      { name: 'Vitre',etat:"En Attente", description: '30 000 Ar' }]},
      { name: '9956TAA',etat:25, description: '90 000 Ar', liste: [{ name: 'Carrosserie',etat:"En cours", description: '10 000 Ar' }]},
    ];
  }

  showDetails(item : Item) {
    this.selectedItem = item.liste;
  }

}
