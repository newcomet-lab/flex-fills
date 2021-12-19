import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade.component';
import { TradeIndexComponent } from './trade-index/trade-index.component';
import { SharedModule } from '../shared/shared.module';
import { TradeAssetViewComponent } from './trade-asset-view/trade-asset-view.component';

@NgModule({
  declarations: [
    TradeComponent,
    TradeIndexComponent,
    TradeAssetViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TradeRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class TradeModule { }
