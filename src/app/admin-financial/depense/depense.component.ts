import { Component , OnInit } from '@angular/core';
import { FinanceService } from '../service/finance.service';
interface Item {
  label: string;
  mois: string;
  montant: string;
}
@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent {
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
    this.financeServ.getAllDep().subscribe(res => {
      console.log(res);
      for(let client of res.depenseModel){
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
