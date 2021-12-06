import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  searchDateOption = 1;
  dateList = [
    1, 2, 3, 4
  ];

  tabList = [
    'Trade',
    'Deposite',
    'Withdraw',
    'Login'
  ];
  activatedTab = 0;

  tradeHistory = [] as any;
  depositeHistory = [] as any;
  withdrawHistory = [] as any;
  loginHistory = [] as any;

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.tradeHistory.push({
        id: '123-456-789',
        pair: 'BTC/USDT',
        amount: '0.54',
        price: '55 615.12',
        fee: '30 032.1648',
        date: 'Apr 09.2021 10:21 am'
      });

      this.depositeHistory.push({
        id: '123-456-789',
        coin: 'BTC/USDT',
        value: '0.54',
        date: 'Apr 09.2021 10:21 am',
        txid	: '0xb4bc263278d',
        status: true
      });

      this.withdrawHistory.push({
        id: '123-456-789',
        coin: 'BTC/USDT',
        value: '0.54',
        date: 'Apr 09.2021 10:21 am',
        address	: '123qwertyuiop456',
        txid: '0xb4bc263278d',
        status: true
      });

      this.loginHistory.push({
        date: 'Apr 09.2021 10:21 am',
        ip: '12.345.678.910',
        browser: 'Chrome',
        version: '92',
        mobile	: 'IPhone'
      });
    }
  }

  ngOnInit(): void {
  }

  onChangeTab(tabIdx: any) { // will call api or render proper data of each tab
    this.activatedTab = tabIdx;
  }

}
