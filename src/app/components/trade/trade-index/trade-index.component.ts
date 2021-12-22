import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Store, select, ActionsSubject, Action } from '@ngrx/store';
import { selectServerInfo } from '../../../store/reducers/common.reducer';
import { SocketService } from '../../../services/socket.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-trade-index',
  templateUrl: './trade-index.component.html',
  styleUrls: ['./trade-index.component.scss']
})
export class TradeIndexComponent implements OnInit {
  searchKey: any = '';
  marketList: any = [];
  marketSelected: any = '';

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
  orderOption: any = 'Orders';
  orderOptionList: any = [
    'Orders',
    'Trades',
    'Holdings'
  ];

  isDepthChartVisible: any = true;

  orderBookSub: any;
  marketsSub: any;

  subs: any;
  serverInfo$: any;

  websocketUrl: any = '';

  constructor(
    private socketService: SocketService,
    private store: Store<{ user: any }>,
    private actionSubject: ActionsSubject) {
      this.serverInfo$ = this.store.pipe(select(selectServerInfo));

      this.subs = actionSubject.subscribe((action: Action) => {
        if (action.type === '[Common API] Server Info API Success') {
          this.serverInfo$.pipe(take(1)).subscribe((info: any) =>{
            this.websocketUrl = info['websocket-url'];
            this.socketService.socketConnect(this.websocketUrl)
              .subscribe((frame: any) => {
                console.log('socket connected: ', frame);

                this.createOrderBookSubscribe();
                this.createMarketsSubscribe();
              }, (err: any) => {
                console.log('socket connection err: ', err);
              }, () =>  console.log( 'The observable stream is complete'));;
            });
        }
      });
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
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
  }

  createOrderBookSubscribe() {
    this.orderBookSub = this.socketService.tradeOrderBookConnect()
      .subscribe((data: any) => {
        let obj = JSON.parse(data.body);
        if (this.marketSelected === '') {
          this.marketSelected = obj.symbol;
        }
        // console.log('orders obj: ', obj);
        this.generateOrderBookData(data);
        this.generateMarketsData(data);
      }, (err: any) => {
        console.log('err: ', err);
      }, () =>  console.log( 'The observable stream is complete'));
  }

  createMarketsSubscribe() {
    this.marketsSub = this.socketService.tradeMarketsConnect()
      .subscribe((data: any) => {
        let obj = JSON.parse(data.body);
        console.log('markets obj: ', obj);
      }, (err: any) => {
        console.log('err: ', err);
      }, () =>  console.log( 'The observable stream is complete'));
  }

  ngOnDestroy(): void {
    this.orderBookSub.unsubscribe();
    this.marketsSub.unsubscribe();
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
    if (this.marketSelected === '' || this.marketSelected === orderBookResponse.symbol) {
      let bidsAmountSum = 0;
      let asksAmountSum = 0;
      this.orderBookBids = orderBookResponse.bids.map((o: any) => {
        bidsAmountSum += parseFloat(o[1]);
        return {
          price: parseFloat(parseFloat(o[0]).toFixed(4)),
          total: parseFloat(bidsAmountSum.toFixed(4)),
          amount: parseFloat(parseFloat(o[1]).toFixed(4)),
          count: 1
        }
      });

      this.orderBookAsks = orderBookResponse.asks.map((o: any) => {
        asksAmountSum += parseFloat(o[1]);
        return {
          price: parseFloat(parseFloat(o[0]).toFixed(4)),
          total: parseFloat(asksAmountSum.toFixed(4)),
          amount: parseFloat(parseFloat(o[1]).toFixed(4)),
          count: 1
        }
      }).reverse();
    }
  }

  generateMarketsData(data: any) {
    let orderBookResponse = JSON.parse(data.body);
    let idx = _.findIndex(this.marketList, { pair: orderBookResponse.symbol });

    if (idx !== -1) {
      this.marketList[idx] = {
        pair: orderBookResponse.symbol,
        price: 45569.63,
        change: 4.2,
        changeStatus: Math.round((Math.random() * 100)) % 2 === 1 ? 1 : -1,
        volume: orderBookResponse.bids.length
      };
    } else {
      this.marketList.push({
        pair: orderBookResponse.symbol,
        price: 45569.63,
        change: 4.2,
        changeStatus: Math.round((Math.random() * 100)) % 2 === 1 ? 1 : -1,
        volume: orderBookResponse.bids.length
      });
    }
  }

  getMarketList():any {
    return this.marketList.filter((o: any) => o.pair.includes(this.searchKey));
  }

  sell() {

  }

  buy() {
    
  }

}
