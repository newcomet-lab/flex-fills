import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade.component';
import { TradeIndexComponent } from './trade-index/trade-index.component';
import { SharedModule } from '../shared/shared.module';


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
    NgApexchartsModule
  ]
})
export class TradeModule { }
