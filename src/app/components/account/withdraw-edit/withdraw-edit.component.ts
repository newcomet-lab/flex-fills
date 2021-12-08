import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import * as Feather from 'feather-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdraw-edit',
  templateUrl: './withdraw-edit.component.html',
  styleUrls: ['./withdraw-edit.component.scss']
})
export class WithdrawEditComponent implements OnInit {

  withdrawInfo : any = null;
  withdrawProcessInfos : any = [];
  modalController: bootstrap.Modal | undefined;
  auth2FAForm!: FormGroup;
  auth2FAFormSubmitted = false;

  coinList = [
    {
      id: 1,
      label: 'Bitcoin',
      arial: 'BTC',
      addressList: [
        '12fjsdjoisufos',
        '1374lkjoiasidf'
      ],
      total: 0.47
    }, {
      id: 2,
      label: 'Ethereum',
      arial: 'ETH',
      addressList: [
        '12fjsdjoisufos',
        '1374lkjoiasidf'
      ],
      total: 0.87
    }
  ];

  constructor(
    private actRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    this.withdrawInfo = this.coinList.find(o => o.id === parseInt(id));

    this.auth2FAForm = this.fb.group({
      token: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  isSelected(address: any) {
    if (this.withdrawProcessInfos.length === 0) {
      return false;
    } else {
      return this.withdrawProcessInfos.indexOf(address) !== -1;
    }
  }

  onSelect(address: any) {
    if (this.withdrawProcessInfos.indexOf(address) === -1) {
      this.withdrawProcessInfos.push(address);
    } else {
      this.withdrawProcessInfos.splice(this.withdrawProcessInfos.indexOf(address), 1);
    }
  }

  closeModal(){
    this.modalController?.toggle()
  }

  openModal(element: any){
    this.modalController = new bootstrap.Modal(element,{} )
    this.modalController?.show()
  }

  get getform() {
    return this.auth2FAForm.controls;
  }

  on2FATokenSubmit() {
    this.auth2FAFormSubmitted = true;
    if (!this.auth2FAForm.valid) {
      return;
    }
    console.log('SUCCESS' + JSON.stringify(this.auth2FAForm.value));
    this.closeModal();
  }

}
