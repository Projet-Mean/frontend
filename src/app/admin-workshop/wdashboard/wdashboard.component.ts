import { Component } from '@angular/core';
import { ReparationService } from '../service/reparation.service';
import { VoitureService } from '../service/voiture.service';

import { ChartConfiguration,ChartOptions } from 'chart.js';

@Component({
  selector: 'app-wdashboard',
  templateUrl: './wdashboard.component.html',
  styleUrls: ['./wdashboard.component.css']
})
export class WdashboardComponent {
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Fini' ], [ 'En cours' ], 'En cours' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(public repServ:ReparationService,public voitServ:VoitureService){
  }
  items=[
    {
      _id:"",
      immatriculation: "",
      id_client: "",
      marque: "",
      modele: "",
      annee: "",
      attente: true,
      assigne: ""
    }
  ];
  ngOnInit() {
    this.items=[];
    this.repServ.getAllvoitureAt().subscribe(res => {
      for(let client of res.voitureModel){
        this.items.push(
          {
            _id: client._id,
            immatriculation: client.immatriculation,
            id_client: client.id_client,
            marque: client.marque,
            modele: client.modele,
            annee: client.annee,
            attente: client.attente,
            assigne: client.assigne
          }
        )
      }
    });
  }

}
