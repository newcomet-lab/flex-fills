import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Store, select, ActionsSubject, Action } from '@ngrx/store';
import { selectServerInfo } from '../../../store/reducers/common.reducer';
import { SocketService } from '../../../services/socket.service';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';

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

  tradeGroupList: any = {};

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
  tradesSub: any;

  subs: any;
  serverInfo$: any;

  websocketUrl: any = '';
  maxNoOfTradeToDisplay: any = 100;

  constructor(
    private socketService: SocketService,
    private store: Store<{ user: any }>,
    private actionSubject: ActionsSubject) {
      this.serverInfo$ = this.store.pipe(select(selectServerInfo));

      this.subs = actionSubject.subscribe((action: Action) => {
        if (action.type === '[Common API] Server Info API Success') {
          this.serverInfo$.pipe(take(1)).subscribe((info: any) => {
            this.maxNoOfTradeToDisplay = parseInt(info['max-number-of-trades-to-display']);

            this.startStreaming();
          });
        }
      });
    }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
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

  startStreaming() {
    this.socketService.socketConnect(environment.SOCKET_URL)
      .subscribe((frame: any) => {
        console.log('socket connected: ', frame);

        this.createOrderBookSubscribe();
        this.createTradesSubscribe();
      }, (err: any) => {
        console.log('socket connection err: ', err);
        
        this.orderBookSub.unsubscribe();
        this.tradesSub.unsubscribe();

        setTimeout(() => {
          console.log('try to re-connect...');
          this.startStreaming();
        }, 1000);
      }, () =>  console.log( 'The observable stream is complete'));
  }

  createOrderBookSubscribe() {
    this.orderBookSub = this.socketService.tradeOrderBookConnect()
      .subscribe((data: any) => {
        let obj = JSON.parse(data.body);
        if (this.marketSelected === '') {
          this.marketSelected = obj.symbol;
        }
        
        this.generateOrderBookData(data);
        this.generateMarketsData(data);
      }, (err: any) => {
        console.log('err: ', err);
      }, () =>  console.log( 'The observable stream is complete'));
  }

  createTradesSubscribe() {
    this.tradesSub = this.socketService.tradeMarketsConnect()
      .subscribe((data: any) => {
        let obj = JSON.parse(data.body);

        this.generateTradesData(data);
      }, (err: any) => {
        console.log('err: ', err);
      }, () =>  console.log( 'The observable stream is complete'));
  }

  ngOnDestroy(): void {
    this.orderBookSub.unsubscribe();
    this.tradesSub.unsubscribe();
  }

  calcLimit(inc: any) {
    this.limitPrice += inc;
  }

  onChangeLimitPrice(e: any) {
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
          count: 1,
          symbol: orderBookResponse.symbol
        }
      });

      this.orderBookAsks = orderBookResponse.asks.map((o: any) => {
        asksAmountSum += parseFloat(o[1]);
        return {
          price: parseFloat(parseFloat(o[0]).toFixed(4)),
          total: parseFloat(asksAmountSum.toFixed(4)),
          amount: parseFloat(parseFloat(o[1]).toFixed(4)),
          count: 1,
          symbol: orderBookResponse.symbol
        }
      }).reverse();
    }
  }

  generateMarketsData(data: any) {
    let orderBookResponse = JSON.parse(data.body);
    let idx = _.findIndex(this.marketList, { pair: orderBookResponse.symbol });

    if (idx === -1) {
      this.marketList.push({
        pair: orderBookResponse.symbol,
        change: 4.2,
        changeStatus: Math.round((Math.random() * 100)) % 2 === 1 ? 1 : -1,
        volume: orderBookResponse.bids.length
      });
    } else {
      this.marketList[idx] = {
        ...this.marketList[idx],
        change: 4.2,
        changeStatus: Math.round((Math.random() * 100)) % 2 === 1 ? 1 : -1,
        volume: orderBookResponse.bids.length
      };
    }
  }

  getMarketList():any {
    return this.marketList.filter((o: any) => o.pair.includes(this.searchKey));
  }

  generateTradesData(data: any) {
    let tradesResponse = JSON.parse(data.body);

    let tradeDate = new Date(tradesResponse.eventTime * 1000);
    let hours = tradeDate.getHours();
    var minutes = "0" + tradeDate.getMinutes();
    var seconds = "0" + tradeDate.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    let tradeGroupList = Object.assign({}, this.tradeGroupList);

    if (tradeGroupList.hasOwnProperty(tradesResponse.symbol)) {
      tradeGroupList[tradesResponse.symbol].unshift({
        time: formattedTime,
        price: tradesResponse.price,
        amount: tradesResponse.quantity,
        success: tradesResponse.tradeSide === 'BUY',
        market: tradesResponse.exchange,
        symbol: tradesResponse.symbol
      });
    } else {
      tradeGroupList[tradesResponse.symbol] = [];
    }

    tradeGroupList[tradesResponse.symbol] = tradeGroupList[tradesResponse.symbol].slice(0, this.maxNoOfTradeToDisplay);
    this.tradeGroupList = tradeGroupList;

    /* In markets table, update the price with the last trade price of that pair */

    let marketList = Object.assign([], this.marketList);
    marketList = marketList.map((o: any) => {
      if (o.pair === tradesResponse.symbol) {
        return {
          ...o,
          price: tradesResponse.price
        };
      }

      return o;
    });

    this.marketList = marketList;
  }

  getTradeList():any {
    return this.tradeGroupList.hasOwnProperty(this.marketSelected) 
      ? this.tradeGroupList[this.marketSelected] 
      : [];
  }

  getOrdersBookAsksList():any {
    return this.orderBookAsks.filter((o: any) => o.symbol === this.marketSelected);
  }

  getOrdersBookBidsList():any {
    return this.orderBookBids.filter((o: any) => o.symbol === this.marketSelected);
  }

  sell() {

  }

  buy() {
    
  }

}
