import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-orders-index',
  templateUrl: './open-orders-index.component.html',
  styleUrls: ['./open-orders-index.component.scss']
})
export class OpenOrdersIndexComponent implements OnInit {

  pairOption: any = 'ETH/SOL';
  pairList: any = [
    'BTC/USDT',
    'ETH/SOL'
  ];

  coinTypes: any = "ETH";
  coinTypesList: any = [
    'BTC',
    'ETH',
    'USDT',
    'BNB',
    'SOL',
    'USDC',
    'DXE',
    'CUL'
  ];

  orderBooks1: any = [];
  orderBooks2: any = [];

  constructor() { }

  ngOnInit(): void {
    for( let i = 0; i < 20; i++) {
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
    }
  }

}
