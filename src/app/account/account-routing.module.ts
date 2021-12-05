import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotificationComponent } from './notification/notification.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'account',
        component: MyAccountComponent
      }, {
        path: 'security',
        component: SecurityComponent
      }, {
        path: 'notification',
        component: NotificationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
