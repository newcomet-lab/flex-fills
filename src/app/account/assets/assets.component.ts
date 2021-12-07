import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  assets = {
    sum: 567.09507,
    info: {
      today: -0.04,
      overall: +567.05507
    }
  };

  coinType = 'eth';

  assetsList = [
    {
      coin: 'BTC',
      amount: 0.082456,
      dateOfBirth: '65 999.98'
    }, {
      coin: 'XRP',
      amount: 0.082456,
      dateOfBirth: '65 999.98'
    }, {
      coin: 'ETH',
      amount: 0.082456,
      dateOfBirth: '65 999.98'
    }, {
      coin: 'SOL',
      amount: 0.082456,
      dateOfBirth: '65 999.98'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
