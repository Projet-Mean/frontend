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
    this.userServ.MyProfile().subscribe(res => {
      this.nom= res.userclients.nom;
      this.prenom= res.userclients.prenom;
      this.civilite= res.userclients.civilite;
      this.adresse= res.userclients.adresse;
      this.telephone= res.userclients.telephone;
      this.email= res.userclients.email;
    });
  }
}
