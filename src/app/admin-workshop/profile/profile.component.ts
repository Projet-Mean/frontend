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
      console.log(res);
      this.nom= res.userworkshop.nom;
      this.prenom= res.userworkshop.prenom;
      this.civilite= res.userworkshop.civilite;
      this.adresse= res.userworkshop.adresse;
      this.telephone= res.userworkshop.telephone;
      this.email= res.userworkshop.email;
    });
  }
}
