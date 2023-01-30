import { Component } from '@angular/core';
import { VoitureService } from '../service/voiture.service';

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
  constructor(public userServ:VoitureService){}

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
