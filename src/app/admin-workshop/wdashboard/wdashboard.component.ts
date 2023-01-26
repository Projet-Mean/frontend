import { Component } from '@angular/core';

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

  constructor() {
  }

}
