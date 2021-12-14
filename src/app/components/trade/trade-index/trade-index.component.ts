import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

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

  orderBookBids: any = [];
  orderBookAsks: any = [];

  orderList: any = [];

  isDepthChartVisible: any = true;

  orderBookSub: any;

  constructor(public socketService: SocketService) {
    
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
    
    let itv = setInterval(() => {
      if (this.socketService.status) {
        console.log('reconnected');
        this.orderBookSub = this.socketService.socket.subscribe('/queue/order-books', (data: any) => {
          this.generateOrderBookData(data);
        });
        clearInterval(itv);
      }
    }, 500);
  }

  ngOnDestroy(): void {
    this.orderBookSub.unsubscribe();
  }

  calcLimit(inc: any) {
    this.limitPrice += inc;
  }

  onChangeLimitPrice(e: any) {
    console.log('e.target.value: ', e.target.value);
    this.limitPrice = parseFloat(e.target.value);
  }

  generateOrderBookData(data: any) {
    /*
      price is the first one
      total is count, count is always 1 for now, so total is 1
      amount is sum(amount) until each line from the 1st line.
      count ... for now, don't need this column. 
    */
    let orderBookResponse = JSON.parse(data.body);
    let bidsAmountSum = 0;
    let asksAmountSum = 0;
    this.orderBookBids = orderBookResponse.bids.map((o: any) => {
      bidsAmountSum += parseFloat(o[1]);
      return {
        price: parseFloat(parseFloat(o[0]).toFixed(4)),
        total: 1,
        amount: parseFloat(bidsAmountSum.toFixed(4)),
        count: 1
      }
    });

    this.orderBookAsks = orderBookResponse.asks.map((o: any) => {
      asksAmountSum += parseFloat(o[1]);
      return {
        price: parseFloat(parseFloat(o[0]).toFixed(4)),
        total: 1,
        amount: parseFloat(asksAmountSum.toFixed(4)),
        count: 1
      }
    });
  }

  sell() {

  }

  buy() {
    
  }

}
