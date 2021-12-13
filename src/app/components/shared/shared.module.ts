import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NumberWithSpacePipe } from './pipes/number-with-space/number-with-space.pipe';
import { TradingViewChartComponent } from './trading-view-chart/trading-view-chart.component';

import { TradeHistoryService } from '../../services/trade-history.service';
import { SocketService } from '../../services/socket.service';
import { HcDepthChartComponent } from './hc-depth-chart/hc-depth-chart.component';
import { HcCandlestickChartComponent } from './hc-candlestick-chart/hc-candlestick-chart.component';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    NumberWithSpacePipe,
    TradingViewChartComponent,
    HcDepthChartComponent,
    HcCandlestickChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    NumberWithSpacePipe,
    TradingViewChartComponent,
    HcDepthChartComponent,
    HcCandlestickChartComponent
  ],
  providers: [
    TradeHistoryService,
    SocketService
  ]
})
export class SharedModule { }
