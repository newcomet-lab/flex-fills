import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/trade', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'account', loadChildren: () => import('./components/account/account.module').then(m => m.AccountModule) },
  { path: 'markets', loadChildren: () => import('./components/markets/markets.module').then(m => m.MarketsModule) },
  { path: 'open-orders', loadChildren: () => import('./components/open-orders/open-orders.module').then(m => m.OpenOrdersModule) },
  { path: 'trade', loadChildren: () => import('./components/trade/trade.module').then(m => m.TradeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
