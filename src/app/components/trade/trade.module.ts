import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule  } from '@angular/common/http';

import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade.component';
import { TradeIndexComponent } from './trade-index/trade-index.component';
import { SharedModule } from '../shared/shared.module';

import { TradeHistoryService } from '../../services/trade-history.service';
import { SocketService } from '../../services/socket.service';


@NgModule({
  declarations: [
    TradeComponent,
    TradeIndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TradeRoutingModule,
    SharedModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [
    TradeHistoryService,
    SocketService
  ]
})
export class TradeModule { }
