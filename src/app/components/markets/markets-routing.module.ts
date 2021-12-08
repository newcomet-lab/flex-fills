import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketsIndexComponent } from './markets-index/markets-index.component';
import { MarketsComponent } from './markets.component';

const routes: Routes = [
  { 
    path: '', 
    component: MarketsComponent,
    children: [
      {
        path: 'index',
        component: MarketsIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketsRoutingModule { }
