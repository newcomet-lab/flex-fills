import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenOrdersIndexComponent } from './open-orders-index/open-orders-index.component';
import { OpenOrdersComponent } from './open-orders.component';

const routes: Routes = [
  { 
    path: '', 
    component: OpenOrdersComponent,
    children: [
      {
        path: 'index',
        component: OpenOrdersIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenOrdersRoutingModule { }
