import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OpenOrdersRoutingModule } from './open-orders-routing.module';
import { OpenOrdersComponent } from './open-orders.component';
import { OpenOrdersIndexComponent } from './open-orders-index/open-orders-index.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OpenOrdersComponent,
    OpenOrdersIndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OpenOrdersRoutingModule,
    SharedModule
  ]
})
export class OpenOrdersModule { }
