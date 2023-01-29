import { Component } from '@angular/core';
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
export class ProfileComponent {
  nom="";
  prenom="";
  civilite="";
  adresse="";
  telephone="";
  email="";
  constructor(public userServ:UserService){}

  ngOnInit() {
    this.userServ.MyProfile("1").subscribe(res => {
      this.nom= res.userfinancial[0]['nom'];
      this.prenom= res.userfinancial[0]['prenom'];
      this.civilite= res.userfinancial[0]['civilite'];
      this.adresse= res.userfinancial[0]['adresse'];
      this.telephone= res.userfinancial[0]['telephone'];
      this.email= res.userfinancial[0]['email'];
    });
  }
}
