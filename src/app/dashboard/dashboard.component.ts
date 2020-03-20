import { Component, ViewChild, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { ApiService } from './../api.service';

import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import _ from 'lodash';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  patientsData;
  patientsAllData;
  patientsRecoveredData;
  patientHptlData;
  patientDeathData;

  keys;

  // states=[ "Kerala", "Delhi", "Telangana", "Rajasthan", "Haryana", "Uttar Pradesh", "Ladakh", "Tamil Nadu", "Jammu and Kashmir", "Karnataka", "Maharashtra", "Punjab", "Andhra Pradesh", "Uttarakhand", "Odisha", "Puducherry", "West Bengal", "Chandigarh", "Chhattisgarh", "Gujarat", "Himachal Pradesh", "Madhya Pradesh" ]

  allState;
  allstatus;
  values;

  ngOnInit() {
    this.patientApi.GeAllPatients().subscribe(data => {

      this.patientsAllData = data;
      this.patientsData = this.patientsAllData.filter(
        patients => patients['Date Announced'] !== null);

      console.log(this.patientsData.length);
      this.patientsRecoveredData = this.patientsData.filter(
        recovered => recovered['Current Status'] === 'Recovered');

        this.patientHptlData = this.patientsData.filter(
          recovered => recovered['Current Status'] === 'Hospitalized');

          this.patientDeathData = this.patientsData.filter(
            recovered => recovered['Current Status'] === 'Deceased');


            this.allState = _.countBy(this.patientsAllData, "Detected State");
            this.allstatus = _.countBy(this.patientsAllData, "Current Status");

            this.keys = _.keys(this.allState);
            this.values = _.values(this.allState);


    });

  }




  constructor(private breakpointObserver: BreakpointObserver,
    private patientApi: ApiService, ) {

  }
}
