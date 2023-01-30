import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
interface Item {
  id: string;
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
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  selectedItem: Item | any;
  items=[
    {
      id:"",
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
    this.items=[];
    this.userServ.GetAllclient().subscribe(res => {
      for(let client of res.userclients){
        this.items.push(
          {
            id: client._id,
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

