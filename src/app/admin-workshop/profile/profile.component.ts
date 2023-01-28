import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
interface Profile {
  setValue(arg0: { nom: any; prenom: any; civilite: any;adresse: any; telephone: any; email: any}): unknown;
  nom: string,
  prenom: string,
  civilite: string,
  adresse: string,
  telephone: string,
  email: string
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nom="";
  prenom="";
  civilite="";
  adresse="";
  telephone="";
  email="";
  constructor(public userServ:UserService){}

  ngOnInit() {
    this.userServ.MyProfile("1").subscribe(res => {
      this.nom= res['nom'];
      this.prenom= res['prenom'];
      this.civilite= res['civilite'];
      this.adresse= res['adresse'];
      this.telephone= res['telephone'];
      this.email= res['email'];
    });
  }
}
