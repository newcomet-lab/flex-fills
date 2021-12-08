import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';
import { SharedModule } from '../shared/shared.module';
import { MarketsIndexComponent } from './markets-index/markets-index.component';

@NgModule({
  declarations: [
    MarketsComponent,
    MarketsIndexComponent
  ],
  imports: [
    CommonModule,
    MarketsRoutingModule,
    SharedModule
  ]
})
export class MarketsModule { }
