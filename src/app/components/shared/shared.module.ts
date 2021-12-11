import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';

import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NumberWithSpacePipe } from './pipes/number-with-space/number-with-space.pipe';
import { TradingViewChartComponent } from './trading-view-chart/trading-view-chart.component';

import { TradeHistoryService } from '../../services/trade-history.service';
import { SocketService } from '../../services/socket.service';

@NgModule({
  declarations: [
    TopNavComponent,
    SideNavComponent,
    NumberWithSpacePipe,
    TradingViewChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    TopNavComponent,
    SideNavComponent,
    NumberWithSpacePipe,
    TradingViewChartComponent
  ],
  providers: [
    TradeHistoryService,
    SocketService
  ]
})
export class SharedModule { }
