import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-trade-index',
  templateUrl: './trade-index.component.html',
  styleUrls: ['./trade-index.component.scss']
})
export class TradeIndexComponent implements OnInit {

  searchKey: any = 'bt';
  marketList: any = [];

  orderFrom: any = "Market";
  orderFromList: any = [
    'Limit',
    'Market'
  ];

  percent: any = 50;
  percentList: any = [
    25,
    50,
    75,
    100
  ];

  limitPrice: any = 21245.432;

  tradeList: any = [];

  orderBooks1: any = [];
  orderBooks2: any = [];

  orderList: any = [];

  isDepthChartVisible: any = true;

  constructor() {
    
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.marketList.push({
        pair: 'BTC/USDT',
        price: 45569.63,
        change: 4.2,
        changeStatus: 1,
        volume: 1152007225
      });

      this.marketList.push({
        pair: 'ETH/BTC',
        price: 45569.63,
        change: 0.9,
        changeStatus: -1,
        volume: 1152007225
      });

      this.tradeList.push({
        time: '12:42:10',
        price: 47012,
        amount: 0.0100,
        success: true
      });

      this.tradeList.push({
        time: '12:42:10',
        price: 47012,
        amount: 0.0100,
        success: false
      });

      this.orderBooks1.push({
        count: 3,
        amount: 0.3409,
        total: 0.3409,
        price: 47013
      });

      this.orderBooks2.push({
        count: 3,
        amount: 0.3409,
        total: 0.3409,
        price: 47013
      });

      this.orderList.push({
        status: true, // positive, active
        pair: 'BTC/USDT',
        context: 'Exchange',
        type: 'Limit',
        amount: 3236.32,
        ccy: 'BTC',
        price: 434.235,
        leverage: '-',
        collateral: '-',
        placed: '21.08.13 04:13:04',
      });

      this.orderList.push({
        status: false, // positive, active
        pair: 'BTC/USDT',
        context: 'Exchange',
        type: 'Limit',
        amount: 3236.32,
        ccy: 'BTC',
        price: 434.235,
        leverage: '-',
        collateral: '-',
        placed: '21.08.13 04:13:04',
      });
    }

  }

  calcLimit(inc: any) {
    this.limitPrice += inc;
  }

  onChangeLimitPrice(e: any) {
    console.log('e.target.value: ', e.target.value);
    this.limitPrice = parseFloat(e.target.value);
  }

  sell() {

  }

  buy() {
    
  }

}
