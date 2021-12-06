import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  withdrawAddressList = [
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
    this.withdrawAddressList.push({
      address: '',
      type: '',
      saved: false
    });
  }

  saveWithdrawalInfo(data: any) {
    this.withdrawAddressList[data.withdrawalInfoIndex] = data.info;
  }

  removeWithdrawalInfo(index: any) {
    this.withdrawAddressList.splice(index, 1);
  }

}
