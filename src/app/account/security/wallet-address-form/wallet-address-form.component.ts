import { 
  Component, 
  EventEmitter, 
  Input, 
  OnInit, 
  Output 
} from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-wallet-address-form',
  templateUrl: './wallet-address-form.component.html',
  styleUrls: ['./wallet-address-form.component.scss']
})
export class WalletAddressFormComponent implements OnInit {

  walletForm!: FormGroup;
  walletFormSubmitted = false;
  coinList = [
    'BTC',
    'ETH',
    'SOL',
    'DOGE'
  ];
  @Input() withdrawalInfo: any;
  @Input() withdrawalInfoIndex: any;
  @Output() saveWithdrawalInfo: EventEmitter<any> = new EventEmitter();
  @Output() removeWithdrawalInfo: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.walletForm = this.fb.group({
      address: [
        this.withdrawalInfo.address,
        [
          Validators.required
        ]
      ],
      type: [
        this.withdrawalInfo.type === '' 
        ? this.coinList[0] 
        : this.withdrawalInfo.type,
        [
          Validators.required
        ]
      ]
    });
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  get getform() {
    return this.walletForm.controls;
  }

  onWalletFormSubmit() {
    this.walletFormSubmitted = true;
    if (!this.walletForm.valid) {
      return;
    }
    console.log('SUCCESS' + JSON.stringify(this.walletForm.value));

    this.saveWithdrawalInfo.emit({
      withdrawalInfoIndex: this.withdrawalInfoIndex,
      info: {
        ...this.walletForm.value,
        saved: true
      }
    });
  }

  onRemoveWithdrawalInfo() {
    this.removeWithdrawalInfo.emit(this.withdrawalInfoIndex);
  }

}
