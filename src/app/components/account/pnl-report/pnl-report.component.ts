import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as bootstrap from 'bootstrap';
import flatpickr from "flatpickr";

@Component({
  selector: 'app-pnl-report',
  templateUrl: './pnl-report.component.html',
  styleUrls: ['./pnl-report.component.scss']
})
export class PnlReportComponent implements OnInit {

  pnlDate: any;

  dateType = "Date";
  dateTypesList = [
    'Date',
    'Period'
  ];

  pnlReportList: any = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      this.pnlReportList.push({
        exchange: 'KRAKEN',
        instrument: 'XRP/USDT',
        quoteVolume: 800,
        buyTradeDate: '07/01/21 07:33 PM',
        buyPrice: 12.335239,
        buyFee: 0.3235532,
        buyTermRateUsd: 0.9383482,
        sellTradeDate: '07/01/21 07:33 PM',
        sellPrice: 32.32355,
        sellFee: 0.44342,
        sellTermRateUsd: 12.35354,
        grossPnl: 43.464363,
        netPnl: 53.232345,
        netPnlUsd: 32.353266,
        warning: Math.round(Math.random() * 100) % 2
      });
    }
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
