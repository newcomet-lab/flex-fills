import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-settings-withdrawal',
  templateUrl: './security-settings-withdrawal.component.html',
  styleUrls: ['./security-settings-withdrawal.component.scss']
})
export class SecuritySettingsWithdrawalComponent implements OnInit {

  withdrawalSettingList = [
    {
      label: "Monitor Withdrawals by IP",
      checked: false
    }, {
      label: "Lock withdrawals for 24 hours when a new IP address is used",
      checked: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onWithdrawalSettingChange(index: any) {
    this.withdrawalSettingList[index].checked = !this.withdrawalSettingList[index].checked;
  }

}
