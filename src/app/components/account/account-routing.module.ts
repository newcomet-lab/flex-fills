import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { ChartSettingComponent } from './chart-setting/chart-setting.component';
import { HistoryComponent } from './history/history.component';
import { IdentifyVerificationComponent } from './identify-verification/identify-verification.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotificationComponent } from './notification/notification.component';
import { SecurityComponent } from './security/security.component';
import { SupportComponent } from './support/support.component';
import { ThemeComponent } from './theme/theme.component';
import { AssetsComponent } from './assets/assets.component';
import { DepositeComponent } from './deposite/deposite.component';
import { DepositeEditComponent } from './deposite-edit/deposite-edit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { WithdrawEditComponent } from './withdraw-edit/withdraw-edit.component';

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
      }, {
        path: 'identify-verification',
        component: IdentifyVerificationComponent
      }, {
        path: 'theme',
        component: ThemeComponent
      }, {
        path: 'chart-settings',
        component: ChartSettingComponent
      }, {
        path: 'address-book',
        component: AddressBookComponent
      }, {
        path: 'history',
        component: HistoryComponent
      }, {
        path: 'support',
        component: SupportComponent
      }, {
        path: 'assets',
        component: AssetsComponent
      }, {
        path: 'deposite',
        component: DepositeComponent
      }, {
        path: 'deposite-edit/:id',
        component: DepositeEditComponent
      }, {
        path: 'withdraw',
        component: WithdrawComponent
      }, {
        path: 'withdraw-edit/:id',
        component: WithdrawEditComponent
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
