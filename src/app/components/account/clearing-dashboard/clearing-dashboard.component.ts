import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as bootstrap from 'bootstrap';
import flatpickr from "flatpickr";

@Component({
  selector: 'app-clearing-dashboard',
  templateUrl: './clearing-dashboard.component.html',
  styleUrls: ['./clearing-dashboard.component.scss']
})
export class ClearingDashboardComponent implements OnInit {

  dashDate: any;

  dateType = "Date";
  dateTypesList = [
    'Date',
    'Period'
  ];

  showMode = "Consolidated";
  showModesList = [
    'Consolidated',
    'Detail'
  ];

  dashboardList: any = [];

  tradeStatus: any = [];
  volumeStatus: any = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.dashboardList.push({
        asset: 'BTC',
        bitfinex: 34.33422,
        kraken: 800.43434,
        quantity: 0.423342,
        usdPrice: 33.23241,
        usdValue: 78.38374,
        warning: Math.round(Math.random() * 100) % 2
      });
    }

    this.tradeStatus = [{
      exchange: 'KRAKEN',
      size: 142,
      percentage: Math.round((142 / 2479) * 100)
    }, {
      exchange: 'BITFINEX',
      size: 2339,
      percentage: Math.round((2339 / 2479) * 100)
    }, {
      exchange: 'Total',
      size: 2479
    }];

    this.volumeStatus = [{
      exchange: 'KRAKEN',
      size: 22711,
      percentage: Math.round((22711 / 288653) * 100)
    }, {
      exchange: 'BITFINEX',
      size: 265942,
      percentage: Math.round((265942 / 288653) * 100)
    }, {
      exchange: 'Total',
      size: 288653
    }];
  }

  ngAfterViewInit() {
    Feather.replace();
    flatpickr('.form-flatpickr', {
      defaultDate: new Date()
    });
  }

  onChangeDateType() {
    console.log('this.dateType: ', this.dateType);
    if (this.dateType === 'Date') {
      flatpickr('.form-flatpickr', {
        defaultDate: new Date()
      });
    } else {
      flatpickr('.form-flatpickr', {
        defaultDate: [new Date(), new Date()],
        mode: 'range'
      });
    }
  }

}
