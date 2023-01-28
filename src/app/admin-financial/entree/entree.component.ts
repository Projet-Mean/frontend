import { Component , OnInit } from '@angular/core';
import { FinanceService } from '../service/finance.service';
interface Item {
  label: string;
  mois: string;
  montant: string;
}
@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent {
  matricule!:string;
  marque!:string;
  type!:string;
  date_de_depot!:string;
  label!:string;
  description!:string;
  photo!:string;

  tmpLabel="";
  tmpDescr="";
  tmpFile="";
  degats= [
    { name: '',description: '', file: '' }];

  depot() {
    //this.openDialog();
  }
  add() {
    this.degats?.push({name: this.tmpLabel, description:this.tmpDescr,file:this.tmpFile});
  }
  selectedItem?:Item;
  items=[
    {
      label: "",
      mois: "",
      montant: ""
    }];
  constructor(public financeServ:FinanceService){
  }

  ngOnInit() {
    this.financeServ.getAllCum().subscribe(res => {
      console.log(res);
      for(let client of res.entreeModel){
        this.items.push(
          {
            label: client.label,
            mois: client.mois,
            montant: client.montant
          }
        )
      }
    });
  }

  showDetails(item : Item) {
    this.selectedItem = item;
  }

}
