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
  selector: 'app-personnelle',
  templateUrl: './personnelle.component.html',
  styleUrls: ['./personnelle.component.css']
})
export class PersonnelleComponent {
  items: Item[];
  selectedItem: degat[] | undefined;

  constructor(){
    this.items = [
      { name: 'Rakoto',etat:25, description: '9956TAA', liste:
        [{ name: 'Moteur',etat:"15/02/2023", description: '10 000 Ar' },
        { name: 'frein',etat:"15/02/2023", description: '50 000 Ar' },
        { name: 'Vitre',etat:"15/02/2023", description: '30 000 Ar' }]},
      { name: 'ratrema',etat:25, description: '5511TBB', liste:
        [{ name: 'Carrosserie',etat:"29/01/2023", description: '10 000 Ar' }]},
    ];
  }

  showDetails(item : Item) {
    this.selectedItem = item.liste;
  }
}
