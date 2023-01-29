import { Component , OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
interface Item {
  nom: string;
  prenom: string;
  civilite: string;
  adresse: string;
  telephone: string;
  email: string;
  password: string;
  passwordconfirmation: string;
}
@Component({
  selector: 'app-personnelle',
  templateUrl: './personnelle.component.html',
  styleUrls: ['./personnelle.component.css']
})
export class PersonnelleComponent implements OnInit {
  selectedItem?: Item;
  items=[
    {
      nom: "",
      prenom: "",
      civilite: "",
      adresse: "",
      telephone: "",
      email: "",
      password: "",
      passwordconfirmation: ""
    }];
  constructor(public userServ:UserService){
  }

  ngOnInit() {
    this.userServ.GetAllatelier().subscribe(res => {
      for(let client of res.userworshop){
        this.items.push(
          {
            nom: client.nom,
            prenom: client.prenom,
            civilite: client.civilite,
            adresse: client.adresse,
            telephone: client.telephone,
            email: client.email,
            password: client.password,
            passwordconfirmation: client.passwordconfirmation
          }
        )
      }
    });
  }

  showDetails(item : Item) {
    this.selectedItem = item;
  }
}
