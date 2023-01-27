import { Component } from '@angular/core';

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
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent {
  items: Item[];
  selectedItem: degat[] | undefined;

  constructor(){
    this.items = [
      { name: '5864TBH',etat:25, description: '90 000 Ar', liste:
        [{ name: 'Moteur',etat:"15/02/2023", description: '10 000 Ar' },
        { name: 'frein',etat:"15/02/2023", description: '50 000 Ar' },
        { name: 'Vitre',etat:"15/02/2023", description: '30 000 Ar' }]},
      { name: '9956TAA',etat:25, description: '90 000 Ar', liste:
        [{ name: 'Carrosserie',etat:"29/01/2023", description: '10 000 Ar' }]},
    ];
  }

  showDetails(item : Item) {
    this.selectedItem = item.liste;
  }
}
