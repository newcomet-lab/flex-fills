import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-deposite-edit',
  templateUrl: './deposite-edit.component.html',
  styleUrls: ['./deposite-edit.component.scss']
})
export class DepositeEditComponent implements OnInit {

  depositeInfo : any = null;

  coinList = [
    {
      id: 1,
      logo: "assets/img/currency/btc_icon.png",
      label: 'BTC',
      qrCode: 'assets/img/qr_code.png',
      address: '123ffy9wehjzos'
    }, {
      id: 2,
      logo: "assets/img/currency/xrp_icon.png",
      label: 'XRP',
      qrCode: 'assets/img/qr_code.png',
      address: '123ffy9wehjzos'
    }
  ];

  modalController: bootstrap.Modal | undefined;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    this.depositeInfo = this.coinList.find(o => o.id === parseInt(id));
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  closeModal(){
    this.modalController?.toggle()
  }

  openModal(element: any){
    this.modalController = new bootstrap.Modal(element,{} )
    this.modalController?.show()
  }

}
