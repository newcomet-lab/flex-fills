import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeIndexComponent } from './trade-index/trade-index.component';
import { TradeComponent } from './trade.component';

const routes: Routes = [
  { 
    path: '', 
    component: TradeComponent,
    children: [
      {
        path: 'index',
        component: TradeIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
