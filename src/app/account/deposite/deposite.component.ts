import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.scss']
})
export class DepositeComponent implements OnInit {

  coinType = "";

  coinTypes = "ETH";
  coinTypesList = [
    'BTC',
    'ETH',
    'USDT',
    'BNB'
  ];

  coinList = [
    {
      id: 1,
      logo: "assets/img/currency/btc_icon.png",
      label: 'BTC'
    }, {
      id: 2,
      logo: "assets/img/currency/xrp_icon.png",
      label: 'XRP'
    }
  ];

  recentDepositeHistory = [
    {
      coin: 'BTC',
      value: 0.082456,
      date: 'Apr 09.2021 10:21 am'
    }, {
      coin: 'BTC',
      value: 0.082456,
      date: 'Apr 09.2021 10:21 am'
    }, {
      coin: 'BTC',
      value: 0.082456,
      date: 'Apr 09.2021 10:21 am'
    }, {
      coin: 'BTC',
      value: 0.082456,
      date: 'Apr 09.2021 10:21 am'
    }, {
      coin: 'BTC',
      value: 0.082456,
      date: 'Apr 09.2021 10:21 am'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
