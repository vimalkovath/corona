import { Component ,OnInit, Input  } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import _ from 'lodash';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {

  @Input() allState;
  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [
    { data: [], label: 'COVID-19 State Data' }
  ];
  constructor() { }
  keys;
  values;
  ngOnInit(): void {
    delete this.allState["null"];
    this.barChartLabels = _.keys(this.allState);
    this.values = _.values(this.allState);
    this.barChartData[0].data= this.values ;

  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];



}


