import { Component } from '@angular/core';

interface Item {
  name: string;
  etat: string;
  description: string;
  liste: degat[];
}
interface degat {
  name: string;
  etat: string;
  description: string;
}

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  items: Item[];
  selectedItem: degat[] | undefined;

  constructor(){
    this.items = [
      { name: '5864TBH',etat:"Non Payée", description: '90 000 Ar', liste: [{ name: 'Moteur',etat:"En cours", description: '10 000 Ar' },
      { name: 'frein',etat:"Fini", description: '50 000 Ar' },
      { name: 'Vitre',etat:"En Attente", description: '30 000 Ar' }]},
      { name: '9956TAA',etat:"Payée", description: '10 000 Ar', liste: [{ name: 'Carrosserie',etat:"Finie", description: '10 000 Ar' }]},
    ];
  }

  showDetails(item : Item) {
    this.selectedItem = item.liste;
  }
}
