import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markets-index',
  templateUrl: './markets-index.component.html',
  styleUrls: ['./markets-index.component.scss']
})
export class MarketsIndexComponent implements OnInit {

  marketList: any = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.marketList.push({
        pair: 'BTC/USDT',
        lastPrice: 45569.63,
        change: 4.2,
        changeStatus: 1,
        volume: 1152007225,
        bid: 46566.696,
        ask: 46570.21
      });

      this.marketList.push({
        pair: 'ETH/BTC',
        lastPrice: 45569.63,
        change: 0.9,
        changeStatus: -1,
        volume: 1152007225,
        bid: 46566.696,
        ask: 46570.21
      });
    }
  }

}
