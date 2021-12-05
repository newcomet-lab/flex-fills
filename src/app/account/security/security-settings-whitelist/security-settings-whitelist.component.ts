import { 
  Component, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'app-security-settings-whitelist',
  templateUrl: './security-settings-whitelist.component.html',
  styleUrls: ['./security-settings-whitelist.component.scss']
})
export class SecuritySettingsWhitelistComponent implements OnInit {

  withdrawalWhitelist = [
    {
      address: 'eei32kfjaoui3hj',
      type: 'BTC',
      saved: true
    }
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

  addNewAddress() {
    this.withdrawalWhitelist.push({
      address: '',
      type: '',
      saved: false
    });
  }

  saveWithdrawalInfo(data: any) {
    this.withdrawalWhitelist[data.withdrawalInfoIndex] = data.info;
  }

  removeWithdrawalInfo(index: any) {
    this.withdrawalWhitelist.splice(index, 1);
  }

}
