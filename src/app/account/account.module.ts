import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { TopNavComponent } from '../shared/top-nav/top-nav.component';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';
import { SecurityComponent } from './security/security.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SecuritySettings2faComponent } from './security/security-settings2fa/security-settings2fa.component';
import { SecuritySettingsWhitelistComponent } from './security/security-settings-whitelist/security-settings-whitelist.component';
import { WalletAddressFormComponent } from './security/wallet-address-form/wallet-address-form.component';
import { SecuritySettingsSessionComponent } from './security/security-settings-session/security-settings-session.component';
import { SecuritySettingsWithdrawalComponent } from './security/security-settings-withdrawal/security-settings-withdrawal.component';

@NgModule({
  declarations: [
    AccountComponent,
    TopNavComponent,
    SideNavComponent,
    SecurityComponent,
    MyAccountComponent,
    SecuritySettings2faComponent,
    SecuritySettingsWhitelistComponent,
    WalletAddressFormComponent,
    SecuritySettingsSessionComponent,
    SecuritySettingsWithdrawalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
